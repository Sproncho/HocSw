import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {defaultHero, friends, navItems, StarWarsContext} from "../utils/constants";

export  const navWrapper = (WrappedComponent,index) => props => {
    const {heroId = ''} = useParams();
    const {setHero: changeHero} = useContext(StarWarsContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!friends.includes(heroId)) {
            navigate(`/${navItems[index].route}/${defaultHero}`);
        } else {
            changeHero(heroId);
        }
    }, [heroId])
    return <div>
        <WrappedComponent {...props}/>
    </div>
}