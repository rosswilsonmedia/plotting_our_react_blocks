import React, {Component} from "react";

class Advertisement extends Component {
    render() {
        const advertisementStyle={
            backgroundColor: '#b4a7d6',
            marginLeft: '2em',
            height: '5em',
            width: 'calc(100% - 2em)'
        }
        return (
            <section style={advertisementStyle}></section>
        )
    }
}

export default Advertisement;