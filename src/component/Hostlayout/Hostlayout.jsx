
import React from 'react'
import { NavLink, Outlet, Navigate, useLoaderData } from 'react-router-dom'
import "./Hostlayout.css"
import { requireAuth } from '../../utils'
import { Loader } from '../Loader/Loader'



export const loader = async ({ request }) => {
    // loader that calls function to check user is logged in or not
    const Auth = await requireAuth(request);
    return { auth: Auth, display: Auth === true ? true : false }
}


export const Hostlayout = () => {
    // layout page for host route which is protected path
    // if user is curretly logged in display host page else redirect to login page
    const loader = useLoaderData();
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>{loader.display === true ?

            <>
                <header>
                    <nav className="container">
                        <ul className='host-nav-item'>
                            <li><NavLink to="." style={({ isActive }) => isActive ? activeStyle : null} end >Dashboard</NavLink></li>
                            <li><NavLink to="/host/income" style={({ isActive }) => isActive ? activeStyle : null} end>Income</NavLink></li>
                            <li><NavLink to="vans" style={({ isActive }) => isActive ? activeStyle : null} end >Vans</NavLink></li>
                            <li><NavLink to="/host/reviews" style={({ isActive }) => isActive ? activeStyle : null} end>Reviews</NavLink></li>

                        </ul>
                    </nav>
                </header>
                <Outlet />
            </>
            : <Navigate to={`/login?message=You must login first&redirectTo=${loader.auth}`} />

        }
        </>
    )
}
