import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SignupChoice extends Component {

    render() {
        return (
            <main id="ts-content">

                <section id="how-it-works" className="ts-block text-center">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-xl-6">
                            <figure data-animate="ts-fadeInUp">
                                <figure className="icon mb-5 p-2">
                                    <img src='assets/img/wheel.png' alt=""/>
                                    <div className="ts-svg" data-animate="ts-zoomInShort"
                                         data-bg-image='/assets/svg/organic-shape-01.svg'></div>
                                </figure>
                                <h4>Je suis chauffeur</h4>
                                <p>
                                    Vous avez du temps à consacrer à la plateforme, et vous voulez récuperer un
                                    véhicule en échange?
                                </p>
                                <Link to='/signup/drivers'
                                      className="btn btn-primary mb-4 ts-scroll">S'inscrire</Link>
                            </figure>
                        </div>

                        <div className="col-sm-6 col-md-6 col-xl-6">
                            <figure data-animate="ts-fadeInUp" data-delay="0.1s">
                                <figure className="icon mb-5 p-2">
                                    <img src='/assets/img/handshake.png' alt=""/>
                                    <div className="ts-svg" data-animate="ts-zoomInShort"
                                         data-bg-image='/assets/svg/organic-shape-02.svg'></div>
                                </figure>
                                <h4>Je suis prêteur</h4>
                                <p>
                                    Vous avez un véhicule à dispotition mais vous l'utilsez rarement. Prêtez le en
                                    échange d'un chauffeur !
                                </p>
                                <Link to='/signup/lenders'
                                      className="btn btn-primary mb-4 ts-scroll">S'inscrire</Link>
                            </figure>
                        </div>


                    </div>
                </section>
            </main>
        )
    }
}


export default SignupChoice;
