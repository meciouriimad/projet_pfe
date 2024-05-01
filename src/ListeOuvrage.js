import axios from "axios";
import React, { useState } from "react";
// import DataTable from "react-data-table-component";

import { useEffect } from "react";





function ListeOuvrage () {
    const [ouvrages, setOuvrages] = useState([]);
  
    // On utilise la méthode useEffect pour charger les données une fois le composant monté
    

    useEffect(() => {
        axios.get('http://localhost:3001/ouvr')
            .then((res) => {
                setOuvrages(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    
        
        return  ( 
            <div className="Ouvrage">
                <div className="filtrre"> 
                <input type="text"></input>
                <input type="text"></input>
                <button>rechercher</button>
                <button>Recherche Avancee</button>
                <a className="btn" href="/FormOuvrage" >ajouter</a>
                </div>
                

                <table className= "table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Côte</th>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Thème</th>
                            <th>Type de document</th>
                            <th>Annee d'edition</th>
                        </tr>
                    </thead>
                    <tbody>
                       { ouvrages.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.cote}</td>
                                <td>{data.titre}</td>
                                <td>{data.auteur}</td>
                                <td>{data.editeur}</td>
                                <td>{data.theme}</td>  
                                <td>{data.type}</td>
                                <td>{data.annee}</td>
                            </tr>
                       ))
                       }
                    </tbody>
                </table>  
             </div>
        )
}
export default ListeOuvrage;
                
     