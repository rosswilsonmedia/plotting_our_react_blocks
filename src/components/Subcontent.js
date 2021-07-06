import React, {Component} from "react";

class Subcontent extends Component {
    render() {
        const subcontentStyle={
            backgroundColor: '#ffd966',
            display: 'inline-block',
            marginLeft: '2em',
            marginBottom: '2em',
            height: '12em',
            width: '29%'
        }
        return (
            <section style={subcontentStyle}></section>
        )
    }
}

export default Subcontent;