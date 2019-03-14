import React, {Component} from 'react';
import requireAuth from './requireAuth';
import Modal from 'react-responsive-modal';
import {reduxForm, Field, initialize } from 'redux-form';
import {connect} from 'react-redux';
import {compose} from "redux";
import * as actions from "../actions";


class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedModel: '',
            selectedMake: '',
            selectedTrim: '',
            showCarForm: 0,
            open: false
        };
        this.makeSelected = this.makeSelected.bind(this);
        this.modelsSelected = this.modelsSelected.bind(this);
        this.trimSelected = this.trimSelected.bind(this);
        this.setCar = this.setCar.bind(this);
        this.setCar = this.setCar.bind(this);
        this.renderCar = this.renderCar.bind(this);
        this.renderCarForm = this.renderCarForm.bind(this);
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        if (this.props.myself.myself === "") {
            this.props.getMyself(() => {
                this.handleInitialize();
            });
        }
        else
        {
            this.handleInitialize();
        }
        this.props.getMakes(() => {
        });
    }

    handleInitialize() {
        const initData = {
            "firstName": this.props.myself.myself.firstName,
            "lastName": this.props.myself.myself.lastName,
            "username": this.props.myself.myself.username,
        };

        this.props.initialize(initData);
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

    renderField({ input, label, type, placeholder, autoComplete, meta: { touched, error } }) {

        return (
            <div>
                <input {...input} placeholder={placeholder} type={type} autoComplete='off' className="form-control"/>
                {touched && error && <span className='text-danger'>{error}</span>}
            </div>
        );
    }

    onSubmit = (formProps) => {
        this.props.updateUser(formProps, () => {
            this.onOpenModal();
        });
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <section className="fdb-block">
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h2>Yes!</h2>
                    <p>
                        Vos informations ont bien été enregistrées!
                    </p>
                    <button onClick={() => {this.props.history.push('/feature');}} className="btn btn secondary">Retour à l'accueil</button>
                </Modal>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1>Mettez à jour votre profil ici</h1>
                        </div>
                    </div>
                    <h3>Vos informations personnelles</h3>
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-8 text-left">
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <div className="col mt-4" style={{paddingLeft: "0"}}>
                                    <fieldset>
                                        Prénom
                                        <Field
                                            name='firstName'
                                            type='text'
                                            autoComplete='off'
                                            className="form-control"
                                            placeholder="Prénom"
                                            component={this.renderField}
                                        />
                                    </fieldset>
                                </div>
                                <div className="col mt-4" style={{paddingLeft: "0"}}>
                                    <fieldset>
                                        Nom
                                        <Field
                                            name='lastName'
                                            type='text'
                                            autoComplete='off'
                                            className="form-control"
                                            placeholder="Nom"
                                            component={this.renderField}
                                        />
                                    </fieldset>
                                </div>
                                <div className="col mt-4" style={{paddingLeft: "0"}}>
                                    <fieldset>
                                        Adresse mail
                                        <Field
                                            name='username'
                                            type='text'
                                            autoComplete='off'
                                            className="form-control"
                                            placeholder="Adresse mail"
                                            component={this.renderField}
                                        />
                                    </fieldset>
                                </div>
                                <div>
                                    {this.props.errorMessage}
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <button className="btn btn-secondary" type="submit">Sauvegardez votre profil</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row-50"></div>
                    <h3>Votre voiture</h3>
                    <div className="row">
                        {this.renderCar(0)}
                    </div>
                </div>
            </section>
        );
    }
}

function validate(values){
    const errors = {};


    if (!values.firstName)
    {
        errors.firstName = 'Ajoutez un prénom';
    }
    if (values.firstName && values.firstName.length < 3)
    {
        errors.firstName = 'Ajoutez un prénom de plus de 3 caractères';
    }

    if (!values.lastName)
    {
        errors.lastName = 'Ajoutez un nom';
    }
    if ( values.lastName &&  values.lastName.length < 3)
    {
        errors.lastName = 'Ajoutez un nom de plus de 3 caractères';
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.username)
    {
        errors.username = 'Ajoutez une adresse mail ';
    }
    if (values.username && !values.username.match(mailformat))
    {
        errors.username = 'Votre adresse mail n\'est pas valide';
    }

    /*if (!values.password)
    {
        errors.password = 'Ajoutez un mot de passe';
    }
    if ( values.password &&  values.password.length < 6)
    {
        errors.password = 'Ajoutez un mot de passe d\'au moins 6 caractères';
    }*/


    return errors;
}

function mapStateToProps(state) {
    return {
        myself: state.myself,
        carApi: state.carApi
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        validate,
        form: 'Profile'
    })
)(requireAuth(UpdateProfile));

//export default connect(mapStateToProps)(requireAuth(UpdateProfile));
