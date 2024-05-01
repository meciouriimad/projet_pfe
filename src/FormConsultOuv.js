import './FormDemande.css';
import React from 'react';
import { Link } from 'react-router-dom';


function FormConsultOuv() {

 
  return (

    <div className="FormulaireDem">
        <h2 className='titre-form'>Demande d'un norme</h2>
    <form >

        <div className="formgroup">
          <label htmlFor="Année" className="formlabel">Année
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Année"required/>
        </div>


        <div>
        <select className="form-select" name="Categ"  required  >
          <option value="Séléctionner">--Séléctionner--</option>
            <option value="Stagière"> Stagière</option>
            <option value="Lecteur">Lecteur</option>
          </select>
        </div>
        
        <div className="formgroup">
          <label htmlFor="NomPre" className="formlabel">Nom - Prénom
            <span className="required">*</span>
          </label>
          <input className="form-control" name="NomPre"required/>
        </div>

        <div className="form-group">
           <label htmlFor="Cote" className="form-label" >Cote Ouvrage 
             <span className="required">*</span>
           </label>
           <input className="form-control" name="Cote"  required onChange={(e)=>setValues({...values , cote: e.target.value})} />
         </div>

         <div className="form-group">
          <label htmlFor="dateNorme" className="form-label">Date Consultation
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

export default FormConsultOuv;