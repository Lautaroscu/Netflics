import "../styles/Reactions.css"
import ScaredImage from "../assets/images/scared.png"
import LovedImage from "../assets/images/love.png"
import BoredImage from "../assets/images/bored.png"
import { LikedIcon, LikeIcon, UnLikedIcon } from "../icons";
import { useState } from "react";

export default function Reactions() {
    const [reaction, setReaction] = useState(<LikeIcon />)
    const [isBouncing, setIsBouncing] = useState(false);
    const handleReaction =(reac) => {
        setReaction(reac)
        setIsBouncing(true)
    }
    return (
        <div class="like-container">
        <div onClick={()=>handleReaction(<LikeIcon/>)}
            className={`like-icon ${isBouncing ? "bounce" : ""}`}
            onAnimationEnd={() => setIsBouncing(false)}
        >
            {reaction || <LikeIcon />}
        </div>

        <div class="reactions">
            <span onClick={() => handleReaction(<LikedIcon />)}><LikedIcon /></span>
            <span onClick={() => handleReaction(<UnLikedIcon />)}><UnLikedIcon /></span>
            <span onClick={() => handleReaction(<img src={ScaredImage} alt="scared" />)}><img  src={ScaredImage} alt="scared" /></span>
            <span onClick={() => handleReaction(<img src={LovedImage} alt="loved" />)}><img src={LovedImage} alt="loved" /></span>
            <span onClick={() => handleReaction(<img src={BoredImage} alt="bored" />)}><img src={BoredImage} alt="bored" /></span>
        </div>
    </div>
    )
}