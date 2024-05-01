import './FormDemande.css';
import React from 'react';
import { Link } from 'react-router-dom';


function miseAjourPret() {

 
  return (

    <div className="FormulaireDem">
        <h2 className='titre-form'>Demande d'un norme</h2>
    <form >

        <div className="formgroup">
          <label htmlFor="Nom" className="formlabel">Nom Lecteur
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Nom"required/>
        </div>

        <div className="formgroup">
           <label htmlFor="Cote" className="formlabel" >Cote Ouvrage 
             <span className="required">*</span>
           </label>
           <input className="formcontrol" name="Cote"  required />
         </div>

         <div className="form-group">
          <label htmlFor="dateNorme" className="form-label">Date sortie
            <span className="required">*</span>
          </label>
          <input className="form-control" name="dateNorme" type="date" onChange={(e) => setValues({ ...values, date_norme: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="dateNorme" className="form-label">Date entrée
            <span className="required">*</span>
          </label>
          <input className="form-control" name="dateNorme" type="date" onChange={(e) => setValues({ ...values, date_norme: e.target.value })} required />
        </div>


        <div className="formgroup">
        <button className="btn btn-primary" type="submit">Demander</button>
        <Link to="/" className="btn btn-secondary">Annuler</Link>
    </div>

    </form>
    </div>
);
}

export default miseAjourPret;