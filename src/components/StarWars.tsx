import React, {useContext, useEffect} from 'react';
import {defaultHero, friends, navItems, StarWarsContext, starWarsInfo} from "../utils/constants";
import styles from '../css/farGalaxy.module.css';
import {useNavigate, useParams} from "react-router-dom";
import {navWrapper} from '../hoc/navWrapper'
const StarWars = () => {
    return (
        <div className={styles.farGalaxy}>
            <p>{starWarsInfo}</p>
        </div>
    );
};

export default navWrapper(StarWars,2);