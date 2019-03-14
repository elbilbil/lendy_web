import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            arrow:true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className=" card-carousel text-left" >
                        <article className="advert-props">
                        <div className="fdb-box p-0">
                            <img alt="image" className="img-fluid rounded-0" src="/assets/people/1.jpg"/>

                            <div className="content p-3">
                                <h3><strong>John Doe</strong></h3>
                                <p>Voiture: Simca1000</p>
                            </div>
                            <div className="prop-body">
                                <p className="start-date">
                                    <strong>
                                        <i className="ion-calendar"></i>
                                        Dernière connexion:
                                    </strong>
                                    12/3/2019
                                </p>

                            </div>
                        </div>
                            <div style={{textAlign: 'center'}}>
                                <Link className="btn btn-primary" to='/profile' style={{width: '80%'}}>Voir le profil</Link>
                            </div>
                        </article>
                    </div>
                    <div className=" card-carousel text-left" >
                        <article className="advert-props">
                            <div className="fdb-box p-0">
                                <img alt="image" className="img-fluid rounded-0" src="/assets/people/2.jpg"/>

                                <div className="content p-3">
                                    <h3><strong>John Doe</strong></h3>
                                    <p>Voiture: Simca1000</p>
                                </div>
                                <div className="prop-body">
                                    <p className="start-date">
                                        <strong>
                                            <i className="ion-calendar"></i>
                                            Dernière connexion:
                                        </strong>
                                        12/3/2019
                                    </p>

                                </div>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Link className="btn btn-primary" to='/profile' style={{width: '80%'}}>Voir le profil</Link>
                            </div>
                        </article>
                    </div>
                    <div className=" card-carousel text-left" >
                        <article className="advert-props">
                            <div className="fdb-box p-0">
                                <img alt="image" className="img-fluid rounded-0" src="/assets/people/3.jpg"/>

                                <div className="content p-3">
                                    <h3><strong>John Doe</strong></h3>
                                    <p>Voiture: Simca1000</p>
                                </div>
                                <div className="prop-body">
                                    <p className="start-date">
                                        <strong>
                                            <i className="ion-calendar"></i>
                                            Dernière connexion:
                                        </strong>
                                        12/3/2019
                                    </p>

                                </div>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Link className="btn btn-primary" to='/profile' style={{width: '80%'}}>Voir le profil</Link>
                            </div>
                        </article>
                    </div>
                    <div className=" card-carousel text-left" >
                        <article className="advert-props">
                            <div className="fdb-box p-0">
                                <img alt="image" className="img-fluid rounded-0" src="/assets/people/4.jpg"/>

                                <div className="content p-3">
                                    <h3><strong>John Doe</strong></h3>
                                    <p>Voiture: Simca1000</p>
                                </div>
                                <div className="prop-body">
                                    <p className="start-date">
                                        <strong>
                                            <i className="ion-calendar"></i>
                                            Dernière connexion:
                                        </strong>
                                        12/3/2019
                                    </p>

                                </div>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Link className="btn btn-primary" to='/profile' style={{width: '80%'}}>Voir le profil</Link>
                            </div>
                        </article>
                    </div>
                    <div className=" card-carousel text-left" >
                        <article className="advert-props">
                            <div className="fdb-box p-0">
                                <img alt="image" className="img-fluid rounded-0" src="/assets/people/5.jpg"/>

                                <div className="content p-3">
                                    <h3><strong>John Doe</strong></h3>
                                    <p>Voiture: Simca1000</p>
                                </div>
                                <div className="prop-body">
                                    <p className="start-date">
                                        <strong>
                                            <i className="ion-calendar"></i>
                                            Dernière connexion:
                                        </strong>
                                        12/3/2019
                                    </p>

                                </div>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Link className="btn btn-primary" to='/profile' style={{width: '80%'}}>Voir le profil</Link>
                            </div>
                        </article>
                    </div>
                    <div className=" card-carousel text-left" >
                        <article className="advert-props">
                            <div className="fdb-box p-0">
                                <img alt="image" className="img-fluid rounded-0" src="/assets/people/6.jpg"/>

                                <div className="content p-3">
                                    <h3><strong>John Doe</strong></h3>
                                    <p>Voiture: Simca1000</p>
                                </div>
                                <div className="prop-body">
                                    <p className="start-date">
                                        <strong>
                                            <i className="ion-calendar"></i>
                                            Dernière connexion:
                                        </strong>
                                        12/3/2019
                                    </p>

                                </div>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Link className="btn btn-primary" to='/profile' style={{width: '80%'}}>Voir le profil</Link>
                            </div>
                        </article>
                    </div>
                </Slider>
            </div>
        );
    }
}