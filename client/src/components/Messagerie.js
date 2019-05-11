import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";
import {compose} from "redux";
import * as actions from "../actions";
import {Field, reduxForm} from "redux-form";
import ImgUpload from "./ImgUpload";
import ImageUser from "./ImageUser";


class Messagerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            user: null,
            messages: null,
            myself: null
        };
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.setState({id: userId});
        this.props.getMyself(() => {
            this.setState({myself: this.props.myself});
        });
        this.props.getUser(() => {
            this.setState({user: this.props.user});
            this.props.getConversation(() => {
                this.setState({messages: this.props.messages.reverse()})
            }, {contacts: this.state.user._id});
        }, {userId: userId});
    }

    renderUserDetails() {
        if (this.state.user !== null) {
            return (
                <div className="massege_details_sub01 text-center">
                    <div className="massege_details_sub_col01">
                        <div className="massege_details_col01_img">

                            <ImageUser user={this.state.user}/>

                        </div>

                        <div className="massege_details_col01_text">
                            <h2> {this.state.user.firstname.charAt(0).toUpperCase() + this.state.user.firstname.slice(1)} {this.state.user.lastname.charAt(0).toUpperCase()}.
                            </h2>
                        </div>

                        {/*
                    <div
                        className="interloc-details hidden-xs">
                        <p>
                            Distance
                            : 2
                            KM
                        </p>
                    </div>
                    */}
                        <div className="show-ad-ctn">
                            <Link to={`/profile/${this.state.user._id}`} className="btn btn-primary search-btn">Voir son
                                annonce
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
        else
            return '';
    }


    renderMessage(message) {
        var dateMessage = new Date(message.createdAt);
        var options = {year: 'numeric', month: 'numeric', day: 'numeric'};
        if (message.refUser[0] === this.state.myself._id) {
            return (
                <div className="message_rightside_box02">
                    <div className="message_rightside_box02_left">
                        <div className="message_rightside_box01_left_img2">

                            <div className="message_rightside_box01_rightimg">
                                <ImageUser user={this.state.myself}/>
                            </div>
                        </div>
                    </div>

                    <div className="message_rightside_box01_left0">

                        <div className="arrow-down_left"></div>
                        <div className="message_rightside_box02_left01">
                            <h4>{message.message}</h4>
                            <p>{dateMessage.toLocaleString('fr-FR', options)}</p>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="message_rightside_box03">
                    <div className="message_rightside_box01_left">
                        <div className="arrow-down_right colorchange"></div>
                        <div
                            className="message_rightside_box03_left01">

                            <h4>{message.message}</h4>
                            <p>{dateMessage.toLocaleString('fr-FR', options)}</p>
                        </div>
                    </div>

                    <div className="message_rightside_box01_right">
                        <div
                            className="message_rightside_box01_left_img2">

                            <ImageUser user={this.state.user}/>
                        </div>
                    </div>
                </div>
            );
        }
    }

    renderMessages() {
        if (this.state.messages === null || this.state.myself === null || this.state.user === null) {
            return '';
        }
        else {
            return (
                this.state.messages.map((message) => {
                    return (
                        <div key={message._id}>
                            {this.renderMessage(message)}
                        </div>
                    )
                })
            )
        }
    }

    renderTextArea({input, label, type, placeholder, autoComplete, meta: {touched, error}}) {

        return (
            <div>
                <textarea {...input} placeholder={placeholder} type={type} autoComplete='off' className="form-control"/>
                {touched && error && <span className='text-danger'>{error}</span>}
            </div>
        );
    }

    onSubmit = (formProps) => {
        formProps = {...formProps, contacts: this.state.user._id};
        this.props.postMessage(() => {
            this.props.getConversation(() => {
                this.props.reset();
                this.setState({messages: this.props.messages.reverse()})
            }, {contacts: this.state.user._id});
        }, formProps);
    };


    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <div id="espace_mobile_conv"></div>
                <div className="mid_post_section profiletop container">
                    <div className="massege_details_col">
                        <div className="massege_details_sec conversation-list">
                            {this.renderUserDetails()}

                            <div className="message_rightside">
                                <div className="message_rightside_in">
                                    <div className="message_rightside_box01">
                                        <div className="message_rightside_box01_left">
                                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                                <div className="">
                                                    <div className="arrow-down_right"></div>
                                                    <div className="message_rightside_box01_left01">
                                                        <fieldset>
                                                            <Field name='message'
                                                                   type='text'
                                                                   autoComplete='off'
                                                                   className="form-control"
                                                                   placeholder="Votre message"
                                                                   component={this.renderTextArea}
                                                            />
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <div>
                                                    {this.props.errorMessage}
                                                </div>
                                                <div className="message_rightside_box01_left02 ">
                                                    <button type="submit" id="message_Envoyer"
                                                            name="message[Envoyer]"
                                                            className="btn-default btn">Envoyer
                                                    </button>

                                                </div>
                                            </form>


                                        </div>
                                        <div className="message_rightside_box01_left_img2">
                                            <ImageUser user={this.state.myself}/>
                                        </div>

                                        <div className="clear"></div>
                                        {this.renderMessages()}
                                    </div>

                                </div>
                                <div className="clear">
                                </div>
                            </div>
                        </div>

                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myself: state.myself.myself,
        user: state.user.user,
        messages: state.conversations.current,
    }
}

function validate(values) {
    const errors = {};


    if (!values.message) {
        errors.message = 'Vous ne pouvez pas envoyer de message vide';
    }

    return errors;
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        validate,
        form: 'Profile'
    })
)(requireAuth(Messagerie));
