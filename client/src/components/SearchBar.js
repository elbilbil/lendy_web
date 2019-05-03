import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import GoogleSuggest from './GoogleSuggest'
import Slider from 'react-rangeslider'
import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 10,
            startDate: new Date()
        }
    }

    handleChange = value => {
        this.setState({
            value: value
        })
    };

    handleChangeDate = value => {
        this.setState({
            startDate: value
        })
    };

    componentDidMount() {

    }


    render() {
        const { value } = this.state

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
                                        <GoogleSuggest />
                                    </div>
                                    <p>
                                        <h2>Distance maximum</h2>
                                        <input type="text" id="amount" readonly="readonly" hidden="hidden" />
                                        <div className='value'>{value}<span>km</span></div>
                                    </p>
                                    <div className='slider'>
                                        <Slider
                                            min={0}
                                            max={50}
                                            value={value}
                                            onChangeStart={this.handleChangeStart}
                                            onChange={this.handleChange}
                                            onChangeComplete={this.handleChangeComplete}
                                        />
                                    </div>

                                    <h2>Disponible à partir du</h2>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChangeDate}
                                        className="form-control"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                    <button type="button" id="search_advert_form_Rechercher"
                                            name="search_advert_form[Rechercher]"
                                            className="btn btn-primary search-btn">Rechercher
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
