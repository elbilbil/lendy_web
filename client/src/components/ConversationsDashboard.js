import React, { Component } from "react";
import {Link} from "react-router-dom";


export default class ConversationsDashboard extends Component {
    render() {
        return (
            <section className="container">
                <div className="row row-eq-height request-row conversation-{{ conversation.id }}">
                    <div className="col-md-3 request-header-col onhold">
                        <div className="request-header">
                                <img alt="image" className="photo-message" src="/assets/people/1.jpg"/>
                            <h4>Jean Daniel</h4>
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
                                de Jean Daniel</h4>
                            <p className="short-msg short-msg-{{ loop.index }}">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a className="txt-link show-msg show-msg-{{ loop.index }}">Voir le message</a>
                            <a className="txt-link hide-msg hide-msg-{{ loop.index }}">Masquer le message</a>
                            <p>&nbsp;</p>
                        </div>
                    </div>

                    <div className="col-md-3 btns-col">
                            <Link className="btn btn-secondary ml-md-3" to='#' style={{marginBottom: '10%'}}>Ne plus afficher</Link>
                            <Link className="btn btn-primary ml-md-3" to='#'>Répondre au message</Link>
                    </div>
                </div>
            </section>
        );
    }
}