import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";
import ReactLoading from "react-loading";
import ImageUser from "./ImageUser";


class SearchResults extends Component {


    renderResults() {
        if (this.props.listFound === '') {
            return (
                <ReactLoading className='myCenter' type="spin" color="#f26d7d"/>
            );
        }
        else {

            var list = this.props.listFound;
            if (list.length === 0)
                return (
                    <div className="col-md-12" style={{textAlign: 'center'}}>
                        <h3>Oops! Aucun résultat ici...</h3>
                    </div>
                );

            return (
                list.map(function (l, index) {
                        if (l.firstname) {
                            return (
                                <div className="col-md-6 card-carousel text-left" key={l._id}>
                                    <article className="advert-props">
                                        <div className="fdb-box p-0">
                                            <ImageUser user={l}/>

                                            <div className="content p-3">
                                                <h3>
                                                    <strong>{l.firstname.charAt(0).toUpperCase() + l.firstname.slice(1)} {l.lastname.charAt(0).toUpperCase()}.</strong>
                                                </h3>
                                                <p>Voiture: {l.cars}</p>
                                            </div>
                                        </div>
                                        <div style={{textAlign: 'center'}}>
                                            <Link className="btn btn-primary" to={`/profile/${l._id}`} style={{width: '80%'}}>Voir le
                                                profil</Link>
                                        </div>
                                    </article>
                                </div>
                            )
                        }
                        return '';
                    }
                )
            )
        }
    }

    render() {
        return (
            <div className="col-md-8">
                <div className='row'>
                    {this.renderResults()}
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
