import React, {Component} from 'react';
import {connect} from "react-redux";

class UserDetails extends Component {
    render() {
        const {myActiveUsers} = this.props
        if(!myActiveUsers) {
            return <div>Selectionnez un utilisateur</div>
        }
        return (
            <div>
                <h3>Détails de {myActiveUsers.nom}</h3>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        myActiveUsers: state.activeUser
    }
}


export default connect(mapStateToProps)(UserDetails);