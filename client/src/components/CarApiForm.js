import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';



class CarApiForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedModel: '',
            selectedMake: '',
            selectedTrim: '',
            showCarForm: 0
        };
        this.makeSelected = this.makeSelected.bind(this);
        this.modelsSelected = this.modelsSelected.bind(this);
        this.trimSelected = this.trimSelected.bind(this);
        this.setCar = this.setCar.bind(this);
        this.setCar = this.setCar.bind(this);
        this.renderCar = this.renderCar.bind(this);
        this.renderCarForm = this.renderCarForm.bind(this);
    }


    componentDidMount() {
        this.props.getMakes(() => {
        });
    }


    makeSelected(event) {
        if (event.target.value === -1)
            return;
        else {
            this.setState({
                selectedMake: event.target.value
            });
            this.props.getModels(event.target.value, () => {
            });
        }
    }

    modelsSelected(event) {
        if (event.target.value === -1)
            return;
        else {
            this.setState({
                selectedModel: event.target.value
            });
            this.props.getTrims(this.state.selectedMake, event.target.value, () => {
            });
        }
    }

    trimSelected(event) {
        if (event.target.value === -1)
            return;
        else {
            console.log(event.target.value);
            this.setState({
                selectedTrim: event.target.value
            });

            this.props.getModel(event.target.value, () => {
            });
        }
    }

    renderMakes = () => {
        if (this.props.carApi.makes === "")
            return (<select></select>);
        else {
            let options = this.props.carApi.makes.map((make) =>
                <option key={make.make_id} value={make.make_id}>{make.make_display}</option>
            );

            return (
                <select onChange={this.makeSelected}>
                    <option value={-1}>Choisissez une marque</option>
                    {options}
                </select>
            );
        }
    };

    renderModels = () => {
        if (this.props.carApi.models === "")
            return (<select>
                <option value={-1}>Choisissez une marque d'abord</option>
            </select>);
        else {
            let options = this.props.carApi.models.map((models) =>
                <option key={models.model_name} value={models.model_name}>{models.model_name}</option>
            );

            return (
                <select onChange={this.modelsSelected}>
                    <option value={-1}>Choisissez un modèle</option>
                    {options}
                </select>
            );
        }
    };

    renderTrims = () => {
        if (this.props.carApi.trims === "")
            return (<select>
                <option value={-1}>Choisissez un modèle d'abord</option>
            </select>);
        else {
            let options = this.props.carApi.trims.map((trims) =>
                <option key={trims.model_id} value={trims.model_id}>{trims.model_trim} {trims.model_year}</option>
            );

            return (
                <select onChange={this.trimSelected}>
                    <option value={-1}>Choisissez votre véhicule</option>
                    {options}
                </select>
            );
        }
    };

    setCar = () => {
        this.setState({showCarForm: 0, selectedModel : '', selectedMake: '', selectedTrim: ''});
        let carName = this.props.carApi.model.make_display + ' ' + this.props.carApi.model.model_name + ' ' + this.props.carApi.model.model_trim + ' ' + this.props.carApi.model.model_year;
        let carId = this.props.carApi.model.model_id;

        let values = {
            cars: carName,
            carId: carId
        };
        this.props.setCarUser(values, () => {});
    };

    renderButtonCars = () => {
        if (this.props.carApi.model === "" || this.state.selectedModel == "") {
            return (
                <button type="button" className="btn btn-secondary" disabled={true}>Sauvegardez votre voiture</button>);
        }
        else {
            return (<button type="button" className="btn btn-secondary" onClick={this.setCar}>Sauvegardez votre
                voiture</button>);
        }
    };

    renderCar = (refresh) => {
        if (this.state.showCarForm === 1 || this.props.myself === "" || this.props.myself.myself.carId === "" || this.props.myself.myself.cars === "Golden Proust") {
            return this.renderCarForm();
        }
        else {
            return (
                <div>
                    <h4>{this.props.myself.myself.cars}</h4>
                    <button type="button" className="btn btn-secondary" onClick={() => {this.setState({showCarForm: 1})}}>Modifiez votre voiture</button>
                </div>
            );
        }
    };

    renderCarForm = () => {
        return (
            <div className="row">
                <div className="col-sm-3 ">
                    {this.renderMakes()}
                </div>
                <div className="col-sm-3 ">
                    {this.renderModels()}
                </div>
                <div className="col-sm-3 ">
                    {this.renderTrims()}
                </div>
                <div className="col-sm-3 ">
                    {this.renderButtonCars()}
                </div>
            </div>
        );
    };


    render() {
        const {handleSubmit} = this.props;
        return (
            <section className="fdb-block">
                    <h3>Votre voiture</h3>
                    <div className="row">
                        {this.renderCar(0)}
                    </div>
                </div>
            </section>
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


export default connect(mapStateToProps)(requireAuth(CarApiForm));


//export default connect(mapStateToProps)(requireAuth(UpdateProfile));
