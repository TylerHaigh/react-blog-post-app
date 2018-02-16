import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {fetchPost} from '../actions/index.action';


class PostsShow extends Component {
    
    componentDidMount() {
        // may want to add a check to see if we have already downloaded the post
        // to reduce network calls
        const {id} = this.props.match.params;
        this.props.fetchPost(id);

    }
    
    render() {

        const {post} = this.props;

        if (!post) return  <div>Fetching...</div>;

        return (
            <div>
                <Link to="/">Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post : posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);