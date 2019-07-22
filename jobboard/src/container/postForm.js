import React, {Component} from 'react';
import {reduxForm} from "redux-form";
import {createPost} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {
    Link,
    withRouter
} from "react-router-dom";

const formConfig = {
    form: "createPostForm",
    fields: ['title', 'content', 'author'],
    validate: validate,
    initialValues: {author: "Moi"}
}

class postForm extends Component {
    render() {
        const {fields: {title, content, author}, handleSubmit, errors} = this.props
        console.log(errors)
        return (
            <div>
                <h1>creer un post</h1>
                <form action="" onSubmit={handleSubmit(this.createPost.bind(this))}>
                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                        <label>Titre</label>
                        <input type="text" className="form-control" {...title} />
                        <div>
                            {title.touched && errors.title}
                        </div>
                    </div>
                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                        <label>description</label>
                        <textarea className="form-control" {...content} />
                        <div>
                            {content.touched && errors.content}
                        </div>
                    </div>
                    <div className={`form-group ${author.touched && author.invalid ? 'has-danger' : ''}`}>
                        <label>Auteur</label>
                        <input type="text" className="form-control" {...author} />
                        <div>
                            {author.touched && errors.author}
                        </div>
                    </div>
                    <Link className="mr-5" to={'/'}>
                        <button className="btn btn-danger">
                            retour
                        </button>
                    </Link>
                    <button className="btn btn-success" disabled={this.props.invalid}>creer</button>
                </form>
            </div>
        );
    }


    createPost(post) {
        this.props.createPost(post)
        this.props.history.push('/');
    }

}



function validate (values) {
    const errors = {}

    if(!values.title) {
        errors.title = "Veuillez remplir le titre"
    }
    if(!values.content) {
        errors.content = "Veuillez remplir le contenu"
    }
    if(!values.author) {
        errors.author = "Veuillez remplir l'auteur"
    }

    return errors
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({createPost}, dispatch)
})

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(withRouter(postForm)));
