import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component{
    renderLinks(){
        if (this.props.authenticated)
        {
            return (
                <div className="collapse navbar-collapse navbar-collapse-4">
                    <ul className="navbar-nav ml-auto justify-content-end">
                        <li className="nav-item">
                            <Link className="btn btn-primary ml-md-3" to='/conversations'>Messagerie</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary ml-md-3" to='/search'>Rechercher</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary ml-md-3" to='/update-profile'>Mon Profil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary ml-md-3" to='/signout'>Se déconnecter</Link>
                        </li>
                    </ul>
                </div>
            )
        }
        else{
            return (
                <div className="collapse navbar-collapse navbar-collapse-4">
                    <ul className="navbar-nav ml-auto justify-content-end">
                        <li className="nav-item">
                            <a name="btnConnect"  target="_blank" className="btn btn-primary ml-md-3" href='https://www.apple.com/fr/ios/app-store/'>Obtenir sur l'app Store</a>
                        </li>
                    </ul>

                    <a name="btnConnect"  target="_blank" className="btn btn-primary ml-md-3" href='https://play.google.com/store/apps?hl=fr'>Obtenir sur le Play Store</a>
                </div>
            );
        }
    }

    render(){
        return (
            <header className="bg-blue">
                <div className="container">
                    <nav className="navbar navbar-expand-md no-gutters">
                        <div className="col-3 text-left">
                            <Link to='/'>
                                <img src="/assets/img/logopetit.png" height="30" alt="logo" />
                            </Link>
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-4" aria-controls="navbarNav15" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {this.renderLinks()}
                    </nav>
                </div>
            </header>

        )
    }
}

function mapStateToProps(state){
    return {authenticated : state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);
