import { redirect, useNavigate } from "react-router-dom"

export async function requireAuth(request) {
    // function creates native web url and also checks user logged in or not using session data stored in localstorage
    // if user logged in it returns true else it returns the native web url which can be used for redirect or navigate in login page
    // the native web url indicate the user where user is previously logged out
    
    const url = new URL(request.url).pathname;
    const loginStatus = JSON.parse(localStorage.getItem("loggedIn"));
    const isLoggedIn = loginStatus
    if (!isLoggedIn) {

        return url
    }
    return true
}