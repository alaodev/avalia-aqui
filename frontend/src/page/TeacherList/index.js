import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import MedalCard from '../../components/MedalCard';
import Sidebar from '../../components/Sidebar'

import goldMedal from '../../assets/images/icons/gold-medal.svg';
import silverMedal from '../../assets/images/icons/silver-medal.svg';
import bronzeMedal from '../../assets/images/icons/bronze-medal.svg';

import './styles.css';

export default function TeacherList(props) {

    const teachers = [
        { name: 'Alexande Ribeiro', note: 4.9 },
        { name: 'Max Gontijo', note: 4.7 },
        { name: 'Lucília Ribeiro', note: 4.0 },
        { name: 'Anibal Jukemura', note: 4.5 }
    ];

    return(
        <Fragment>
            <Sidebar />
            <div className="teacherlist-container">
                <div style={{width: '100%', display: 'flex', marginBottom: 50, justifyContent: 'center'}}>
                    <MedalCard medal="gold-color" image={goldMedal} />
                    <MedalCard medal="silver-color" image={silverMedal} />
                    <MedalCard medal="bronze-color" image={bronzeMedal} />
                </div>
                <div>
                    <Autocomplete
                        id="combo-box-demo"
                        options={teachers}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 600 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                </div>
            </div>
        </Fragment>
    );
}