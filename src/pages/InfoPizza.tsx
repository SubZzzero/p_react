
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import "../components/PagesCss/InfoPizza.css";
import axios from 'axios'


type DataPizza = {
    imageUrl: string,
    name: string,
    description: string
}

export default function InfoPizza() {
    const [items, setItems] = useState<DataPizza | null>(null);

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

        return (<span style={{ color: "white", fontSize: "46px", textAlign: "center", display: 'block', marginTop: "150px" }}>
            Loading...
        </span>)

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
