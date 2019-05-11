import React, {Component} from 'react';

import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";


export default class ImageUser extends Component {

    render() {
        if (this.props.user) {
            if (this.props.user.picture) {
                return (
                    <img alt="person" className="img-fluid rounded-0"
                         src={`http://api.lendy.fr/user/static/images/users/${this.props.user.picture}`}/>
                )
            }
            return (
                <img alt="person" className="img-fluid rounded-0"
                     src={`https://ui-avatars.com/api/?name=${this.props.user.firstname.charAt(0)}+${this.props.user.lastname.charAt(0)}&background=f26d7d&color=fff&size=400&font-size=0.33`}/>
            );
        }
        return '';
    }
}
