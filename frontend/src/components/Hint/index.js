import React from 'react';
import Slider from "react-slick";

import flatAvaliation from '../../assets/images/flat-avaliation.svg';
import flatSecurity from '../../assets/images/flat-security.svg';
import flatAnonymous from '../../assets/images/flat-anonymous.svg';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import './styles.css'


export default function Hint() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div className="hints-container">
            <Slider style={{width: '80%'}} {...settings}>
                <div className="hint-item">
                    <img
                        alt="logo"
                        className="hint-img"
                        src={flatAvaliation}
                    />
                    <h1 className="hint-title">Seu site de avaliação!</h1>
                    <p className="hint-description">
                        Laboris duis est aliqua id est do consectetur et do cillum Lorem commodo. Occaecat laboris consectetur commodo enim irure culpa veniam cillum ut cupidatat in ipsum eiusmod. In mollit veniam excepteur sunt aute in. Amet eu amet reprehenderit est officia ipsum sunt amet aliquip occaecat sunt. Velit nulla non officia velit fugiat do qui exercitation enim.
                    </p>
                </div>
                <div className="hint-item">
                    <img
                        alt="logo"
                        className="hint-img"
                        src={flatSecurity}
                    />
                    <h1 className="hint-title">Segurança</h1>
                    <p className="hint-description">
                        Laboris duis est aliqua id est do consectetur et do cillum Lorem commodo. Occaecat laboris consectetur commodo enim irure culpa veniam cillum ut cupidatat in ipsum eiusmod. In mollit veniam excepteur sunt aute in. Amet eu amet reprehenderit est officia ipsum sunt amet aliquip occaecat sunt. Velit nulla non officia velit fugiat do qui exercitation enim.
                    </p>
                </div>
                <div className="hint-item">
                    <img
                        alt="logo"
                        className="hint-img"
                        src={flatAnonymous}
                    />
                    <h1 className="hint-title">Anonimato</h1>
                    <p className="hint-description">
                        Laboris duis est aliqua id est do consectetur et do cillum Lorem commodo. Occaecat laboris consectetur commodo enim irure culpa veniam cillum ut cupidatat in ipsum eiusmod. In mollit veniam excepteur sunt aute in. Amet eu amet reprehenderit est officia ipsum sunt amet aliquip occaecat sunt. Velit nulla non officia velit fugiat do qui exercitation enim.
                    </p>
                </div>
            </Slider>
        </div>
    );
}