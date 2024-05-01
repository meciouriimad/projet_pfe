// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from './images/img1.jpg'
// import img2 from './images/img2.jpg'
// import img3 from './images/img3.jpg'
// import './CarouselPage.css'

// function CarouselPage() {
//   return (
//     <div>
//     <Carousel>
//     <Carousel.Item>
//   <div className="carousel-image-container">
//     <img
//       style={{ height: '75vh' }}
//       className="d-block w-100"
//       src={img1}
//       alt="First slide"
//     />
//     <div className="carousel-caption">
//       <h2>First slide label</h2>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       <button className="btn btn-primary">Savoir Plus</button>
//     </div>
//   </div>
// </Carousel.Item>
//     <Carousel.Item>
//       <img style={{height:'75vh'}}
//         className="d-block w-100"
//         src={img1}
//         alt="First slide"
//       />
//       <Carousel.Caption>
//         <h2>First slide label</h2>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         <button className="btn btn-primary">Savoir Plus</button>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img style={{height:'75vh'}}
//         className="d-block w-100"
//         src={img2}
//         alt="Second slide"
//       />

//       <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <button className="btn btn-primary">Savoir Plus</button>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img style={{height:'75vh'}}
//         className="d-block w-100"
//         src={img3}
//         alt="Third slide"
//       />

//       <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>
//           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//         </p>
//         <button className="btn btn-primary">Savoir Plus</button>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
//   </div>
//   )
// }

// export default CarouselPage


// function CarouselPage() {
//   return (
//     <Carousel>
//       {carouselData.map((slide, index) => (
//         <Carousel.Item key={index}>
//           <div className="carousel-image-container">
//             <img
//               style={{ height: '75vh' }}
//               className="d-block w-100"
//               src={require(`./images/${slide.img}.jpg`)}
//               alt={slide.title}
//             />
//             <div className="carousel-caption">
//               <h2>{slide.title}</h2>
//               <p>{slide.text}</p>
//               <Button variant="primary" href={`${slide.link}`}>Info</Button>
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default CarouselPage;

// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import carouselData from './carouselData.json';
// import './CarouselPage.css';
// import { useState } from 'react';
// import  Modal  from 'react-bootstrap/Modal';

// function CarouselPage() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState({ title: '', Description: '' });

//   const handleShowModal = (title, Description, id) => {
//     if(id==1){
//     setModalContent({ title, Description });
//     setShowModal(true);}
//     else{

//     }
//   };

//   const handleCloseModal = () => setShowModal(false);

//   return (
//     <>
//       <Carousel>
//         {carouselData.map((slide, index) => (
//           <Carousel.Item key={index}>
//             <div className="carousel-image-container">
//               <img
//                 style={{ height: '75vh' }}
//                 className="d-block w-100"
//                 src={require(`./images/${slide.img}.jpg`)}
//                 alt={slide.title}
//               />
//               <div className="carousel-caption">
//                 <h2>{slide.title}</h2>
//                 <p>{slide.text}</p>
//                 <button className='btn' onClick={() => handleShowModal(slide.title, slide.Description, slide.id)}>
//                   {slide.Btn}
//                 </button>
//               </div>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{modalContent.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{modalContent.Description}</Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default CarouselPage;
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselData from './carouselData.json';
import './CarouselPage.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function CarouselPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', Description: '' });

  const handleShowModal = (title, Description, id, link) => {
    if (id == 1) {
      setModalContent({ title, Description });
      setShowModal(true);
    } else {
      window.location.href = link; 
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Carousel>
        {carouselData.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img
                style={{ height: '75vh' }}
                className="d-block w-100"
                src={require(`./images/${slide.img}.jpg`)}
                alt={slide.title}
              />
              <div className="carousel-caption">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                {slide.id === 1 ? (
                  <button
                    className="btn"
                    onClick={() => handleShowModal(slide.title, slide.Description, slide.id, slide.link)}
                  >
                    {slide.Btn}
                  </button>
                ) : (
                  <a className="btn" href={slide.link}>
                    {slide.Btn}
                  </a>
                )}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.Description}</Modal.Body>
      </Modal>
    </>
  );
}

export default CarouselPage;
