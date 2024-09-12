import React, { useContext } from 'react'
import { Card } from '../componentes/Card.jsx'
import { ProductosContext } from '../context/ProductosContext.jsx'


export const ComprasPage = () => {

    const { productos } = useContext( ProductosContext )

    return (
        <>
            <h1>Compras:</h1>
            <hr />

            {productos.map(producto => (
                <Card
                    key={producto.id}
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
