import React from "react"

export default function Content(){
    return(
        <main>
            <div className="content-leftSide">
                <h1 className="name">Szymon Kłos</h1>
                <h3 className="developer">Front-end developer</h3>
                <p className="description">
                    I am an ambitious and dedicated individual
                    seeking new challenges in my career. I aspire
                    to develop my skills and gain valuable
                    experience. My main goals involve leveraging
                    my skills and knowledge to achieve success
                    in an inspiring and growth-oriented
                    environment.
                </p>
            </div>
            <div className="content-rightSide">
                <img className="photo" alt="my-photo" src={"./photo.jpg"}/>
            </div>
        </main>
    )
}