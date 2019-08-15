import PropTypes from 'prop-types';
import React, {Component} from 'react';
import socketIOClient from 'socket.io-client';
import {
    ListHeader,
    ListItem,
    Page,
} from 'react-onsenui';

import BasicComponent from '../lib/onsen/BasicComponent';

//https://github.com/OnsenUI/OnsenUI/blob/master/bindings/react/src/components/List.jsx


class List extends BasicComponent {
    render() {

        return (
            <ons-list ref={(list) => {
                this._list = list;
            }}>
                {this.props.children}
            </ons-list>
        );
    }
}

const withVideoSubscription = WrappedComponent => class extends Component {
    state = {data: []};

    componentDidMount() {
        const socket = socketIOClient(':8081');
        socket.on('video', data => {
                this.setState({data: data.filter((el, i) => i < 20)}); // Temporary limiting the number of videos until infinite scroll is implemented
            }
        );
    }

    render() {
        return <WrappedComponent data={this.state.data} {...this.props} />;
    }
};


const videoListItem = ({name, size}) => (
    <>
        <div className="left">
            <video controls width="250">
                <source
                    src={`video/${name}`}
                    type="video/mp4"
                />
            </video>
        </div>
        <div className="center">
            <span className="list-item__title"><a href={`video/${name}`}>{name}</a></span>
            <span
                className="list-item__subtitle"
            >
          {(size / 1024 / 1024).toFixed(1)}
                Mb
        </span>
        </div>
    </>
);

const renderRow = (row, idx) => (
    <ListItem key={idx}>
        {videoListItem(row)}
    </ListItem>
);

class VideoPage extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    static defaultProp = {
        data: []
    };

    render() {
        return (
            <Page>
                <List>
                    <ListHeader style={{fontSize: 15}}>Videos</ListHeader>
                    {this.props.data.map(renderRow)}
                </List>
            </Page>
        );
    }
}

export default withVideoSubscription(VideoPage);
