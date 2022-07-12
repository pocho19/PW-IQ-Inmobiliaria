import axios from 'axios';
//const axios = require('axios');
const baseUrl = 'http://localhost:8000/';

export const httpGet = async (endpoint) => {
    return axios.get(baseUrl + endpoint)
    .catch(error => {
        window.alert(error.message);})
      
}

export const httpPost = async (endpoint, data) => {
    return axios.post(baseUrl + endpoint, data)
}


export const httpGetB = (endpoint) => {
    return axios.get(baseUrl + endpoint, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
}
  
export const httpPostB = async (endpoint, data) => {
    return axios.post(baseUrl + endpoint, data, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
}

export const httpPutB = async (endpoint, data) => {
    return axios.put(baseUrl + endpoint, data, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
}

export const httpPatchB = async (endpoint, data) => {
    return axios.patch(baseUrl + endpoint, data, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
}

export const httpDeleteB = async (endpoint, data) => {
    return axios.delete(baseUrl + endpoint, data, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
}
