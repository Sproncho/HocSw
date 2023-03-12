import React, {useContext, useEffect, useState} from 'react';
import "../css/contact.css";
import {base_url, defaultHero, friends, navItems, period_month, StarWarsContext} from "../utils/constants";
import {useNavigate, useParams} from "react-router-dom";
import {navWrapper} from '../hoc/navWrapper'
interface Planet {
    name: string
}

const Contact = () => {

    const [planets, setPlanets] = useState(['wait...']);


    async function fillPlanets(url: string) {
        const response = await fetch(url);
        const json: Planet[] = await response.json();
        const planets = json.map(item => item.name);
        setPlanets(planets)
        const info = {
            payload: planets,
            time: Date.now()
        }
        localStorage.setItem('planets', JSON.stringify(info));
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets')!);
        if (planets && ((Date.now() - planets.time) < period_month)) {
            setPlanets(planets.payload);
        } else {
            fillPlanets(`${base_url}/v1/planets`);
        }

    }, )

    // useEffect(() => {
    //     if (!friends.includes(heroId)) {
    //         navigate(`/${navItems[3].route}/${defaultHero}`);
    //     } else {
    //         changeHero(heroId);
    //     }
    // }, [heroId]);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label>First Name
                    <input type="text" name="firstname" placeholder="Your name.."/>
                </label>
                <label>Planet
                    <select name="planet">{
                        planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                </label>
                <label>Subject
                    <textarea name="subject" placeholder="Write something.."/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}

export default navWrapper( Contact,3);