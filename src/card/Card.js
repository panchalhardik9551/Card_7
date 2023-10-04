import React from 'react'

export default function Card({ imgsrc, text, video }) {

    return (
        <>
            <img src={imgsrc} width="500" height="230" alt="" />
            <h2>{text}</h2>
            <iframe src={video} height={500} width={500} frameborder="0"></iframe>
        </>
    )
}