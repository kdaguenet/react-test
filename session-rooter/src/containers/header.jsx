import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import {Link} from "react-router-dom";

class Header extends Component {

    onClickAuthentification = () => {
        this.props.setAuthentification(!this.props.isLoggedIn)
    }

    renderAuthenLabel = () => {
        if (this.props.isLoggedIn) {
            return "Déconnexion"
        } else {
            return "Connexion"
        }
    }


    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" href="#">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ressources" className="nav-link" href="#">Ressources</Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" href="#" onClick={this.onClickAuthentification}>{ this.renderAuthenLabel() }</button>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authentication.isLoggedIn
    };
}

export default connect(
    mapStateToProps, actions
)(Header);
