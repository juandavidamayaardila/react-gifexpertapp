


import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    console.log('categoria',categoria);
    const {data:images,loading} = useFetchGifs( categoria );

  //  const [images,setImages] = useState([]);
    /**
     * Permite ejecutar esa funcion una unica vez
     * cuando el componenete es renderizado
     * 
     * tambien se puede poner .then (setImages) = .then( img => setImages(img))
     *
    useEffect( () => {
      getGifs(categoria)
        .then( img => setImages(img))
    },[categoria]);
  */
    

  return (
    <>
      <h3>{ categoria }</h3>   
      {
        loading && <p>loading</p>
      }
        <div className='card-grid'>     
              {
                images.map( img =>(
                  <GifGridItem
                  key = {img.id}
                  {...img}
                  />

                ))
              }       
      </div>
    </>
  )
}
