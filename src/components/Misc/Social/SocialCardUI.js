import React from 'react';
import './SocialCardUI.css';

const SocialCardUI = ({
    data:{caption,tag,date,tesis,author,picture,description,website,comments,share,likes}
    }) => {

    // console.log(caption,tag,date,tesis,author,picture,description,website,comments,share,likes);

    return (
        <div className="SocialCardUI">
            <div><h3>Social Card</h3></div>
            <div className="carddiv">
                <div className="top">
                    <div><strong>{caption}</strong> <label className="text-secondary">{tag} {date}</label></div>
                    <div>{tesis}</div>
                    <div>{'{'} author: <label className="text-info">{author}</label> {'}'}</div>
                </div>
                <div className="mid">
                    <img src={picture} alt="caption"/>                
                </div>
                <div className="bot">
                    <div><strong>{tesis}</strong></div>
                    <div className="description">{description}</div>
                    <div className="text-secondary">{website}</div>
                    <div>Comments:{comments.length},  shared: {share.length},  liked: {likes.length}</div>
                </div>
            </div>
        </div>
    )
}

export default SocialCardUI;
