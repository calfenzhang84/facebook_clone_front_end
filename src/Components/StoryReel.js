import React from 'react'
import Story from './Story'
import "./StroyReel.css"
const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image="https://i.pinimg.com/564x/a8/b4/42/a8b442181f7c004f98d4eef842a76e76.jpg"
                profileSrc="https://c8.alamy.com/comp/ENN71G/beautiful-woman-profile-colorful-abstract-hair-design-ENN71G.jpg"
                title="human"
            />
            <Story 
                image="https://i.pinimg.com/originals/8d/ed/ca/8dedca88d91f563ec3f72fb1b1e6a1d7.jpg"
                profileSrc="https://www.teahub.io/photos/full/141-1415982_avatar-abstract-profile.jpg"
                title="batman"
            />
            <Story 
                image="https://www.xtrafondos.com/wallpapers/vertical/taj-mahal-estilo-minimalista-6446.jpg"
                profileSrc="https://i.pinimg.com/originals/ac/03/fa/ac03fae8c0520794b72ef13d8c8ae216.jpg"
                title="human"
            />


        </div>
    )
}

export default StoryReel
