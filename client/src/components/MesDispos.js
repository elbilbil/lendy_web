import React, {Component} from "react";
import '../CSS/GME.css';
import '../CSS/responsive.css';
import { IoIosCheckmark } from "react-icons/io";
import {IoMdCar} from "react-icons/io";
import { IconContext } from "react-icons";
import {Link} from "react-router-dom";

export default class MesDispos extends Component {
    render() {

        return (
            <div>
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
        );
    }
}