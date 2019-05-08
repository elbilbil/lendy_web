import React, {Component} from "react";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import requireAuth from "./requireAuth";
import ReactLoading from "react-loading";


class ConversationsDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversation: null,
            user: null,
            myself: null,
        };
    }

    componentDidMount() {
        this.props.getMyself(() => {
            this.setState({myself: this.props.myself})
            this.props.unreadMessages(() => {
                this.setState({conversation: this.props.conversations.unread});
                if (!this.state.conversation[0]) {
                    this.setState({conversation: -1});
                    return;
                }
                var id = this.state.conversation[0].members[0] === this.state.myself._id ? this.state.conversation[0].members[1] : this.state.conversation[0].members[0];
                this.props.getUser(() => {
                    this.setState({user: this.props.user});
                }, {userId: id});
            });
        });
    }

    renderBlock() {
        if (this.state.conversation === -1)
            return (
                <div>
                    <p>Aucune nouvelle conversation</p>
                </div>
            );
        if (this.state.user === null || this.state.conversation === null || this.props.myself === null) {
            return (
                <ReactLoading className='myCenter' type="spin" color="#f26d7d"/>
            );
        }
        else {
            return (
                <div className="row row-eq-height request-row conversation-{{ conversation.id }}">
                    <div className="col-md-3 request-header-col onhold">
                        <div className="request-header">
                            <img alt="image" className="photo-message" src="/assets/people/1.jpg"/>
                            <h4>{this.state.user.firstname.charAt(0).toUpperCase() + this.state.user.firstname.slice(1)} {this.state.user.lastname.charAt(0).toUpperCase()}.</h4>
                            <p>
                                <strong>
                                    <i className="ion-location"></i>
                                </strong>
                                Distance: 2km
                            </p>

                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="parent-msg" id="userid2">
                            <h4 className="dashboard-card-title">Message
                                de {this.state.user.firstname.charAt(0).toUpperCase() + this.state.user.firstname.slice(1)} {this.state.user.lastname.charAt(0).toUpperCase()}.</h4>
                            <p className="short-msg short-msg-{{ loop.index }}">
                                {this.state.conversation[0].messages[this.state.conversation[0].messages.length - 1].message}
                            </p>
                            <p>&nbsp;</p>
                        </div>
                    </div>

                    <div className="col-md-3 btns-col">
                        <Link className="btn btn-primary ml-md-3" to={`/message/${this.props.user._id}`}>Répondre au message</Link>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <section className="container">
                    {this.renderBlock()}
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        conversations: state.conversations,
        user: state.user.user,
        myself: state.myself.myself
    }
}


export default connect(mapStateToProps)(requireAuth(ConversationsDashboard));