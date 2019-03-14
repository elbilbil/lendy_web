import React, {Component} from "react"
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
    }

    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        this.props.callback(geocodedPrediction.geometry.location.lat(), geocodedPrediction.geometry.location.lng());

        this.setState({search: "", value: geocodedPrediction.formatted_address})
    }

    render() {
        const {search, value} = this.state
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
                            <input
                                className="form-control"
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