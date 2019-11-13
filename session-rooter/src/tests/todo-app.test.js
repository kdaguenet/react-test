import React from "react"
import ReactDOM from "react-dom"
import TodoApp from "../components/todo-app"
import {shallow} from "enzyme"

describe("Test todo app fonctionnement", function () {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TodoApp/>);
    })

    afterEach(() => {
        wrapper.unmount()
    })

    it('render composant todoapp sans erreur', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp/>, div)
    })

    it('contient la chaine "Nouvelle tâche"', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp/>, div)
        expect(div.innerHTML).toContain("Nouvelle tâche")
    })


    it('render composant todoapp sans erreur avec shallow', () => {

        expect(wrapper.html()).toContain("Nouvelle tâche")
    })

    it('possède 2 classes Row', () => {

        expect(wrapper.find('.row').length).toEqual(2)
    })

    it('change input value', () => {

        wrapper.find('input').simulate("change", {
            target: {value: "Yo"}
        })
        expect(wrapper.find('input').prop('value')).toEqual("Yo")
    })

    it('Ajoute une nouvelle todo', () => {

        wrapper.find('input').simulate("change", {
            target: {value: "Yo"}
        })

        wrapper.find('button').simulate("click")

        expect(wrapper.find('.list-group-item').text()).toContain("Yo")
    })
})