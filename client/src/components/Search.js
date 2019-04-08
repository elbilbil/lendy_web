import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import Carousel from './Carousel';
import ConversationsDashboard from './ConversationsDashboard'
import GoogleSuggest from './GoogleSuggest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import '../CSS/GME.css'
import SearchBar from "./SearchBar";
import SearchResults from './SearchResults'


class Search extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }


    render() {

        return (
            <div >
                <main className="container-fluid new-dashboard-ctn dashboard-nounou-ctn">
                    <section className="container">
                        <div className="row">
                        <SearchBar/>
                        <SearchResults/>
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
        myself: state.myself,
        carApi: state.carApi
    }
}


export default connect(mapStateToProps)(requireAuth(Search));
