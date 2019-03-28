import React, { Component } from 'react';
import up from "../up.png"
import down from "../down.png"
import '../Comments/Comments.css';
import './posts.css';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    //For upvote and downvote functionality, Get post_id to change and make a db request
    //to add or subtract one. Also, emit that action to all users.
    //Have not instantiated socket yet so can't emit yet.
    upvote = (post_id) => {
        // Endpoints not made yet
        // axios.put(`/postUpVote/${post_id}`).then(newCount =>{
        //     console.log("Upvoted post")
        // })
    }
    downvote = (post_id) => {
        // Endpoints not made yet
        // axios.put(`/postDownVote/${post}`).then(newCount =>{
        //     console.log("Upvoted post")
        // })
    }

    render() {
        return (
            // <div className="post-parent">
            //     <div className="comment-parent__header">


            <div className="post-parent">
                <div className="comment-parent__header">

                    {/* Change all data to equal props from Posts */}
                    <div className="comment-parent__user-info">
                        <img className="comment-parent__profile-picture" src={this.props.poster_pic} />

                        <p className="comment-parent__user-name">@{this.props.poster_username}</p>
                    </div>

                    <div className='comment-parent__timestamp'>
                        <p className='comment-parent__timeInfo'>3.29.19</p>
                        <p className='comment-parent__timeInfo'>3:05pm</p>
                    </div>

                </div>

                <div className="comment-parent__content">
                    {this.props.post_content}
                </div>

                <div className="comment-parent__footer">


                    <button className="comment-parent__vote"><img src={up}></img></button>
                    <p>{this.props.upvotes}</p>

                    <button className="comment-parent__vote"><img src={down}></img></button>
                    <p>{this.props.downvotes}</p>

                </div>
            </div>
        )
    }
}