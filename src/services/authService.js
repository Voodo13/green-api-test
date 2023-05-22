class AuthService {
    static get = () => {
        const authData = localStorage.getItem('authData')
        return JSON.parse(authData)
    }

    static set = (authData) => {
        localStorage.setItem("authData", JSON.stringify(authData));
    }

    static delete = () => {
        localStorage.removeItem('authData')
    }
}

export default AuthService