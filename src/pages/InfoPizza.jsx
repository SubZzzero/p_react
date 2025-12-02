
import React, { useEffect, useState } from 'react'
import "../components/PagesCss/InfoPizza.css";
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';


export default function InfoPizza() {
    const [items, setItems] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizzas() {
            try {
                const { data } = await axios.get(
                    "https://690b168a6ad3beba00f368a7.mockapi.io/items/" + id
                );
                setItems(data)
            } catch (error) {
                alert("Not found pizza")
                console.log(error);
                navigate("/")
            }
        }
        fetchPizzas();
    }, [id, navigate]);

    if (!items) {
        return <div>Loading...</div>;
    }
    return (
        <div className='info-pizza'>
            <div className='container'>
                <div className='info-pizza-inner'>
                    <h1 className='info-pizza-title'>{items.name}</h1>
                    <img className='info-pizza-img' src={items.imageUrl} alt={items.name} />
                    <p className='info-pizza-desc'>{items.description}</p>
                    <Link to={"/"}>
                        <button className="button">Go back</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}
