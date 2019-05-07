import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import '../CSS/GME.css'
import SearchBar from "./SearchBar";
import SearchResults from './SearchResults'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            listFound:''
        }
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        if (this.props.myself.myself === "")
            this.props.getMyself(() => {
                if (this.props.myself.myself.type === "preteur") {
                    this.setState({type: 'preteur'});
                    this.props.getDrivers(() => {
                        this.setState({listFound: this.props.drivers.drivers});
                        console.log(this.props.drivers);
                    });
                }
                else {
                    this.setState({type: 'chauffeur'});
                    this.props.getLenders(() => {
                        this.setState({listFound: this.props.lenders.lenders});
                    });
                }
            });
        else {
            if (this.props.myself.myself.type === "preteur") {
                this.setState({type: 'preteur'});
                this.props.getDrivers(() => {
                    this.setState({listFound: this.props.drivers.drivers});
                });
            }
            else {
                this.props.getLenders(() => {
                    this.setState({type: 'chauffeur'});
                    this.setState({listFound: this.props.lenders.lenders});
                });
            }
        }
    }

    search(params) {
        console.log(params);
        if (this.state.type !== '') {
            if (this.state.type === 'preteur') {
                this.props.getDrivers(() => {
                    this.setState({listFound: this.props.drivers.drivers});
                }, params);
            }
            else {
                this.props.getLenders(() => {
                    this.setState({listFound: this.props.lenders.lenders});
                }, params);
            }
        }
    }

    render() {

        return (
            <div>
                <main className="container-fluid new-dashboard-ctn dashboard-nounou-ctn">
                    <section className="container">
                        <div className="row">
                            <SearchBar
                                myself={this.props.myself.myself}
                                search={this.search}/>
                            <SearchResults listFound={this.state.listFound}/>
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


export default connect(mapStateToProps)(requireAuth(Search));
