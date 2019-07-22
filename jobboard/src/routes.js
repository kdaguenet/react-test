import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PostList from './container/postList'
import PostForm from './container/postForm'
import Post from './container/post'
import NotFound from './components/notFound'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PostList} />
                    <Route path="/create-post" component={PostForm} />
                    <Route path="/post/:id" component={Post} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
