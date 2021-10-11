import React, { useState } from 'react'
import "./MessagerSender.css"
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from "./axios"
import { useStateValue } from './StateProvider';



const MessagerSender = () => {
    const [input, setInput] = useState("");
    const [image, setImage] = useState(null);
    const [{user}, dispatch] = useStateValue()

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    let postData;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (image) {
            const imgForm = new FormData()
            imgForm.append("file", image, image.name)
            // field is file, append image, refered as name of the image
            
            axios.post("/upload/image", imgForm, {
                headers: {
                    "accept": "application/json",
                    "Accept-Language": "en-US,en;q=0.8",
                    "Content-Type": `multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res) => {
                console.log(res.data);

                 postData = {
                    text: input,
                    imgName: res.data.filename,
                    user: user.displayName,
                    avatar: user.photoURL,
                    timestamp: Date.now()
                }
                console.log(postData);
                savePost(postData);
            })
        }else{
            const postData = {
                text: input,
                user: user.displayName,
                avatar: user.photoURL,
                timestamp: Date.now()
            }
            console.log(postData);
            savePost(postData);
        }
        

        setImage(null);
        setInput("");
    }

    const savePost = async (postData) => {
        await axios.post("/upload/post", postData)
                    .then(res => {
                        console.log(res);
                    })
    }

    return (
        <div className="messengerSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form action="">
                    <input type="text" className="mesageSender__input" placeholder={`What's on your mind, ${user.displayName}?`} onChange={(e) => setInput(e.target.value)} value={input}/>
                    <Input type="file" className="messageSender__fileSelector" onChange={handleChange}/>
                    <button onClick={handleSubmit} type="submit" style={{display: "none"}}>Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>

    )
}

export default MessagerSender
