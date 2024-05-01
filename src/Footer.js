// import React from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importation des icônes
// import './Footer.css'

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-container">
//       <div className="right-content">
//           <p>Copyright © 2016 Division Laboratoires. Tous droits réservés.</p>
//           <p>Réalisé Par Département I.T</p>
//         </div>
//         <div className="left-content">
//           <div className="company-info">
//             <FaMapMarkerAlt />
//             <p>	Siège social :  1, Avenue du 1er Novembre - Boumerdès (35000) - Algérie.</p>
//           </div>
//           <div className="company-contact">
//             <FaPhone />
//             <p>+213 24 79  11 28/30</p>
//           </div>
//           <div className="company-contact">
//             <FaEnvelope />
//             <p>sec.DIVLABS@sonatrach.dz</p>
//           </div>
//         </div>
        
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  

  const fixedPages = [ '/Login',  '/FormNorme', '/FormDemandeNor', '/FormDemandeOuv', '/FormStagiaire']; 


  const isFixedPage = fixedPages.includes(location.pathname);

  return (
    <footer className={isFixedPage ? 'footer footer-fixed' : 'footer'}>
      <div className="footer-container">
        <div className="left-content">
          <p>Copyright © 2016 Division Laboratoires. Tous droits réservés.</p>
        </div>
        <div className="right-content">
          <p>Réalisé Par Département I.T</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

