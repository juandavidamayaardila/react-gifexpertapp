import React,{ useState } from "react";
import { AddCtegory } from "./components/AddCtegory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categorias = ['one punch','Samurai x','Dragon Ball'];
    const [categorias, setCategorias] = useState( ['one punch']);

   // const handLeAdd = (e) => {
        /**
         * de esta forma no se hace, porque se sobreescribe 
         * el objeto
         */
        //setCategories (categorias.push('pokemon'));
     //   setCategorias([...categorias,'Pokemon']);
    //}

    return (        
        <>
        <h2>GifExpertApp</h2>
        <AddCtegory setCategorias={ setCategorias } />
        
        <hr />
       
            <ol>
                {
                    categorias.map ( category => (
                       <GifGrid
                        key={category}
                        categoria={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;