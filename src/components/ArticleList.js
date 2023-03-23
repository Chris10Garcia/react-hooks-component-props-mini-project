import React from "react";
import Article from "./Article"


function ArticleList ({posts}){
    const postsJSX = posts.map(element =>{
        return <Article 
            key = {element.id} 
            title = {element.title} 
            date = {element.date}
            preview = {element.preview} />
    })

    return(
        <main>
            {postsJSX}
        </main>
    )
}

export default ArticleList