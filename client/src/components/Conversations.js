import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";


class Conversations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myself: null,
            otherUsers: null,
            conversations: null,
        };
        this.renderMessageAndName = this.renderMessageAndName.bind(this);
    }

    componentDidMount() {
        this.props.getMyself(() => {
            this.setState({myself: this.props.myself});
        });
        this.props.getConversations(() => {
            console.log(this.props.conversations);
            this.setState({conversations: this.props.conversations});
            console.log(this.state.conversations);
        });
    }

    renderMessageAndName(conv) {
        if (this.state.myself !== null) {
            var id = conv.members[0] === this.state.myself._id ? conv.members[1] : conv.members[0];
            this.props.getUser(() => {
            }, {userId: id});
            if (this.props.otherUser)
            {
                return (
                    <div>
                        <h3>
                            <Link to={`/message/${this.props.otherUser._id}`}>
                                {this.props.otherUser.firstname.charAt(0).toUpperCase() + this.props.otherUser.firstname.slice(1)} {this.props.otherUser.lastname.charAt(0).toUpperCase()}.
                            </Link>
                        </h3>
                        <p>
                            <Link to={`/message/${this.props.otherUser._id}`}>
                                {conv.messages[conv.messages.length - 1].message}
                            </Link>
                        </p>
                    </div>
                )
            }
            else
                return '';
        }
        else
        {
            return '';
        }
    }

    renderConvos() {
        if (this.state.conversations !== null) {
            return (
                this.state.conversations.map(conv => {
                        return (
                            <div className="latest_message_sec" key={conv._id}>
                                <div className="latest_message_sec row">
                                    <div className="col-md-2 col-sm-2 col-xs-2 text-center">
                                        <figure className="square-img-ctn">
                                            <a
                                                href="{{ path('gme_platform_viewconversation', {'toid': toaff.id}) }}"
                                                className="image-bg image-bg-w85">
                                                <img className="image-bg-placeholder"
                                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                                     alt=""/>
                                                <img className="image-bg-img sr-only"
                                                     src="https://ui-avatars.com/api/?name={{ toaff.prenom }}+{{ toaff.nom }}&background=FFAE69&color=fff&size=150&font-size=0.33"
                                                     alt=""/>
                                            </a>
                                        </figure>

                                    </div>
                                    <div className="col-sm-7 col-xs-7">
                                        <div className="msg-preview">
                                            {this.renderMessageAndName(conv)}
                                        </div>

                                    </div>
                                    {/* 📱 Statut des messages // MOBILE */}
                                    <div className="hidden-md col-xs-3">
                                        <p className="date-msg">
                                        <span className="unread-msg">
                                          <i className="ion-android-done"></i>
                                          Non lu
                                        </span>
                                            <span className="read-msg">
                                          <i className="ion-android-done-all"></i>
                                          Lu
                                        </span>

                                        </p>
                                    </div>
                                    {/* 🖥️ Statut des messages // DESKTOP */}
                                    <div className="col-sm-3 col-xs-12 msg-status latest_message_messcoll_04 hidden-xs">
                                        <p className="msg-actions">
                                        <span className="read-msg">
                                          <i className="ion-android-done"></i>
                                          Non lu
                                        </span>
                                            <span className="read-msg">
                                          <i className="ion-android-done-all"></i>
                                          Lu
                                        </span>
                                        </p>

                                        <a className="delete-msg" data-toggle="modal" data-backdrop="false"
                                           data-target="#modalDelete-{{ loop.index }}" title="Supprimer" href="#">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                ));
        }
        else {
            return '';
        }
    }


    render() {
        return (
            <div className="mid_post_sec">
                <div className="mid_post_sec001">
                    <div className="mid_post_sub latest_messagetext messagerie-ctn">
                        <section className="container">
                            <h2>
                                MESSAGERIE
                            </h2>
                            {/*for*/}
                            {this.renderConvos()}


                            {/*endfor*/}
                        </section>

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
        otherUser: state.user.user,
        conversations: state.conversations.total
    }
}


export default connect(mapStateToProps)(requireAuth(Conversations));
