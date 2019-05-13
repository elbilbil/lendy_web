import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import ReactLoading from "react-loading";
import ImageUser from "./ImageUser";

export default class Carousel extends Component {

    renderCarousel(){
        if (this.props.listFound === '')
        {
            return (
                <ReactLoading className='myCenter' type="spin" color="#f26d7d" />
            );
        }
        else
        {
            var list = this.props.listFound;
            var slidesToShow = 3;
            if (list.length > 9) {
                list.length = 9;
            }
            if (list.length <= 3)
                slidesToShow = list.length;
            const settings = {
                dots: true,
                arrow:true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 4,
                variableWidth: true
            };
            return (
                <Slider {...settings}>
                    {
                        list.map(function(l, index)
                        {
                            if (l.firstname)
                                return(
                                    <div className="card-carousel text-left" key={l._id} data-index={index}>
                                        <article className="advert-props">
                                            <div className="fdb-box p-0">
                                                <ImageUser user={l}/>
                                                {/*<img alt="person" className="img-fluid rounded-0" src="/assets/people/1.jpg"/>*/}
                                                <div className="content p-3">
                                                    <h3><strong>{l.firstname.charAt(0).toUpperCase() + l.firstname.slice(1)} {l.lastname.charAt(0).toUpperCase()}.</strong></h3>
                                                    <p>Voiture: {l.cars}</p>
                                                </div>
                                            </div>
                                            <div style={{textAlign: 'center'}}>
                                                <Link className="btn btn-primary" to={`/profile/${l._id}`} style={{width: '80%'}}>Voir le profil</Link>
                                            </div>
                                        </article>
                                    </div>
                                )
                            else if (l.firstName)
                                return(
                                    <div className="card-carousel text-left" key={l._id} data-index={index}>
                                        <article className="advert-props">
                                            <div className="fdb-box p-0">
                                                <ImageUser user={l}/>
                                                <div className="content p-3">
                                                    <h3><strong>{l.firstName.charAt(0).toUpperCase() + l.firstName.slice(1)} {l.lastName.charAt(0).toUpperCase()}.</strong></h3>
                                                    <p>Voiture: {l.cars}</p>
                                                </div>
                                            </div>
                                            <div style={{textAlign: 'center'}}>
                                                <Link className="btn btn-primary" to={`/profile/${l._id}`} style={{width: '80%'}}>Voir le profil</Link>
                                            </div>
                                        </article>
                                    </div>
                                )
                            else
                                return;
                        })
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