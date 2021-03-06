import React, {Component} from 'react';
import requireAuth from './requireAuth';
import Modal from 'react-responsive-modal';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from "redux";
import * as actions from "../actions";
import ImgUpload from "./ImgUpload";
import ImageUser from "./ImageUser";
import GoogleSuggest from "./GoogleSuggest";


class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            photo: null,
            myself: null,
            modifyPhoto: 0,
            latitude: null,
            longitude: null,
            addresse: null,
            city: null,
        };
        this.setLatLng = this.setLatLng.bind(this);
        this.setAdresse = this.setAdresse.bind(this);
        this.setPhoto = this.setPhoto.bind(this);
        this.modifyPhoto = this.modifyPhoto.bind(this);
    }

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    componentDidMount() {
        if (this.props.myself.myself === "") {
            this.props.getMyself(() => {
                this.setState({myself: this.props.myself.myself});
                this.handleInitialize();
            });
        }
        else {
            this.setState({myself: this.props.myself.myself});
            this.handleInitialize();
        }
    }

    handleInitialize() {
        const initData = {
            "firstname": this.props.myself.myself.firstname,
            "lastname": this.props.myself.myself.lastname,
            "adTitle": this.props.myself.myself.adTitle,
            "adDescription": this.props.myself.myself.adDescription,
        };

        this.props.initialize(initData);
    }


    renderField({input, label, type, placeholder, autoComplete, meta: {touched, error}}) {

        return (
            <div>
                <input {...input} placeholder={placeholder} type={type} autoComplete='off' className="form-control"/>
                {touched && error && <span className='text-danger'>{error}</span>}
            </div>
        );
    }

    renderTextArea({input, label, type, placeholder, autoComplete, meta: {touched, error}}) {

        return (
            <div>
                <textarea {...input} cols={40} rows={10} placeholder={placeholder} type={type} autoComplete='off'
                          className="form-control"/>
                {touched && error && <span className='text-danger'>{error}</span>}
            </div>
        );
    }

    onSubmit = (formProps) => {
        if (this.state.photo !== null) {
            formProps = {...formProps, picture: this.state.photo}
        }
        if (this.state.latitude !== null && this.state.longitude !== null)
        {
            formProps = {...formProps, location: {latitude: this.state.latitude, longitude: this.state.longitude}}
        }
        if (this.state.adresse !== null)
        {
            formProps = {...formProps, adresse: this.state.adresse}
        }
        if (this.state.city !== null)
        {
            formProps = {...formProps, city: this.state.city}
        }


        this.props.updateUser(formProps, () => {
            this.onOpenModal();
        });
    };

    setPhoto(photoRes) {
        this.setState({photo: photoRes});
    }

    modifyPhoto() {
        this.setState({modifyPhoto: 1});
    }

    setLatLng(val) {
        this.setState({
            latitude: val.lat,
            longitude: val.lng
        })
    }

    setAdresse(val) {
        this.setState({
            adresse: val.adresse,
            city: val.city
        });
    }

    photoSection() {
        if (this.state.myself !== null) {
            if (this.state.myself.picture && this.state.modifyPhoto === 0) {
                return (
                    <div>
                        <h3>Votre photo de profil</h3>
                        <ImageUser user={this.state.myself}/>
                        <br/>
                        <button className="btn btn-secondary" type="button" onClick={this.modifyPhoto}>Modifiez votre
                            photo
                        </button>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <h3>Ajoutez une photo de profil</h3>
                        <ImgUpload setPhoto={this.setPhoto}/>
                        <p>Sauvegardez votre profil en bas de la page à fin de mettre à jour votre photo</p>
                    </div>
                )
            }
        }
    }

    renderAdresse() {
        if (this.props.myself.myself === null || !this.props.myself.myself.adresse) {
            return (
                <div className="col mt-4" style={{paddingLeft: "0"}}>
                    <p>Votre adresse</p>
                    <GoogleSuggest
                        setLatLng={this.setLatLng}
                        setAdresse={this.setAdresse}
                    />
                </div>
            )
        }
        else {
            return (
                <div className="col mt-4" style={{paddingLeft: "0"}}>
                    <p>Votre adresse</p>
                    <GoogleSuggest
                        setLatLng={this.setLatLng}
                        setAdresse={this.setAdresse}
                        value={this.props.myself.myself.adresse}
                    />
                </div>
            )
        }
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <section className="fdb-block">
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h2>Yes!</h2>
                    <p>
                        Vos informations ont bien été enregistrées!
                    </p>
                    <button onClick={() => {
                        this.props.history.push('/dashboard');
                    }} className="btn btn secondary">Retour à l'accueil
                    </button>
                </Modal>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1>Mettez à jour votre profil ici</h1>
                        </div>
                    </div>
                    {this.photoSection()}
                    <h3>Vos informations personnelles</h3>
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-8 text-left">
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <div className="col mt-4" style={{paddingLeft: "0"}}>
                                    <fieldset>
                                        Prénom
                                        <Field
                                            name='firstname'
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
                                            name='lastname'
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
                                        Titre de votre annonce
                                        <Field
                                            name='adTitle'
                                            type='text'
                                            autoComplete='off'
                                            className="form-control"
                                            placeholder="Titre de votre annonce"
                                            component={this.renderField}
                                        />
                                    </fieldset>
                                </div>
                                <div className="col mt-4" style={{paddingLeft: "0"}}>
                                    <fieldset>
                                        Description de votre annonce
                                        <Field
                                            name='adDescription'
                                            type='text'
                                            autoComplete='off'
                                            className="form-control"
                                            placeholder="Description annonce"
                                            component={this.renderTextArea}
                                        />
                                    </fieldset>
                                </div>
                                {this.renderAdresse()}
                                <div>
                                    {this.props.errorMessage}
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <button className="btn btn-secondary" type="submit">Sauvegardez votre profil
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row-50"></div>
                </div>
            </section>
        );
    }
}

function validate(values) {
    const errors = {};


    if (!values.firstname) {
        errors.firstname = 'Ajoutez un prénom';
    }
    if (values.firstname && values.firstname.length < 3) {
        errors.firstname = 'Ajoutez un prénom de plus de 3 caractères';
    }

    if (!values.lastname) {
        errors.lastname = 'Ajoutez un nom';
    }
    if (values.lastname && values.lastname.length < 3) {
        errors.lastname = 'Ajoutez un nom de plus de 3 caractères';
    }


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
