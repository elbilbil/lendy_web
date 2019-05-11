import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import GoogleSuggest from './GoogleSuggest'
import Slider from 'react-rangeslider'
import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: 10,
            latitude: '',
            longitude: '',
        }
        this.doSearch = this.doSearch.bind(this);
        this.setLatLng = this.setLatLng.bind(this);
    }

    handleChange = distance => {
        this.setState({
            distance: distance
        })
    };

    componentDidMount() {

    }

    setLatLng(val){
        this.setState({
            latitude: val.lat,
            longitude: val.lng
        })
    }


    doSearch()
    {
        this.props.search(this.state);
    }

    render() {
        const { distance } = this.state;

        return (

                <aside id="sidebar-left" className=" col-md-3 col-xs-12 col-sm-12 affix-top hidden-xs hidden-sm ">
                    <div className="search-scroll-bar " id="search-scroll-bar">
                        <div className="form-group">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h1>
                                        Je recherche
                                    </h1>
                                </div>
                                <div className="panel-body">

                                    <div id="deplace2">
                                        <h2>Autour de</h2>
                                        <GoogleSuggest setLatLng={this.setLatLng} />
                                    </div>
                                    <h2>Distance maximum</h2>
                                    <input type="text" id="amount" readOnly="readonly" hidden="hidden" />
                                    <div className='value'>{distance}<span>km</span></div>
                                    <div className='slider'>
                                        <Slider
                                            min={0}
                                            max={50}
                                            value={distance}
                                            onChangeStart={this.handleChangeStart}
                                            onChange={this.handleChange}
                                            onChangeComplete={this.handleChangeComplete}
                                        />
                                    </div>

                                    <button type="button" id="search_advert_form_Rechercher"
                                            name="search_advert_form[Rechercher]"
                                            className="btn btn-primary search-btn"
                                            onClick={this.doSearch}>Rechercher
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </aside>

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


export default connect(mapStateToProps)(requireAuth(SearchBar));
