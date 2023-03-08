import React from 'react'
import './index.css'
import Titlebar from './Titlebar.js'

export default function Project(props) {
    return (
        <div>
            <div className="card">
                <Titlebar 
                    link={props.link}
                />
                <h1>{props.project}</h1>
                <p>{props.info}</p>
                <p className="tags">{props.tags.join(' ')}</p>
            </div>
        </div>
    )
}