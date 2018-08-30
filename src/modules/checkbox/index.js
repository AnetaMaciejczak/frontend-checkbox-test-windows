/* eslint-disable */
import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.isChecked || false,
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({ isChecked: !this.state.isChecked })
    }
    render () {
        const content = this.state.isChecked
            ? <div className= "content">HIDDEEN CONTENT</div>
            : null

        return (
            <div>
                <div className = "title">Checkbox</div>
                <label className="switch">
                    <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
                    <div className="slider"></div>
                </label>
                {content}
            </div>
    );
    }
}




//
// class Checkbox extends React.Component {
//     constructor (props) {
//         super (props);
//         // this.state = {
//         //     isChacked:
//         //
//         // }
//     }
//     render() {
//         // const content =
//         return(
//             <div className="checkbox">
//                 <div className="title">
//                     Checkbox
//                 </div>
//                 <div className="content">
//                     <input type="checkbox" />
//                 </div>
//             <div>HIDDEN CONTENT</div>
//             </div>
//         );
//     }
// }

export default Toggle;
