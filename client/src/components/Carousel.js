import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import ReactLoading from "react-loading";

export default class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    renderCarousel(){
        if (this.props.listFound === '')
        {
            return (
                <ReactLoading type="spin" color="#fff" />
            );
        }
        else
        {

            var list = this.props.listFound;
            if (list.length > 9)
                list.length = 9;
            const settings = {
                dots: true,
                arrow:true,
                infinite: true,
                speed: 500,
                slidesToShow: list.length,
                variableWidth: true,
            };
            return (
                <Slider {...settings}>
                    {
                        list.map(l => (
                            <div className="card-carousel text-left" key={l._id}>
                                <article className="advert-props">
                                    <div className="fdb-box p-0">
                                        <img alt="image" className="img-fluid rounded-0" src="/assets/people/1.jpg"/>

                                        <div className="content p-3">
                                            <h3><strong>{l.firstname.charAt(0).toUpperCase() + l.firstname.slice(1)} {l.lastname.charAt(0).toUpperCase()}.</strong></h3>
                                            <p>Voiture: {l.cars}</p>
                                        </div>
                                    </div>
                                    <div style={{textAlign: 'center'}}>
                                        <Link className="btn btn-primary" to='/profile' style={{width: '80%'}}>Voir le profil</Link>
                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </Slider>
            );
        }
    }

    render() {

        return (
            <div>
                {this.renderCarousel()}
            </div>
        );
    }
}