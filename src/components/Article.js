import React from "react";


function Article ({title, date="January 1, 1970", preview, minutes}){

    // const emojis = (time) => {
    //     const limit = Math.ceil(time / 5)
    //     const eList = []
    //     for (let i = 0; i < limit; i++){
    //         eList.push("☕️")
    //     }
    //     return eList
    // }

    function buildEmojis(minutes){
        const emojis = []

        if (minutes < 30){
            const limit = Math.ceil(minutes / 5)
            for (let i = 0; i < limit; i ++){
                emojis.push("☕️")
            }
        } else {
            const limit = Math.ceil(minutes / 10)
            for (let i = 0; i < limit; i ++){
                emojis.push("🍱")
            }
        }
        return emojis
    }


    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {"•"} {buildEmojis(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article