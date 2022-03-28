const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const getPromise = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                let result = {
                    data: data
                }
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
    })
}

module.exports = {getPromise}