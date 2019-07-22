import React, {Component} from 'react';
import PostContent from '../components/postContent'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {readPost} from "../actions";

class Post extends Component {

    componentWillMount() {
        this.props.readPost(this.props.match.params.id)
    }

    renderPostContent() {
        const {post} = this.props
        if(post) {
            return <PostContent post={post}/>
        }
    }

    render() {
        return (
            <div>
                {this.renderPostContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.activePost
    };
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readPost}, dispatch),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Post);
