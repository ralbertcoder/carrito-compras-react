import React, { useEffect, useState } from 'react'
import { Card } from '../componentes/Card.jsx'

export const ComprasPage = () => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProductos(data)
    }

    useEffect(() => {
        fetchProductos()

    }, [])



    return (
        <>
            <h1>Compras:</h1>
            <hr />

            {productos.map(producto => (
                <Card
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                >

                </Card>

            ))}


            
        </>
    )
}
