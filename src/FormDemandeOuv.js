import './FormDemande.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';


function FormDemande() {

  const [ouvrages, setOuvrages] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:3001/ouvr')
            .then((res) => {
                setOuvrages(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const [lecteurs, setLect] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:3001/lect')
            .then((res) => {
                setLect(res.data);
            })
            .catch(err => console.log(err));
    }, []);

  const [values, setValues] = useState({

    nom_lecteur:"",
    prenom_lect:"",
    direction:"",
    cote:""

  })
  

  const handleSubmit = (event) => {
      event.preventDefault();

      if(values.nom_lecteur !== lecteurs.nom_lecteur){
        axios.post('http://localhost:3001/addlect',values)
          .then((res)=>{
            console.log(res)
          })
          .catch(err => console.log(err));
      }
      if(values.cote === ouvrages.cote && 
        values.nom_lecteur === lecteurs.nom_lecteur){
          axios.post('http://localhost:3001/addpret',values)
          .then((res)=>{
            console.log(res)
          })
          .catch(err => console.log(err));
      }
      
      console.log(values); 
  };
 
  return (
    <div className="FormulaireDem">
       <h2 className='titre-form'>Demande d'un ouvrage</h2>
      <form onSubmit={handleSubmit}>

        <div className="formgroup">
          <label htmlFor="Nom" className="formlabel">Nom
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Nom"required onChange={(e)=>setValues({...values , nom_lecteur: e.target.value})} />
        </div>

        <div className="formgroup">
          <label htmlFor="Prénom" className="formlabel">Prénom
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Prénom"required onChange={(e)=>setValues({...values , prenom_lect: e.target.value})}/>
        </div>

        <div className="formgroup">
          <label htmlFor="Structure" className="formlabel">Structure
            <span className="required">*</span>
          </label>
          <select className="formselect" name="Structure"  required onChange={(e)=>setValues({...values , direction: e.target.value})}>
            <option value="GEOLOGIE">--Séléctionner--</option>
            <option value="GEOLOGIE">GEOLOGIE</option>
            <option value="GISEMENT">GISEMENT</option>
            <option value="ASSISTANCE AUX UNITES INDUSTRIELLES">ASSISTANCE AUX UNITES INDUSTRIELLES</option>
            <option value="GESTION PERSONNEL">GESTION PERSONNEL</option>
            <option value="DIVISION LABORATOIRES">DIVISION LABORATOIRES</option>
            <option value="FINANCES">FINANCES</option>
            <option value="RECHERCHE">RECHERCHE</option>
            <option value="LOGISTIQUE">LOGISTIQUE</option>
            <option value="DEPARTEMENT TI">DEPARTEMENT TI</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="formgroup">
          <label htmlFor="Cote" className="formlabel">Cote
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Cote" required onChange={
            (e)=>setValues({...values , cote: e.target.value})
            }/>
        </div>
        
        <div className="formgroup">
                    <button className="btn btn-primary" type="submit">Demander</button>
                    <Link to="/" className="btn btn-secondary">Annuler</Link>
                </div>

      </form>
    </div>
  );
}

export default FormDemande;
