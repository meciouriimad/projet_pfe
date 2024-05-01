import Card from 'react-bootstrap/Card';
import config from './config.json';
import React from 'react';
import './CardPage.css';

function CardPage() {
    let cardArr = config;

    return (
        <div className='row card-page-container'>
            {cardArr.map((eachCard, index) => (
                <div className='col-md-3 card-wrapper' key={index}>
                    <Card className="custom-card-style">
                        <Card.Img className="card-image" variant="top" src={require('./images/' + eachCard.img + '.jpg')} />
                        <Card.Body>
                            <Card.Title>{eachCard.title}</Card.Title>
                            <Card.Text className="card-text">
                                {eachCard.text}
                            </Card.Text>
                            <a className="btn btn-custom" href={`${eachCard.link}`}>Consulter</a>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default CardPage;
