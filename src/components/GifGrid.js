import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'; 
import {GifGridItem} from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);  

    return (
        <>
        <h3>{category}</h3>
        {loading ? 'cargando...': 'Datos cargados exitosamente'}

        <div className="card-grid">
        {

            images.map(image => {
                return <GifGridItem key={image.id} {...image}/>
            })
        }
        </div>
        </>
    )
}
    

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}