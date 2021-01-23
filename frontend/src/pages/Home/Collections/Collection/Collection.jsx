import React from 'react'
import './Collection.css'

const Collection = (props) => {
    const divStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'top',
        backgroundSize: "cover",
    }
    return (
        <>
            <div className="collection-item">
                <div className="collection-item-img" style={divStyle}></div>
                <div className="collection-item-text"><h3>{props.collectionTitle}</h3><p>{props.text}</p></div>
            </div>

        </>
    )
}

export default Collection