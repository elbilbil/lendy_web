import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import Carousel from './Carousel';
import ConversationsDashboard from './ConversationsDashboard'
import GoogleSuggest from './GoogleSuggest';
import {Link} from "react-router-dom";
import '../CSS/GME.css'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lng: '',
            errorSearch: '',
            listFound: '',
        };
        this.getLatLng = this.getLatLng.bind(this);
        this.getSearch = this.getSearch.bind(this);
        this.renderErrorSearch = this.renderErrorSearch.bind(this);
    }

    componentDidMount() {
        if (this.props.myself.myself === "")
            this.props.getMyself(() => {
                if (this.props.myself.myself.type === "preteur")
                {
                    this.props.getDrivers(() => {
                        this.setState({listFound: this.props.drivers.drivers});
                        console.log(this.props.drivers);
                    });
                }
                else {
                    this.props.getLenders(() => {
                        this.setState({listFound: this.props.lenders.lenders});
                    });
                }
            });
        else {
            if (this.props.myself.myself.type === "preteur") {
                this.props.getDrivers(() => {
                    this.setState({listFound: this.props.drivers.drivers});
                });
            }
            else {
                this.props.getLenders(() => {
                    this.setState({listFound: this.props.lenders.lenders});
                });
            }
        }
    }

    getLatLng(lat, lng) {
        this.setState({
            lat: lat,
            lng: lng
        });
    }

    renderErrorSearch() {
        this.setState({
            errorSearch: 'Veuillez selectionner une valeur dans la liste avant de valider votre recherche'
        });
    }

    getSearch() {
        if (this.state.lat === '' || this.state.lng === '')
            this.renderErrorSearch();
        else {
            this.setState({errorSearch: ''});
        }
    }


    renderName = () => {
        if (this.props.myself.myself !== "") {
            let name = this.props.myself.myself.firstname;
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
        else
            return '';
    };

    recommended = () => {
        if (this.props.myself.myself !== "") {
            if (this.props.myself.myself.type === "preteur")
            {
                return 'Chauffeurs autour de vous';
            }
            else {
                return 'Prêteurs autour de vous';
            }
        }
        else
            return '';
    }

    getList = () =>{
        return this.state.listFound;
    };

    render() {
        return (
            <div>
                <main className="container-fluid new-dashboard-ctn dashboard-nounou-ctn">
                    <section className="container">
                        <h1 style={{textAlign: 'center'}}>Bonjour {this.renderName()}</h1>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12">
                                <h2 style={{textAlign: 'center'}}>Messages reçus</h2>
                            </div>
                        </div>
                        <div className="row" style={{display: 'block'}}>
                            <div className="carousel-adverts">
                                <div className="col-md-12 text-center">
                                    <ConversationsDashboard/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12">
                                <h2 style={{textAlign: 'center'}}>{this.recommended()}</h2>
                            </div>
                        </div>
                        <div className="row" style={{display: 'block'}}>
                            <div className="carousel-adverts">
                                <div className="col-md-12 text-center">
                                    <Carousel listFound={this.getList()}/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container">

                        <div className="row">
                            <div className="col-xs-12 col-sm-12">
                                <h2 style={{textAlign: 'center'}}>Mon annonce</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="mid_post_sec">
                                    <div className="mid_post_sec001">
                                        <div className="mid_post_sub latest_messagetext my-advert-ctn">
                                            <div className="inside">

                                            </div>
                                            <span className="clearfix"></span>


                                            <div className="latest_message_sec row">
                                                <div className="latest_message_sub">
                                                    <div className="latest_message_messcoll_00">
                                                        <div className="latest_message_messcoll_sub row">
                                                            <div className="col-md-12">

                                                                <h3>
                                                                    <a href="{{ path('gme_platform_viewadvert', {'type': user.typeGardePrincipal, 'ville': user.villePrincipale, 'id': user.id, 'title': user.slug }) }}">
                                                                        Titre de l'annonce
                                                                    </a>
                                                                </h3>

                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                                </p>

                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <Link className="btn btn-primary ml-md-3" to='/profile' style={{marginBottom: '5%'}}>Mon Profil</Link>
                                                            </div>
                                                            <div className="col-6">
                                                                <Link className="btn btn-primary ml-md-3" to='/update-profile'>Modifier</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>

                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        drivers: state.drivers,
        lenders: state.lenders,
        myself: state.myself,
        carApi: state.carApi
    }
}


export default connect(mapStateToProps)(requireAuth(Dashboard));