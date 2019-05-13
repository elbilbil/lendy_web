import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";
import ReactLoading from "react-loading";
import ImageUser from "./ImageUser";


class Conversations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myself: null,
            otherUsers: [],
            conversations: null,
        };
    }

    componentDidMount() {
        this.props.getMyself(() => {
            this.setState({myself: this.props.myself});
            this.props.getConversations(() => {
                this.setState({conversations: this.props.conversations});
                this.props.conversations.map(conv => {
                    var id = conv.members[0] === this.state.myself._id ? conv.members[1] : conv.members[0];
                    this.props.getUsers((resp) => {
                        this.setState({otherUsers: this.state.otherUsers.concat(resp)});
                    }, {userId: id});
                })
            });
        });
    }


    renderConvos() {
        if (this.state.conversations !== null && this.state.otherUsers.length === this.state.conversations.length) {
            if (this.state.conversations.length === 0)
                return (
                    <div>
                        <p>Aucune conversation</p>
                    </div>
                );
            return (
                this.state.conversations.map((conv, index) => {
                        return (
                            <div className="latest_message_sec" key={conv._id}>
                                <div className="latest_message_sec row">
                                    <div className="col-md-2 col-sm-2 col-xs-2 text-center">
                                        <figure className="square-img-ctn">
                                            <a
                                                href="{{ path('gme_platform_viewconversation', {'toid': toaff.id}) }}"
                                                className="image-bg image-bg-w85">
                                                <ImageUser user={this.state.otherUsers[index]}/>
                                            </a>
                                        </figure>

                                    </div>
                                    <div className="col-sm-7 col-xs-7">
                                        <div className="msg-preview">
                                            <div>
                                                <h3>
                                                    <Link to={`/message/${this.state.otherUsers[index]._id}`}>
                                                        {this.state.otherUsers[index].firstname.charAt(0).toUpperCase() + this.state.otherUsers[index].firstname.slice(1)} {this.state.otherUsers[index].lastname.charAt(0).toUpperCase()}.
                                                    </Link>
                                                </h3>
                                                <p>
                                                    <Link to={`/message/${this.state.otherUsers[index]._id}`}>
                                                        {conv.messages[conv.messages.length - 1].message}
                                                    </Link>
                                                </p>
                                            </div>
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
            return (
                <ReactLoading className='myCenter' type="spin" color="#f26d7d"/>
            );
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
                            {this.renderConvos()}
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
