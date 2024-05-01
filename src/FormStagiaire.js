import './FormDemande.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

function FormStagiaire() {
  const [values, setValues] = useState({

    nom_stag:"",
    prenom_stag:"",
    structA:""

  })
  

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/addstag',values)
      .then((res)=>{
        console.log(res)
      })
      .catch(err => console.log(err));
      console.log(values); 
  };
        
    return (
      <div className="FormulaireDem">
        <h2 className='titre-form'>Ajouter un stagiaire</h2>
        <form onSubmit={handleSubmit}>


        <div className="formgroup">
          <label htmlFor="Nom" className="form-label">Nom 
            <span className="required">*</span>
          </label>
          <input className="formcontrol" name="Nom"  required onChange={(e)=>setValues({...values , nom_stag: e.target.value})} />
        </div>
        <div className="formgroup">
          <label htmlFor="Prénom" className="form-label">Prénom 
            <span className="required">*</span>
          </label>
          <input className="formcontrol" name="Prénom"  required onChange={(e)=>setValues({...values , prenom_stag: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="Organisme" className="formlabel">Organisme 
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Organisme"  required onChange={(e)=>setValues({...values , structA: e.target.value})} />
        </div>

        <div className="formgroup">
                    <button className="btn" type="submit">Enregistrer</button>
                    <Link to="/" className="btn">Annuler</Link>

                </div>

        
      </form>
    </div>
  );
}

export default FormStagiaire;
