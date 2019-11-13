import React from "react"
import ReactDOM from "react-dom"
import Header from "../containers/header"
import {shallow, mount} from "enzyme"
import RootTest from "./root-test"
import { incrementActionCount } from "../actions";
import {INCREMENT_ACTION_COUNT, SET_AUTHENTIFICATION} from "../actions/actions-types";
import authentificationReducer from "../reducers/authentificationReducer";


describe("Test todo app fonctionnement", function () {
    it("Render du composant connecter sans Erreur", () => {
        const wrapper = shallow(
            <RootTest>
                <Header/>
            </RootTest>
        )
    })


    it("Render du composant connecter, verification du texte du bouton de connexion", () => {
        const wrapper = mount(
            <RootTest>
                <Header/>
            </RootTest>
        )

        expect(wrapper.find("button").text()).toEqual("Connexion")

        wrapper.find("button").simulate("click")

        expect(wrapper.find("button").text()).toEqual("Déconnexion")


    })

    it("Test payload d'une action", () => {
        const action = incrementActionCount();
        expect(action.type).toEqual(INCREMENT_ACTION_COUNT)
    })

    it("Test reducer authen sans action type", () => {
        const initialState = {
            isLoggedIn: false
        }
        expect(authentificationReducer(initialState, {}).isLoggedIn).toEqual(false)
    })


    it("Test reducer authen sans action type", () => {
        const action = { type: SET_AUTHENTIFICATION, payload: true }
        const initialState = {
            isLoggedIn: false
        }

        expect(authentificationReducer(initialState, action).isLoggedIn).toEqual(true)
    })
})