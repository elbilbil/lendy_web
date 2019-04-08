import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";


class SearchResults extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }


    render() {


        return (
            <div className="col-md-8">
                <div className='row'>
                    <div className="col-md-6 card-carousel text-left" >
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
                    <div className="col-md-6 card-carousel text-left" >
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
                    <div className="col-md-6 card-carousel text-left" >
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
                    <div className="col-md-6 card-carousel text-left" >
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
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        drivers: state.drivers,
        myself: state.myself,
        carApi: state.carApi
    }
}


export default connect(mapStateToProps)(requireAuth(SearchResults));
