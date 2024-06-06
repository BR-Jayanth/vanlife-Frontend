
import React from 'react'
import "./Login.css";
import { useLoaderData, useNavigate, Form, redirect, useActionData, useNavigation, json } from 'react-router-dom';
import { loginUser } from "../../API/Api.js"
import {loginUserAxios} from "../../API/axios/axiosApi.js"


export const loader = ({ request }) => {
    // setting naviage route using search parameter
    // access the native web to get the query data /alternative to using searchParams
    const urlData = new URL(request.url);
    const data = {
        message: urlData.searchParams.get("message"),
        redirectTo: urlData.searchParams.get("redirectTo") || "/host",
    }
    return data;
}
export const action = async (obj) => {
    // action method that calls api and handles loading state and error state and redirecting to host page
    const formData = await obj.request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const apiData = await loginUserAxios({ email, password });
        const data =  apiData;
        if (!apiData.ok) {
            // setting up session data on localStorage for user
            localStorage.setItem("loggedIn", true)
            localStorage.setItem("hostId",apiData.hostId)
            redirect("/host")
            return true
        }

    } catch (error) {
        return error.message
    }
    return null;
}

export const Login = () => {


    const loader = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();
    const actionData = useActionData();
    
    React.useEffect(() => {
        if (actionData === true) {
            // navigate back to the path where user was logged out or default it to host path
            navigate(`${loader.redirectTo}`, { replace: true });
        }
    }, [actionData])
    return (
        <>
            <div className="loginPage-container">
                <h1 className="loginPage-title">
                    Sign in to your account
                </h1>
                {loader && <h2 className='loginPage-title-2'>{loader.message}</h2>}
                {actionData && <h2 className='loginPage-title-2'> Invalid email or credential{/*{actionData}*/}</h2>}

                <Form method="post"
                    className="loginPage-form"
                    replace
                >
                    <input type="email"
                        name="email"
                        placeholder='Email address'

                    />
                    <input type="password"
                        name="password"
                        placeholder='Password'

                    />
                    <button
                        className="loginPage-submit-btn"
                        disabled={navigation.state === "submitting"}
                    >
                        {navigation.state === "submitting" ? `Loging in ....` : `Sign in`}
                    </button>
                </Form>
                <p className="loginPage-content">
                    <span className="loginPage-plain-text">
                        Don't have an account?
                    </span>
                    <span className="loginPage-color-text">
                        Create one now
                    </span>
                </p>
            </div>
        </>
    )
}


