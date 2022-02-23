import React from 'react'


export const GifGridItem = ( item ) => {

    //console.log('gif item',item.url);

  return (
    <div className='card animate__animated animate__fadeIn'>
        
         <img src={ item.url } alt={ item.title } />
         <p>{item.title}</p> 
        
    </div>
  )
}
