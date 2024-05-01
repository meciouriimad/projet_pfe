import axios from "axios";
import React, { useState } from "react";
// import DataTable from "react-data-table-component";

import { useEffect } from "react";




function ListeNorme () {
    const [normes, setNormes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/norme')
            .then((res) => {
                setNormes(res.data);
            })
            .catch(err => console.log(err));
    }, []);
        
        return  ( 
            <div className="Ouvrage">
                <div className="filtrre"> 
                {/* <input type="text" ></input>  */}
                {/* <input type="text"></input>
                <button>rechercher</button>
                <button>Recherche Avancee</button> */}
                 <a className="btn" href="/FormNorme">ajouter</a>
                </div>
                

                <table className= "table table-striped table-hover">
                    <thead>
                        <tr>
                        <th>type</th>
                            <th>norme</th>
                            <th>Titre de la norme</th>
                            <th>Catégorie</th>
                            <th>Date de la norme</th>
                            <th>Année</th>
                            <th>Document Norme (PDF)</th>
                        </tr>
                    </thead>
                    <tbody>
                       { normes.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.type}</td>
                                <td>{data.norme}</td>
                                <td>{data.titre}</td>
                                <td>{data.categorie}</td>
                                <td>{data.date_norme}</td>
                                <td>{data.annee}</td>  
                                <td>{data.doc}</td>
                            </tr>
                       ))
                       }
                    </tbody>
                </table>  
             </div>
        )
}
export default ListeNorme;
                
     