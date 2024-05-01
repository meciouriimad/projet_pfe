// import './FormDemande.css';
// import React from 'react';
// import { Link } from 'react-router-dom';


// function FormDemande() {

 
//   return (
//     <div className="FormulaireDem">
//          <h2 className='titre-form'>Demande d'un norme</h2>
//       <form >

//         <div className="formgroup">
//           <label htmlFor="Nom" className="formlabel">Nom
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="Nom"required/>
//         </div>

//         <div className="formgroup">
//           <label htmlFor="Prénom" className="formlabel">Prénom
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="Prénom"required/>
//         </div>

//         <div className="formgroup">
//           <label htmlFor="Structure" className="formlabel">Structure
//             <span className="required">*</span>
//           </label>
//           <select className="formselect" name="Structure"  required>
//             <option value="GEOLOGIE">--Séléctionner--</option>  
//             <option value="GEOLOGIE">GEOLOGIE</option>
//             <option value="GISEMENT">GISEMENT</option>
//             <option value="ASSISTANCE AUX UNITES INDUSTRIELLES">ASSISTANCE AUX UNITES INDUSTRIELLES</option>
//             <option value="GESTION PERSONNEL">GESTION PERSONNEL</option>
//             <option value="DIVISION LABORATOIRES">DIVISION LABORATOIRES</option>
//             <option value="FINANCES">FINANCES</option>
//             <option value="RECHERCHE">RECHERCHE</option>
//             <option value="LOGISTIQUE">LOGISTIQUE</option>
//             <option value="DEPARTEMENT TI">DEPARTEMENT TI</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="formgroup">
//           <label htmlFor="Cote" className="formlabel">Code norme
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="Cote" required/>
//         </div>
        
//         <div className="formgroup">
//                     <button className="btn btn-primary" type="submit">Demander</button>
//                     <Link to="/" className="btn btn-secondary">Annuler</Link>
//                 </div>

//       </form>
//     </div>
//   );
// }

// export default FormDemande;

import { useState } from 'react';
import './Formulaire.css';

import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormDemande() {
  const navigate = useNavigate(); // Hook pour la navigation
  const [values, setValues] = useState({
    cote:"",
    titre:"",
    auteur:"",
    editeur:"",
    theme:"",
    type:"",
    lieu:"",
    annee:"",
    langue:"",
    classe:"" // Correctif : "class" est un mot réservé en JavaScript, utilisez "classe" à la place.
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/addouvr', values)
      .then((res) => {
        console.log(res);
        toast.success("L'ouvrage a été ajouté avec succès."); // Afficher un message de succès
        setTimeout(() => {
          navigate("/"); // Rediriger vers la page d'accueil après un certain délai
        }, 1500); // 3 secondes de délai avant la redirection
      })
      .catch(err => {
        console.log(err);
        toast.error("Une erreur s'est produite lors de l'ajout de l'ouvrage."); // Afficher un message d'erreur
      });
    console.log(values); 
  };
        
  return (
    <div className="Formulaire">
      <h2 className='titre-form'>Ajouter un ouvrage</h2>
      <form onSubmit={handleSubmit}>
      <div className="formgroup">
          <label htmlFor="Nom" className="formlabel">Nom
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Nom"required/>
        </div>

        <div className="formgroup">
          <label htmlFor="Prénom" className="formlabel">Prénom
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Prénom"required/>
        </div>

        <div className="formgroup">
          <label htmlFor="Structure" className="formlabel">Structure
            <span className="required">*</span>
          </label>
          <select className="formselect" name="Structure"  required>
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
          <label htmlFor="Cote" className="formlabel">Code norme
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Cote" required/>
        </div>
        
        <div className="form-group">
          <button className="btn" type="submit">Demander</button>
          <Link to="/" className="btn">Annuler</Link>
        </div>
      </form>
      <ToastContainer /> {/* Conteneur pour les messages toast */}
    </div>
  );
}

export default FormDemande;
