import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {useNavigate, useParams} from "react-router-dom";
import {defaultHero, friends, navItems, StarWarsContext} from "../utils/constants";
import {navWrapper} from '../hoc/navWrapper'
const Home = () => {

    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default navWrapper(Home,0);