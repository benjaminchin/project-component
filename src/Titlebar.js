import React from 'react'
import folder from './icons8-opened-folder.svg'
import url from './icons8-share.svg'

export default function Titlebar(props) {
    return (
        <section>
            <img src={ folder } id="folder"/>
            <a href={props.link}><img src={ url } id="url" /></a>
        </section>
    )
}