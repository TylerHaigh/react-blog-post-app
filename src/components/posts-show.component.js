import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {fetchPost, deletePost} from '../actions/index.action';


class PostsShow extends Component {
    
    componentDidMount() {
        // may want to add a check to see if we have already downloaded the post
        // to reduce network calls
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteThis() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    
    render() {
        const {post} = this.props;

        if (!post) return <div>Fetching...</div>;

        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteThis.bind(this)}>
                    Delete Post
                </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);