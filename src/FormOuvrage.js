// import { useState } from 'react';
// import './Formulaire.css';

// import { Link } from 'react-router-dom'; 
// import axios from 'axios';

// function FormOuvrage() {
//   const [values, setValues] = useState({

//     cote:"",
//     titre:"",
//     auteur:"",
//     editeur:"",
//     theme:"",
//     type:"",
//     lieu:"",
//     annee:"",
//     langue:"",
//     class:""

//   })
  

//   const handleSubmit = (event) => {
//       event.preventDefault();
//       axios.post('http://localhost:3001/addouvr',values)
//       .then((res)=>{
//         console.log(res)
//       })
//       .catch(err => console.log(err));
//       console.log(values); 
//   };
        
//     return (
//       <div className="Formulaire">
//         <h2 className='titre-form'>Ajouter un ouvrage</h2>
//         <form onSubmit={handleSubmit}>


//         <div className="form-group">
//           <label htmlFor="Cote" className="form-label" >Cote Ouvrage 
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="Cote"  required onChange={(e)=>setValues({...values , cote: e.target.value})} />
//         </div>

//         <div className="form-group">
//           <label htmlFor="Theme" className="form-label">Thème
//             <span className="required">*</span>
//           </label>
//           <select className="form-select" name="Theme"   required onChange={(e)=>setValues({...values , theme: e.target.value})} >
//             <option value="student">DLAB</option>
//             <option value="employee">Recherche</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="Classe" className="form-label">Classe
//             <span className="required">*</span>
//           </label>
//           <select className="form-select" name="Classe"  required  onChange={(e)=>setValues({...values , class: e.target.value})}>
//             <option value="student">DLAB</option>
//             <option value="employee">Recherche</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="Type" className="form-label">Type
//             <span className="required">*</span>
//           </label>
//           <select className="form-select" name="Type"  required  onChange={(e)=>setValues({...values , type: e.target.value})}>
//             <option value="student">DLAB</option>
//             <option value="employee">Recherche</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="Titre" className="form-label">Titre
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="Titre"  required  onChange={(e)=>setValues({...values , titre: e.target.value})} />
//         </div>

//         <div className="form-group">
//           <label htmlFor="Auteur" className="form-label">Auteur
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="Auteur"  required  onChange={(e)=>setValues({...values , auteur: e.target.value})} />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="Editeur" className="form-label">Editeur
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="Editeur"  required onChange={(e)=>setValues({...values , editeur: e.target.value})}/>
//         </div>

//         <div className="form-group">
//           <label htmlFor="LieuEdit" className="form-label">Lieu Edition
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="LieuEdit"  required   onChange={(e)=>setValues({...values , lieu: e.target.value})}/>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="AnneeEdit" className="form-label">Année Edition
//             <span className="required">*</span>
//           </label>
//           <input className="form-control" name="AnneeEdit"  required   onChange={(e)=>setValues({...values , annee: e.target.value})}/>
//         </div>

//         <div className="form-group">
//           <label htmlFor="langue" className="form-label">Langue
//             <span className="required">*</span>
//           </label>
//           <select className="form-select" name="langue"  required  onChange={(e)=>setValues({...values , langue: e.target.value})} >
//             <option value="student">DLAB</option>
//             <option value="employee">Recherche</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
        

        
//         <div className="form-group">
//                     <button className="btn" type="submit">Demander</button>
//                     <Link to="/" className="btn">Annuler</Link>

//                 </div>

        
//       </form>
//     </div>
//   );
// }

// export default FormOuvrage;



import { useState } from 'react';
import './Formulaire.css';

import { Link , useNavigate} from 'react-router-dom'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormOuvrage() {
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
    class:"" // Correctif : "class" est un mot réservé en JavaScript, utilisez "classe" à la place.
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/addouvr', values)
      .then((res) => {
        console.log(res);
        toast.success("L'ouvrage a été ajouté avec succès."); // Afficher un message de succès
        setTimeout(() => {
          navigate("/ListeOuvrage"); // Rediriger vers la page d'accueil après un certain délai
        }, 3000); // 3 secondes de délai avant la redirection
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
      <div className="form-group">
           <label htmlFor="Cote" className="form-label" >Cote Ouvrage 
             <span className="required">*</span>
           </label>
           <input className="form-control" name="Cote"  required onChange={(e)=>setValues({...values , cote: e.target.value})} />
         </div>

         <div className="form-group">
           <label htmlFor="Theme" className="form-label">Thème
             <span className="required">*</span>
           </label>
           <select className="form-select" name="Theme"   required onChange={(e)=>setValues({...values , theme: e.target.value})} >
             <option value="student">DLAB</option>
             <option value="employee">Recherche</option>
             <option value="other">Other</option>
           </select>
         </div>

         <div className="form-group">
           <label htmlFor="Classe" className="form-label">Classe
             <span className="required">*</span>
           </label>
           <select className="form-select" name="Classe"  required  onChange={(e)=>setValues({...values , class: e.target.value})}>
             <option value="student">DLAB</option>
             <option value="employee">Recherche</option>
             <option value="other">Other</option>
           </select>
         </div>

         <div className="form-group">
           <label htmlFor="Type" className="form-label">Type
             <span className="required">*</span>
           </label>
           <select className="form-select" name="Type"  required  onChange={(e)=>setValues({...values , type: e.target.value})}>
             <option value="student">DLAB</option>
             <option value="employee">Recherche</option>
             <option value="other">Other</option>
           </select>
         </div>

         <div className="form-group">
           <label htmlFor="Titre" className="form-label">Titre
             <span className="required">*</span>
           </label>
           <input className="form-control" name="Titre"  required  onChange={(e)=>setValues({...values , titre: e.target.value})} />
         </div>

         <div className="form-group">
           <label htmlFor="Auteur" className="form-label">Auteur
             <span className="required">*</span>
           </label>
           <input className="form-control" name="Auteur"  required  onChange={(e)=>setValues({...values , auteur: e.target.value})} />
         </div>
        
         <div className="form-group">
           <label htmlFor="Editeur" className="form-label">Editeur
             <span className="required">*</span>
           </label>
           <input className="form-control" name="Editeur"  required onChange={(e)=>setValues({...values , editeur: e.target.value})}/>
         </div>

         <div className="form-group">
           <label htmlFor="LieuEdit" className="form-label">Lieu Edition
             <span className="required">*</span>
           </label>
           <input className="form-control" name="LieuEdit"  required   onChange={(e)=>setValues({...values , lieu: e.target.value})}/>
         </div>
        
         <div className="form-group">
           <label htmlFor="AnneeEdit" className="form-label">Année Edition
             <span className="required">*</span>
           </label>
           <input className="form-control" name="AnneeEdit"  required   onChange={(e)=>setValues({...values , annee: e.target.value})}/>
         </div>

         <div className="form-group">
           <label htmlFor="langue" className="form-label">Langue
             <span className="required">*</span>
           </label>
           <select className="form-select" name="langue"  required  onChange={(e)=>setValues({...values , langue: e.target.value})} >
             <option value="student">DLAB</option>
             <option value="employee">Recherche</option>
             <option value="other">Other</option>
           </select>
         </div>
        
        <div className="form-group">
          <button className="btn" type="submit">Demander</button>
          <Link to="/ListeOuvrage" className="btn">Annuler</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default FormOuvrage;
