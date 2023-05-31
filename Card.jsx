import React from "react"

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="picture">
                    <img className="img" src={props.item.imageurl} />
                </div>
                <div className="right">
                <div className="name">
                    <p>{props.item.title}</p>
                    <p>{props.item.price}</p>
                </div>
                <i><p>{props.item.description}</p></i>
                </div>
            </div>
        </div>
    )
}