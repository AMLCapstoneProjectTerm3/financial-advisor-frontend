export const URLs = {
    deployment: 'https://financialadvisorapi.herokuapp.com',
    staging: 'https://financialadvisorstagingapi.herokuapp.com',
    development: 'http://localhost:8000' 
}

export const BASE_URL = process.env.REACT_APP_NGROK || URLs.staging
// export const BASE_URL = URLs.development
// export const BASE_URL = "https://60ef-99-237-160-34.in.ngrok.io"
export const API = {
    TEST: '/tests',
    LOGIN: '/login',
    SIGNUP: '/register',
    PROTECTEDTEST: '/protected',
    PREDICT_STOCK: '/predict',
    USERDETAILS: '/userdetails',
    GET_STOCKS: '/stocksOnRisk'
}

// export const 