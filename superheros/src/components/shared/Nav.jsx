import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav =()=>(
    <nav>
    <NavLink to= '/'>Home</NavLink>
    <NavLink to= '/heros'>Heros</NavLink>
    <NavLink to= '/createHeros'>Create/Update Hero</NavLink>
    </nav>
)

export default Nav