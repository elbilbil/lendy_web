import React, {Component} from "react";
import '../CSS/GME.css';
import '../CSS/responsive.css';
import {IoIosCheckmark} from "react-icons/io";
import {IoMdCar} from "react-icons/io";
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import requireAuth from "./requireAuth";
import ReactLoading from "react-loading";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            user: ''
        };
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.setState({id: userId});
        this.props.getUser(() => {
            this.setState({user: this.props.user});
        }, {userId: userId});
    }

    renderAdvert() {
        if (!this.state.user.adTitle || !this.state.user.adDescription || this.state.user.adTitle === '' || this.state.user.adDescription === '')
        {
            return (
                <div>
                    <h2>L'annonce de cet utilisateur est vide</h2>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2 className="probabytext01">
                        <i className="ion-person"></i>
                        {this.state.user.adTitle}
                    </h2>
                    <p className="probabytext02">
                        {this.state.user.adDescription}
                    </p>
                </div>
            )
        }
    }

    renderProfile() {
        if (this.state.user === '') {
            return (
                <ReactLoading className='myCenter' type="spin" color="#f26d7d"/>
            )
        }
        else {
            console.log(this.state);
            return (
                <div className="wrapper" id="wrapper">
                    <section className="view-profile">
                        <div className="wrapper">
                            <section className="container profile-section title-section">
                                <div className="row">
                                    <div className="col-md-3 avatar-col">


                                        <div className="profile-pic">
                                            <figure className="square-img-ctn" style={{margin: 'auto'}}>

                                                <div
                                                    className="image-bg-w285 image-bg">
                                                    <img alt="image" className="" src="/assets/people/1.jpg"/>
                                                </div>

                                            </figure>

                                            <h2 className="hidden-md">{this.state.user.firstname.charAt(0).toUpperCase() + this.state.user.firstname.slice(1)} {this.state.user.lastname.charAt(0).toUpperCase()}.
                                                <br/>
                                                <small>
                                                    Age
                                                </small>
                                            </h2>


                                        </div>

                                    </div>


                                    <div className="col-md-9">

                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h1 className="hidden-xs hidden-sm">{this.state.user.firstname.charAt(0).toUpperCase() + this.state.user.firstname.slice(1)} {this.state.user.lastname.charAt(0).toUpperCase()}.
                                                    <small>
                                                        23 ans
                                                    </small>
                                                </h1>
                                                <p>
                                                    <i className="ion-thumbsup"></i>
                                                    1
                                                    avis ou recommandations,
                                                    <a href="#viewReco" className="see-more smoothAnchor">voir</a>
                                                </p>
                                                <p>
                                                    <i className="ion-location"></i>
                                                    Marseille
                                                </p>
                                            </div>

                                            <div className="col-sm-4 advert-buttons-col">
                                                <div className="favorites-btn hidden-xs  hidden-sm">
                                                    <a href="/app_dev.php/addFavoris/nounou/128617" id="heartFin"
                                                       className="nofav">
                                                        <i className="ion-android-favorite-outline"></i>
                                                    </a>
                                                </div>
                                                <div className="contact-btns-col">

                                                    <Link className="btn btn-primary" to={`/message/${this.state.user._id}`}
                                                          style={{width: '100%', fontSize: 'x-large'}}>CONTACTER</Link>

                                                </div>

                                                <p className="avail-status avail-away">
                                                    <strong>Dernière connexion :</strong>
                                                    17/03/19
                                                </p>
                                                <p></p>
                                                <a type="button" className="flag-user hidden-xs btn">
                                                    <span className="lnr lnr-flag"></span>
                                                    Signaler l'utilisateur
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>


                        <div className="container profile-content">
                            <div className="row">
                                <aside className="col-md-3">
                                    <article className="trust-col-view col-md-12 col-sm-12">
                                        <h3 className="probabytext01">
                                            <IconContext.Provider value={{size: "2em"}}>
                                                <IoIosCheckmark className/>
                                            </IconContext.Provider>
                                            Vérifications
                                        </h3>
                                        <ul className="trust-profile">
                                            <li className="done">
                                                Identité vérifiée
                                                <IconContext.Provider value={{size: "2em", className: "pull-right"}}>
                                                    <IoIosCheckmark className/>
                                                </IconContext.Provider>
                                            </li>
                                            <li className="done">
                                                Email vérifié
                                                <IconContext.Provider value={{size: "2em", className: "pull-right"}}>
                                                    <IoIosCheckmark className/>
                                                </IconContext.Provider>
                                            </li>
                                            <li className="done">
                                                N° de téléphone vérifié
                                                <IconContext.Provider value={{size: "2em", className: "pull-right"}}>
                                                    <IoIosCheckmark className/>
                                                </IconContext.Provider>
                                            </li>


                                            <li className="done">
                                                Profil évalué
                                                <IconContext.Provider value={{size: "2em", className: "pull-right"}}>
                                                    <IoIosCheckmark/>
                                                </IconContext.Provider>
                                            </li>

                                        </ul>

                                    </article>

                                    {/*<article className="col-md-12 col-sm-4 hidden-xs" id="view-cities">
                                            <h3 className="probabytext01">
                                                <IconContext.Provider value={{ size: "2em" }}>
                                                    <IoMdCar />
                                                </IconContext.Provider>
                                                Je me déplace à
                                            </h3>

                                            <ul className="availabilities">

                                                <li>
                                                    <a href="{{ path('gme_platform_view_tout_ville', {'ville': city.name }) }}">
                                                        <i className="ion-arrow-right-b" aria-hidden="true"></i>
                                                        Marseille
                                                    </a>
                                                </li>
                                            </ul>


                                        </article>*/}

                                    {/*<article className="col-md-12 hidden-sm hidden-xs">
                                            <h3 className="probabytext01">
                                                <i className="ion-ios-people"></i>
                                                Annonces similaires
                                            </h3>
                                            <div className="row similar-advert">
                                                <div className="col-md-3 col-sm-2 col-xs-2 text-center">

                                                    <figure className="square-img-ctn">
                                                        <a
                                                            href=""
                                                            className="image-bg image-bg-w50">
                                                            <img className="image-bg-placeholder"
                                                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                                                 alt=""/>
                                                            <img alt="image" className="" src="/assets/people/2.jpg"
                                                                 style={{width: '70%'}}/>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="col-md-9 col-sm-7 col-xs-7">
                                                    <a href="">
                                                        <h3>
                                                            Jean Random
                                                        </h3>
                                                        <p>
                                                            à
                                                            Marseille
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </article>*/}
                                </aside>

                                <div className="col-md-9 ">
                                    <article className="probaby_left01 col-sm-12">
                                        {this.renderAdvert()}
                                    </article>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    }

    render() {
        return (
            <div id="sb-site">
                {this.renderProfile()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user
    }
}


export default connect(mapStateToProps)(requireAuth(Profile));
