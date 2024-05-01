import './Formulaire.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function FormNorme() {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };

  const [values, setValues] = useState({

    annee
      :
      "",
    categorie
      :
      "",
    date_norme
      :
      "",
    date_sn
      :
      "",
    doc
      :
      "",
    norme
      :
      "",
    norme_maj
      :
      "",
    titre
      :
      "",
    type
      :
      ""

  })


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/addnorme', values)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err));
    console.log(values);
  };

  return (
    <div className="Formulaire">
      <h2 className='titre-form'>Ajouter un norme</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="Type" className="form-label">Type de la norme
            <span className="required">*</span>
          </label>
          <select className="form-select" name="Type" onChange={(e) => setValues({ ...values, type: e.target.value })} required >
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="9">9</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Norme" className="form-label">Norme
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Norme" required onChange={(e) => setValues({ ...values, norme: e.target.value })} />
        </div>

        <div className="form-group">
          <label htmlFor="TitreNorme" className="form-label">Titre de la norme
            <span className="required">*</span>
          </label>
          <input className="form-control" name="TitreNorme" required onChange={(e) => setValues({ ...values, titre: e.target.value })} />
        </div>

        <div className="form-group">
          <label htmlFor="Categ" className="form-label">Catégorie
            <span className="required">*</span>
          </label>
          <select className="form-select" name="Categ" required onChange={(e) => setValues({ ...values, categorie: e.target.value })} >
            <option value="GEOLOGIE">--Séléctionner--</option>
            <option value="Offshore"> Offshore</option>
            <option value="Pétrole">Pétrole</option>
            <option value="Produits Pétroliers">Produits Pétroliers</option>
            <option value="Réservoir de stockage">Réservoir de stockage</option>
            <option value="Gaz">Gaz</option>
            <option value="HSE">HSE</option>
            <option value="Informatique">Informatique</option>
            <option value="Information et Documentation">Information et Documentation</option>
            <option value="Management">Management</option>
            <option value="Essais - Méthodes">Essais - Méthodes</option>
            <option value="Métrologie">Métrologie</option>
            <option value="Qualité de l'Air">Qualité de l'Air </option>
            <option value="Qualite du Sol">Qualité de l'Eau</option>
            <option value="Qualite du Sol">Qualite du Sol</option>
            <option value="Standard Practice and Test Method">Standard Practice and Test Method</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateNorme" className="form-label">Date de la norme
            <span className="required">*</span>
          </label>
          <input className="form-control" name="dateNorme" type="date" onChange={(e) => setValues({ ...values, date_norme: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="Annee" className="form-label">Année
            <span className="required">*</span>
          </label>
          <input className="form-control" name="Annee" required onChange={(e) => setValues({ ...values, annee: e.target.value })} />
        </div>

        <div className="form-group">
          <label htmlFor="miseajour" className="form-label">Norme mise à jour?
            <span className="required">*</span>
          </label>
          <select className="form-select" name="miseajour" required onChange={(e) => setValues({ ...values, norme_maj: e.target.value })}>
            <option value="student">Oui</option>
            <option value="employee">Non</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="DocNorme" className="form-label">Document Norme (PDF)
            <span className="required">*</span>
          </label>
          <input className="form-control" name="DocNorme" type="file" accept=".pdf" onChange={(e) => setValues({ ...values, doc: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="DateSaisie" className="form-label">Date Saisie
            <span className="required">*</span>
          </label>
          <input className="form-control" name="DateSaisie" type="date" defaultValue={getCurrentDate()} onChange={(e) => setValues({ ...values, date_sn: e.target.value })} required />
        </div>

        <div className="form-group">
          <button className="btn btn-primary" type="submit">Demander</button>
          <Link to="/ListeNorme" className="btn btn-secondary">Annuler</Link>
        </div>

      </form>
    </div>
  );
}

export default FormNorme;
