import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Business</Link></h1>
                <ul>
                    <li><Link to="/"> About Us</Link></li>
                    <li> <Link to="/work"> Our Work</Link></li>
                    <li><Link to="/contact"> Contact Us</Link></li>
                </ul>
        </StyledNav>
    )
}

const StyledNav= styled.nav`
    min-height: 10vh;
    display: flex;
     margin: auto;
    justify-content: space-between;
    align-items:center; 
    padding: 1rem 10rem;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
        transition: all 0.5s ease;
        &:hover {
            color: #23d997;
        }
    }
    ul {
        display: flex;
        list-style: none; 
    }  
    #logo {   
        font-size: 1.8rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        padding-left:0rem;
        transition: all 0.5s ease;
        &:hover {
            color: white;
        } 
    }
    li { 
        padding-left: 10rem;
        position: relative;
    } 
    
`
export default Nav 