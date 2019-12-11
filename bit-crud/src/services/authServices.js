import { http } from "./fetchService";

export const logOut = () => {
    localStorage.removeItem("sessionId");
}


export const sendLoginData = (payload) => {

    const loginEndpoint = "http://crud-api.hypetech.xyz/v1/auth/login"
    return http.post(loginEndpoint, payload)
        .then(data => {

            localStorage.setItem("token", data.accessToken)
            console.log(data);
            return data
        })
}

export const isUserLoggedIn = () => {
    return !!localStorage.getItem("token")
}