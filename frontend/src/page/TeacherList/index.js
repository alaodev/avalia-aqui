import React from 'react';

import MedalCard from '../../components/MedalCard';

import goldMedal from '../../assets/images/icons/gold-medal.svg';
import silverMedal from '../../assets/images/icons/silver-medal.svg';
import bronzeMedal from '../../assets/images/icons/bronze-medal.svg';

import './styles.css';

export default function TeacherList(props) {

    return(
        <div className="teacherlist-container">
            <MedalCard medal="gold-color" image={goldMedal} />
            <MedalCard medal="silver-color" image={silverMedal} />
            <MedalCard medal="bronze-color" image={bronzeMedal} />
        </div>
    );
}