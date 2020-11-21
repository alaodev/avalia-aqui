import React from 'react';

import './styles.css';

export default function MedalCard(props) {
    return(
        <div className={'medalcard-container ' + props.medal}>
            <div className="medalcard-teacher">
                <img 
                    className="medalcard-teacher-image"
                    src={props.image}
                />
                <span className="medalcard-teacher-name">Professor Fulano Ciclano</span>
            </div>
            <div className="medalcard-info">
                <div className="medalcard-media">
                    <span className="media">
                        5.0
                    </span>
                    <span>MÉDIA</span>
                </div>
                <div className="medalcard-extra">
                    <span>AVALIAÇÕES: 16</span>
                    <span>PONTUAÇÃO: 80</span>
                </div>
            </div>
        </div>
    );
}