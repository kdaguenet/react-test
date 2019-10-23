import React, {Component} from 'react';
import {connect} from 'react-redux'

export default function (ChildComponent) {
    class RequireAuth extends Component {

        componentDidMount() {
            if(!this.props.isLoggedIn) {
                this.props.history.push("/")
            }
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(!this.props.isLoggedIn) {
                this.props.history.push("/")
            }
        }

        render() {
            return <ChildComponent />;
        }
    }

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.authentication.isLoggedIn
        }
    }

    return connect(mapStateToProps)(RequireAuth)
}
