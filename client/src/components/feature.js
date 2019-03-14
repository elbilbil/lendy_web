import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import GoogleSuggest from './GoogleSuggest'


class Feature extends Component{
    constructor(props){
        super(props);
        this.state = {
            lat: '',
            lng: '',
            errorSearch: ''
        };
        this.getLatLng = this.getLatLng.bind(this);
        this.getSearch = this.getSearch.bind(this);
        this.renderErrorSearch = this.renderErrorSearch.bind(this);
    }

    componentDidMount(){
        if (this.props.myself.myself === "")
            this.props.getMyself(() => {
                if (this.props.myself.myself.isDriver === 0)
                    this.props.history.push('/dashboard-preteur');
                this.props.getLenders(() => {});
            });
        else {
            if (this.props.myself.myself.isDriver === 0)
                this.props.history.push('/dashboard-preteur');
            this.props.getLenders(() => {});
        }
    }

    getLatLng(lat, lng) {
        console.log(lat, lng);
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

    getSearch(){
        if (this.state.lat === '' || this.state.lng == '')
            this.renderErrorSearch();
        else {
            this.setState({errorSearch: ''});
        }
    }

    renderName = () => {
      if(this.props.myself.myself !== "")
      {
          let name = this.props.myself.myself.firstName;
          return name.charAt(0).toUpperCase() + name.slice(1);
      }
      else
          return '';
    };

    renderLenders = (myLenders) => {
        if (myLenders.lenders !== "")
        {
            return myLenders.lenders.map((lender) => {
                if (lender._id !== this.props.myself.myself._id) {
                    return (
                        <div className="col-sm-3 text-left" key={lender._id}>
                            <div className="fdb-box p-0">
                                <img alt="image" className="img-fluid rounded-0" src="/assets/people/6.jpg" />

                                <div className="content p-3">
                                    <h3><strong>{lender.firstName} {lender.lastName}</strong></h3>
                                    <p>Voiture: {lender.cars}</p>
                                </div>
                            </div>
                        </div>
                    );
                }
                else
                    return '';
            })
        }
        else
            return (<div></div>);
    };

    render(){
        return (
            <section className="fdb-block">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1>Bienvenue sur Lendy {this.renderName()}</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-sm-8 col-xl-8 ">
                            <GoogleSuggest callback={this.getLatLng}/>
                            <div className="text-danger">
                                {this.state.errorSearch}
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-xl-4 ">
                            <button className="btn btn-secondary" type="button" onClick={this.getSearch}>Affichez les chauffeurs autour de cette adresse</button>
                        </div>
                    </div>
                    <div className="row-50"></div>
                    <div className="row">
                        {this.renderLenders(this.props.lenders)}
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        lenders: state.lenders,
        myself: state.myself
    }
}


export default connect(mapStateToProps)(requireAuth(Feature));
