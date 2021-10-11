import React from 'react'

const Widget = () => {
    return (
        <div className="widgets">
            <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhubspot%2Fposts%2F10159129358504394&show_text=true&width=200" 
            width="340"
            height="1500"
            style={{border:"none", overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
            
        </div>
    )
}

export default Widget
