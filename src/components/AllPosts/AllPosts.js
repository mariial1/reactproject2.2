import React, {Component} from 'react';
import OnePost from "../OnePost/OnePost";

class AllPosts extends Component {

    state = {posts: [], chosenOne: null};

    constructor() {
        super();
    };

    onSelectPost = (id) => {
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chosenOne: find});
    };

    render() {
        let {posts, chosenOne} = this.state;
        return (
            <div>
                {
                    posts.map(post => <OnePost item={post} key={post.id} onSelectPost={this.onSelectPost}/>)
                }
                {
                    chosenOne && <OnePost item={chosenOne}/>
                }

            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});
            });
    };
}

export default AllPosts;