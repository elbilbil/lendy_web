import React, {Component} from 'react';
import requireAuth from './requireAuth';
import {connect} from 'react-redux';
import '../CSS/GME.css'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";


class Messagerie extends Component {
constructor(props) {
    super(props);

}

componentDidMount() {

}

render() {
    return (
        <div>
            <div id="espace_mobile_conv"></div>
            <div className="mid_post_section profiletop container">
                <div className="massege_details_col">
                    <div className="massege_details_sec conversation-list">
                        <div className="massege_details_sub01 text-center">
                            <div className="massege_details_sub_col01">
                                <div className="massege_details_col01_img">

                                        <img
                                            className="image-bg-img"
                                            src="/assets/people/2.jpg"
                                            alt="{{ otherUser.photoProfile }}"/>

                                </div>

                                <div className="massege_details_col01_text">
                                    <h2> John D .
                                    </h2>
                                </div>


                                <div className="view-more-btn hidden-sm hidden-md hidden-xs">


                                    <a className="view-more-btn hidden-sm hidden-md" role="button"
                                       data-toggle="collapse"
                                       href="#showDetailsMsg" aria-expanded="false"
                                       aria-controls="showDetailsMsg">
                              <span id="showMore">
                                <i className="ion-plus"></i>
                                En savoir plus</span>
                                    </a>
                                </div>
                                <div
                                    className="interloc-details hidden-xs">
                                    <p>
                                        Distance
                                        : 2
                                        KM
                                    </p>
                                </div>
                                <div className="show-ad-ctn">
                                    <button type="button" id="search_advert_form_Rechercher"
                                            name="search_advert_form[Rechercher]"
                                            className="btn btn-primary search-btn">Voir son annonce
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="message_rightside">
                            <div className="message_rightside_in">
                                <div className="message_rightside_box01">
                                    <div className="message_rightside_box01_left">
                                        <div className="arrow-down_right"></div>
                                        <div className="message_rightside_box01_left01">
                                            <textarea></textarea>
                                        </div>
                                        <div className="message_rightside_box01_left02 ">
                                            <button type="button" id="message_Envoyer"
                                                    name="message[Envoyer]"
                                                    className="btn-default btn">Envoyer
                                            </button>

                                        </div>

                                    </div>
                                    <div className="message_rightside_box01_left_img2">
                                        <img
                                            src="/assets/people/1.jpg"
                                            alt=""
                                            className="img-circle"/>
                                    </div>

                                    <div className="clear"></div>

                                    <div className="message_rightside_box02">
                                        <div className="message_rightside_box02_left">
                                            <div className="message_rightside_box01_left_img2">

                                                <div className="message_rightside_box01_rightimg">
                                                    <img
                                                        src=""
                                                        alt=""/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="message_rightside_box01_left0">

                                            <div className="arrow-down_left"></div>
                                            <div className="message_rightside_box02_left01">
                                                <h4>Coucou</h4>
                                                <p>2/03/2019</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="message_rightside_box03">
                                        <div className="message_rightside_box01_left">
                                            <div className="arrow-down_right colorchange"></div>
                                            <div
                                                className="message_rightside_box03_left01">

                                                <h4>Hello</h4>
                                                <p>2/03/2019</p>
                                            </div>
                                        </div>

                                        <div className="message_rightside_box01_right">
                                            <div
                                                className="message_rightside_box01_left_img2">

                                                <img
                                                    src="/assets/people/2.jpg"
                                                    alt="{{ user.photoProfile }}"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="clear">
                            </div>
                        </div>
                    </div>

                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </div>
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


export default
connect(mapStateToProps)(requireAuth(Messagerie));
