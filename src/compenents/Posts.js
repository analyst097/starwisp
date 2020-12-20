import React, { Component } from 'react';
import './Posts.css';
import { ReactComponent as AttachmentIcon } from '../assets/attachment.svg';
import { ReactComponent as SendArrow } from '../assets/sendArrow.svg';
import { ReactComponent as Avatar } from '../assets/avatar.svg';

class Posts extends Component {

    

    constructor(props){
        super(props);
        this.postRef=React.createRef();
    }

    state={
        posts:[{
            info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, rerum est autem alias ex magni?',
            username:'Some User',
            date:new Date()
        },{
            info:'Lorem Quaerat, rerum est autem alias ex magni?',
            username:'Aditya',
            date:new Date()
        }]
    }

    cancelPost=()=>{
        this.postRef.current.value='';
    }

    addPost=()=>{
        // console.log(this.postRef.current.value);
        if(this.postRef.current.value.trim().length>0){
            const postInfo={
                info:this.postRef.current.value,
                username:'Aditya',
                date:new Date()
            };
            this.setState({posts:[...this.state.posts,postInfo]});
            this.cancelPost();    
        }
    }

    getTime=(date)=>{
        let add='';
        if(new Date(date).getHours()>=12){
            add='pm';
        }else{
            add='am';
        }
        return `${new Date(date).getHours()} : ${new Date(date).getMinutes()} ${add}`;
    }

    showPosts=()=>{
        return this.state.posts.map(post=>{
            return (
                <div className="postInfoCard">
                   <div className="avatar">
                       <Avatar />
                   </div>
                   <div className="information">
                       <div className="username">
                           {post.username}
                       </div>
                       <div className="info">
                           {post.info}
                       </div>
                   </div>
                   <div className="time">
                        {this.getTime(post.date)}
                   </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="posts">
                <div className="postInput">
                    <div className="postInput_textInput">
                        <textarea ref={this.postRef} name="" id="" placeholder="Share something with your class.." cols="30" rows="3">

                        </textarea>
                    </div>
                    <div className="postInput_actionButtons">
                        <div className="left">
                            <div className="cancelButton" onClick={this.cancelPost}>
                                Cancel
                            </div>
                        </div>
                        <div className="right">
                            <AttachmentIcon style={{height:'35px',margin:'0 1rem'}} />
                            <div className="shareButton" onClick={this.addPost}>
                                <div style={{padding:'0.25rem',margin:'0 auto'}}>
                                    Share
                                </div>                                                             
                                
                                <div className="sendArrow">       
                                    <SendArrow />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="postsList">
                    {
                        this.showPosts()
                    }
                </div>
            </div>
        )
    }
}

export default Posts;
