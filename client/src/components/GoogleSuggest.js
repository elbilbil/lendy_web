import React from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"

const MY_API_KEY = "AIzaSyCztRpaXkxh9IhAns4buznZi1eAnXKj_fA";

export default class GoogleSuggest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
            value: "",
        }
        this.getValue = this.getValue.bind(this);
    }

    componentDidMount() {
    }

    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        this.setState({search: "", value: geocodedPrediction.formatted_address})
        if (this.props.setLatLng) {
            this.props.setLatLng({
                lat: geocodedPrediction.geometry.location.lat(),
                lng: geocodedPrediction.geometry.location.lng()
            });
        }

        if (this.props.checkAdressSearch)
        {
            this.props.checkAdressSearch(geocodedPrediction.formatted_address);
        }
        if (this.props.setAdresse)
        {

            geocodedPrediction.address_components.map((ad, index) => {
                ad.types.map(types => {
                    if (types === 'locality') {
                        this.props.setAdresse(
                            {
                                adresse: geocodedPrediction.formatted_address,
                                city : geocodedPrediction.address_components[index].long_name
                            }
                        )
                    }
                });
            });
        }
    }

    getValue(){
        if (this.props.value && this.state.value === "")
        {
            this.setState({value: this.props.value});
            return this.props.value;
        }
        return '';
    }

    render() {
        const {search, value} = this.state;
        return (
            <GoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <GooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                componentRestrictions: {
                                    country: [
                                        "fr",
                                        "gp",
                                        "mq",
                                        "gf",
                                        "re",
                                        "pm",
                                        "yt",
                                        "nc",
                                        "pf",
                                        "mf",
                                        "tf"
                                    ]
                                }
                                // Optional options
                                // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                            }}
                            // Optional props
                            onSelectSuggest={this.handleSelectSuggest}
                            textNoResults="Aucun résultat" // null or "" if you want to disable the no results item
                            customRender={prediction => (
                                <div className="customWrapper">
                                    {prediction
                                        ? prediction.description
                                        : "Aucun résultat"}
                                </div>
                            )}
                        >
                            {this.getValue()}
                            <input
                                className="form-control google-search"
                                type="text"
                                value={value}
                                placeholder="Votre adresse"
                                onChange={this.handleInputChange}
                            />
                        </GooglePlacesSuggest>
                    )
                }
            />
        )
    }
}