import request from '../utils/request';


export function login(data)
{
    //console.log(data);
    return request({
        url: '/auth/login',
        method: 'post',
        data: data
    });
}

export function getInfo() {
    return request({
        url: '/auth/user',
        method: 'get',
    });
}

export function logout() {
    return request({
        url: '/auth/logout',
        method: 'post',
    });
}

export function register(data)
{
    return new Promise((resolve, reject) => {
        request({
            url: '/auth/register',
            method: 'post',
            data: data
        })
        .then((response) => {
            if(response.status)
            {
                resolve(response);
            }
        })
        .catch((error) => {
            reject(error)
        })
    })
}
