import React from 'react'
import "./NotFoundBlock.css"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setActiveCategory, setCurrentPage } from "../../redux/slices/filterSlice";

function NotFoundBlock() {
    const dispatch = useDispatch();
    return (
        <>
            <div className="not-found-block">
                <div className="container">

                    <div className="not-found-block-inner">

                        <h1 className="not-found-title">Oops! Something went wrong!</h1>
                        <img className="not-found-block-img" src="/img/Pizza_empty.png"
                            alt="empty" />
                        <Link to={"/"}
                            onClick={() => {
                                dispatch(setActiveCategory(0));
                                dispatch(setCurrentPage(1));
                            }}>
                            <button className="button">Return to Home</button>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default NotFoundBlock