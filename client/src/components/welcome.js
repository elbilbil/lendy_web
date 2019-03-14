import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class Welcome extends Component {
    componentDidMount(){
        if (this.props.authenticated)
        {
            this.props.history.push('/feature');
        }
    }

    render() {
        return (
            <div>
                <div className="fdb-block fdb-viewport bg-dark"
                     style={{backgroundImage: 'url(assets/img/slider_home.jpg)'}}>
                    <div className="container front-page-title">
                        <div className="container align-self-center">
                            <div className="row align-items-center">
                                <div className="col-sm-7">
                                    <h3 className="ts-opacity__50">Découvrez</h3>
                                    <h1>Le partage automobile, réinventé</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" data-bg-image-opacity=".6" data-bg-parallax="scroll"
                         data-bg-parallax-speed="3">
                        <div className="ts-svg ts-z-index__2">
                            <img src='/assets/svg/wave-static-02.svg'
                                 className="w-100 position-absolute ts-bottom__0" alt='wave'/>
                            <img src='/assets/svg/wave-static-01.svg' alt='wave'
                                 className="w-100 position-absolute ts-bottom__0"/>
                        </div>
                        <div className="owl-carousel ts-hero-slider" data-owl-loop="1">
                            <div className="ts-background-image ts-parallax-element" data-bg-color="#d24354"
                                 data-bg-image='/assets/img/slider_home.jpg'
                                 data-bg-blend-mode="multiply"></div>
                        </div>
                    </div>
                </div>
                <main id="ts-content">

                    <section id="how-it-works" className="ts-block text-center">
                        <div className="container">
                            <div className="ts-title">
                                <h2>Demarrez avec Lendy</h2>
                            </div>

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
                                            Vous avez un véhicule à dispotition mais vous l'utilsez rarement. Prêtez le
                                            en
                                            échange d'un chauffeur !
                                        </p>
                                        <Link to='/signup/lenders'
                                              className="btn btn-primary mb-4 ts-scroll">S'inscrire</Link>
                                    </figure>
                                </div>


                            </div>

                        </div>

                    </section>

                    <section id="what-is-appstorm" className="ts-block">
                        <div className="container">
                            <div className="ts-title">
                                <h2>Lendy c'est quoi?</h2>
                            </div>

                            <div className="row">
                                <div className="col-md-5 col-xl-5" data-animate="ts-fadeInUp" data-offset="100">
                                    <p>
                                        Votre voiture reste dans le garage car vous ne pouvez plus
                                        l'utiliser, alors que vous avez des besoins de déplacement ponctuels ?
                                        Vous avez besoin d'une voiture, sans les moyens de l'acquérir, mais vous avez du
                                        temps ?
                                        A travers une plate-forme web et mobile, Lendy met en relation ces
                                        personnes et permet de résoudre leurs besoins.
                                    </p>

                                    <Link to='/signup'
                                          className="btn btn-primary mb-4 ts-scroll">Je m'inscris!</Link>
                                </div>

                                <div className="col-md-7 col-xl-7 text-center" data-animate="ts-fadeInUp"
                                     data-delay="0.1s"
                                     data-offset="100">
                                    <div className="px-3">
                                        <img src='/assets/img/covoit.jpg'
                                             className="mw-100 ts-shadow__lg ts-border-radius__md" alt=""/>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>

                    <section className="fdb-block py-5">
                        <div className='container'>
                            <div className="ts-title text-center">
                                <h2>Quelques témoignages de nos utilisateurs</h2>
                            </div>
                            <div className="container py-5" style={{backgroundImage: 'url(/assets/shapes/2.svg)'}}>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-9 col-xl-6">
                                        <div className="fdb-box">
                                            <div className="row">
                                                <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                                                    <img alt="image" className="img-fluid rounded"
                                                         src="/assets/people/6.jpg"/>
                                                </div>

                                                <div className="col-md-8 mt-4 mt-md-0">
                                                    <p className="lead">
                                                        "Even the all-powerful Pointing has no control about day however
                                                        a small line of blind text by the name of Lorem Ipsum decided to
                                                        leave for the far World of Grammar."
                                                    </p>

                                                    <p className="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
                                                    <p><em>Co-founder at Company</em></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 col-xl-6 mt-4 mt-xl-0">
                                        <div className="fdb-box">
                                            <div className="row">
                                                <div className="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">
                                                    <img alt="image" className="img-fluid rounded"
                                                         src="/assets/people/8.jpg"/>
                                                </div>

                                                <div className="col-md-8 mt-4 mt-md-0">
                                                    <p className="lead">
                                                        "Far far away, behind the word mountains, far from the countries
                                                        Vokalia and Consonantia. Separated they at the coast of the
                                                        Semantics, a large language ocean."
                                                    </p>

                                                    <p className="h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>
                                                    <p><em>Co-founder at Company</em></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="download">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <div className="p-5 text-center ts-border-radius__round-shape ts-shadow__lg"
                                         data-bg-color="#1b1464">
                                        <div className="bg-white p-5 ts-border-radius__round-shape">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src='/assets/img/download-appstore.png'
                                                         className="mw-100 py-3" alt=""/>
                                                </div>
                                                <div className="col-md-6">
                                                    <img src='/assets/img/download-play.png'
                                                         className="mw-100 py-3" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="position-absolute ts-top__0 ts-bottom__0 m-auto w-100 ts-z-index__-1"/>
                    </section>


                </main>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {authenticated : state.auth.authenticated }
}

export default connect(mapStateToProps)(Welcome);