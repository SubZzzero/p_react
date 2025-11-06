import React from 'react'
import "./NotFoundBlock.css"


function NotFoundBlock() {
    return (
        <>
            <div className="not-found-block">
                <div className="container">

                    <div className="not-found-block-inner">

                        <h1 className="not-found-title">Oops! Something went wrong!</h1>
                        <img className="not-found-block-img" src="/img/Pizza_empty.png"
                            alt="empty" />
                        <button className="button">Return to Home</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NotFoundBlock