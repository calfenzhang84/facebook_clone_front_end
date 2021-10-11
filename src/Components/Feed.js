import React, { useEffect, useState } from 'react'
import "./Feed.css"
import MessagerSender from './MessagerSender'
import Post from './Post'
import StoryReel from './StoryReel'

import axios from "./axios";
import Pusher from "pusher-js"
import { useStateValue } from './StateProvider'

const pusher = new Pusher('ed54a0146226fc615877', {
    cluster: 'us3'
  });


const Feed = () => {

    // const [profilePic, setProfilePic] = useState("");
    const [postsData, setPostsData] = useState([]);

    const syncFeed = () => {
        axios.get("/retrieve/posts")
            .then((res) => {
                console.log(res.data);
                setPostsData(res.data);
            })
    }
    useEffect(() => {
        const channel = pusher.subscribe("posts");
        channel.bind("inserted", function(data) {
          syncFeed()
        });
    }, []);

    
    useEffect(() => {
        syncFeed();
    }, [])
    console.log(postsData);
    return (
        <div className="feed">
            <StoryReel />
            <MessagerSender />
            {postsData.map(post => (
                <Post profilePic={post.avatar}
                message={post.text} 
                timestamp={post.timestamp} 
                imgName={post.imgName}
                username={post.user} />
            ))}
            
        </div>
    )
}

export default Feed
