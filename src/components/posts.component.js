import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash';


import {fetchPosts} from '../actions/index.action'



class PostsIndex extends Component {
    
    // runs after component shows in DOM
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id} >
                    {post.title}
                </li>
            );
        });
    }
    
    render() {
        return(
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);