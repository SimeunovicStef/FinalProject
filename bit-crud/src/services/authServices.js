import { http } from "./fetchService";

export const logOut = () => {
    localStorage.removeItem("token");
}


export const sendLoginData = (payload) => {

    const loginEndpoint = "http://crud-api.hypetech.xyz/v1/auth/login"
    return http.post(loginEndpoint, payload)
        .then(data => {

            localStorage.setItem("token", data.accessToken)
            return data
        })
}

export const isUserLoggedIn = () => {
    return !!localStorage.getItem("token")
}