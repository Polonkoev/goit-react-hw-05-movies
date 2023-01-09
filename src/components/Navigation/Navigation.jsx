import { NavLink } from "react-router-dom"
import {SNavLink, SList, SNav, SH2} from '../Navigation/Navigation.styled.js'


export const Navigation = () => {
   
    return (
        <>
        <SNav>
            <SList >
                <li ><SNavLink   to='/' end>Home</SNavLink></li>
                <li><SNavLink  to='/movies'>Movies</SNavLink></li>
            </SList>
            <SH2>Movie Finder </SH2>
        </SNav>
        
        </>
    )
}