import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {readAllPost, deletePost} from "../actions/index";
import PostListItem from "../components/postListItem"
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Link} from "react-router-dom";

class PostList extends Component {

    constructor(props) {
        super(props)
        this.state = {displayOnlyMine: false}
    }

    componentWillMount() {
        this.props.readAllPost()
    }

    renderPost () {
        const {posts} = this.props
        let arrayPosts
        if (posts) {
            if (this.state.displayOnlyMine) {
                arrayPosts = this.filterMyPost(posts)
            }else {
                arrayPosts = posts
            }
            return arrayPosts.map((post) => (
                <PostListItem key={post.id} post={post} deletePostCallback={(post) => this.deletePostCallback(post)} />
            ))
        }
    }

    deletePostCallback(post) {
        this.props.deletePost(post.id)
    }

    filterMyPost(postList) {
        return postList.filter((post)=> {
            if(post.author == "Moi") {
                return true;
            }
            return false
        })
    }

    render() {
        return (
            <div>
                <h1>Liste des post</h1>
                Afficher uniquement mes posts
                <input type="checkbox" onChange={(e) => {this.setState({displayOnlyMine : e.target.checked})}}/>
                <div className="button_add">
                    <Link to={'/create-post'}>
                        <button className="btn btn-primary">
                            Ajouter un Post
                        </button>
                    </Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <ReactCSSTransitionGroup
                        component="tbody"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        transitionName="fade"
                    >
                        {this.renderPost()}
                    </ReactCSSTransitionGroup>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readAllPost, deletePost}, dispatch),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(PostList);
