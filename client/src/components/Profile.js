import React, {Component} from "react";
import '../CSS/GME.css';
import '../CSS/responsive.css';
import { IoIosCheckmark } from "react-icons/io";
import {IoMdCar} from "react-icons/io";
import { IconContext } from "react-icons";
import {Link} from "react-router-dom";

export default class Profile extends Component {
    render() {

        return (
            <div id="sb-site">

                <div className="wrapper" id="wrapper">
                    <section className="view-profile">
                        <div className="wrapper">
                            <section className="container profile-section title-section">
                                <div className="row">
                                    <div className="col-md-3 avatar-col">


                                        <div className="profile-pic">
                                            <figure className="square-img-ctn" style={{margin: 'auto'}}>

                                                <div
                                                    className="image-bg-w285 image-bg">
                                                    <img alt="image" className="" src="/assets/people/1.jpg"/>
                                                </div>

                                            </figure>

                                            <h2 className="hidden-md">Prenom N.
                                                <br/>
                                                <small>
                                                    Age
                                                </small>
                                            </h2>


                                        </div>

                                    </div>


                                    <div className="col-md-9">

                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h1 className="hidden-xs hidden-sm">Jean D.
                                                    <small>
                                                         23 ans
                                                    </small>
                                                </h1>
                                                <p>
                                                    <i className="ion-thumbsup"></i>
                                                    1
                                                    avis ou recommandations,
                                                    <a href="#viewReco" className="see-more smoothAnchor">voir</a>
                                                </p>
                                                <p>
                                                    <i className="ion-location"></i>
                                                    Marseille
                                                </p>
                                            </div>

                                            <div className="col-sm-4 advert-buttons-col">
                                                <div className="favorites-btn hidden-xs  hidden-sm">
                                                    <a href="/app_dev.php/addFavoris/nounou/128617" id="heartFin"
                                                       className="nofav">
                                                        <i className="ion-android-favorite-outline"></i>
                                                    </a>
                                                </div>
                                                <div className="contact-btns-col">

                                                    <Link className="btn btn-primary" to='#' style={{width: '100%', fontSize: 'x-large'}}>CONTACTER</Link>

                                                </div>

                                                <p className="avail-status avail-away">
                                                    <strong>Dernière connexion :</strong>
                                                    17/03/19
                                                </p>
                                                <p></p>
                                                <a type="button" className="flag-user hidden-xs btn">
                                                    <span className="lnr lnr-flag"></span>
                                                    Signaler l'utilisateur
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>


                        <div className="container profile-content">
                            <div className="row">
                                <aside className="col-md-3">
                                    <article className="trust-col-view col-md-12 col-sm-12">
                                        <h3 className="probabytext01">
                                            <IconContext.Provider value={{ size: "2em" }}>
                                                <IoIosCheckmark className/>
                                            </IconContext.Provider>
                                            Vérifications
                                        </h3>
                                        <ul className="trust-profile">
                                            <li className="done">
                                                Identité vérifiée
                                                <IconContext.Provider value={{ size: "2em", className: "pull-right" }}>
                                                    <IoIosCheckmark className/>
                                                </IconContext.Provider>
                                            </li>
                                            <li className="done">
                                                Email vérifié
                                                <IconContext.Provider value={{ size: "2em", className: "pull-right" }}>
                                                    <IoIosCheckmark className/>
                                                </IconContext.Provider>
                                            </li>
                                            <li className="done">
                                                N° de téléphone vérifié
                                                <IconContext.Provider value={{ size: "2em", className: "pull-right" }}>
                                                    <IoIosCheckmark className/>
                                                </IconContext.Provider>
                                            </li>


                                            <li className="done">
                                                Profil évalué
                                                <IconContext.Provider value={{ size: "2em", className: "pull-right" }}>
                                                    <IoIosCheckmark />
                                                </IconContext.Provider>
                                            </li>

                                        </ul>

                                    </article>

                                    <article className="col-md-12 col-sm-4 hidden-xs" id="view-cities">
                                        <h3 className="probabytext01">
                                            <IconContext.Provider value={{ size: "2em" }}>
                                                <IoMdCar />
                                            </IconContext.Provider>
                                            Je me déplace à
                                        </h3>

                                        <ul className="availabilities">

                                            <li>
                                                <a href="{{ path('gme_platform_view_tout_ville', {'ville': city.name }) }}">
                                                    <i className="ion-arrow-right-b" aria-hidden="true"></i>
                                                    Marseille
                                                </a>
                                            </li>
                                        </ul>


                                    </article>

                                    <article className="col-md-12 hidden-sm hidden-xs">
                                        <h3 className="probabytext01">
                                            <i className="ion-ios-people"></i>
                                            Annonces similaires
                                        </h3>
                                        <div className="row similar-advert">
                                            <div className="col-md-3 col-sm-2 col-xs-2 text-center">

                                                <figure className="square-img-ctn">
                                                    <a
                                                        href=""
                                                        className="image-bg image-bg-w50">
                                                        <img className="image-bg-placeholder"
                                                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                                             alt=""/>
                                                        <img alt="image" className="" src="/assets/people/2.jpg"
                                                             style={{width: '70%'}}/>
                                                    </a>
                                                </figure>
                                            </div>
                                            <div className="col-md-9 col-sm-7 col-xs-7">
                                                <a href="">
                                                    <h3>
                                                        Jean Random
                                                    </h3>
                                                    <p>
                                                        à
                                                        Marseille
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </aside>

                                <div className="col-md-9 ">
                                    <article className="probaby_left01 col-sm-12">
                                        <h2 className="probabytext01">
                                            <i className="ion-person"></i>
                                            Titre de l'annonce
                                        </h2>
                                        <p className="probabytext02">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                                            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                            voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
                                            eum fugiat quo voluptas nulla pariatur?
                                        </p>
                                    </article>


                                    <article className="probaby_left01 col-sm-12">

                                        <h3 className="probabytext01">
                                            <i className="ion-android-calendar"></i>
                                            Mes disponibilités
                                        </h3>

                                        <div className="docs-main">
                                            <table className="tablesaw" data-tablesaw-mode="swipe">
                                                <thead>
                                                <tr>
                                                    <th className="title" scope="col"
                                                        data-tablesaw-sortable-col="data-tablesaw-sortable-col"
                                                        data-tablesaw-priority="persist">&nbsp;
                                                    </th>
                                                    <th scope="col" data-tablesaw-sortable-col="data-tablesaw-sortable-col"
                                                        data-tablesaw-sortable-default-col="data-tablesaw-sortable-default-col"
                                                        data-tablesaw-priority="3">Lun
                                                    </th>
                                                    <th scope="col" data-tablesaw-sortable-col="data-tablesaw-sortable-col"
                                                        data-tablesaw-priority="2">Mar
                                                    </th>
                                                    <th scope="col" data-tablesaw-sortable-col="data-tablesaw-sortable-col"
                                                        data-tablesaw-priority="1">Mer
                                                    </th>
                                                    <th scope="col" data-tablesaw-sortable-col="data-tablesaw-sortable-col"
                                                        data-tablesaw-priority="4">Jeu
                                                    </th>
                                                    <th scope="col" data-tablesaw-sortable-col="data-tablesaw-sortable-col"
                                                        data-tablesaw-priority="4">Ven
                                                    </th>
                                                    <th scope="col" data-tablesaw-sortable-col="data-tablesaw-sortable-col"
                                                        data-tablesaw-priority="4">Sam
                                                    </th>
                                                    <th scope="col" data-tablesaw-sortable-col="data-tablesaw-sortable-col"
                                                        data-tablesaw-priority="4">Dim
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="title">7h à 9h</td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title">9h à 12h</td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title">12h à 14h</td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title">14h à 16h30</td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title">16h30 à 18h</td>

                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="title">18h à 20h</td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title">20h à minuit</td>

                                                    <td>
                                                        <IconContext.Provider value={{ size: "2.2em", color:'green' }}>
                                                            <IoIosCheckmark />
                                                        </IconContext.Provider>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>

                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </article>


                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}