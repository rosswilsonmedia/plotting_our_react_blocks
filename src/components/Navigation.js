import React, {Component} from "react";

class Navigation extends Component {
    render() {
        const navigationStyle={
            backgroundColor: '#6fa8dc',
            height: '12em',
            width: '15.5%',
            verticalAlign: 'top',
            display: 'inline-block'
        }
        return (
            <nav style={navigationStyle}></nav>
        )
    }
}

export default Navigation;