import axio from 'axios'

const baseUrl = '/api'

const axios_json = axio.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

export const ajax_j = (url, method, params, config) => {
    let u = baseUrl + url
    return new Promise((resolve, reject) => {
        let promise
        if (method === 'get') {
            promise = axios_json.get(u, config)
        } else if (method === 'post') {
            promise = axios_json.post(u, params, config)
        } else if (method === 'put') {
            promise = axios_json.put(u, params, config)
        } else if (method === 'delete') {
            promise = axios_json.delete(u, config)
        } else {
            alert('请求方式有误，暂不支持')
        }
        promise.then(res => {
            console.log('-------------------响应数据  start -------------------')
            console.log(res)
            console.log('-------------------响应数据  end   -------------------')
            resolve(res.data)
        }).catch(error => {
            console.log('-------------------响应异常  start -------------------')
            console.log(error.response,error.message)
            console.log('-------------------响应异常  end   -------------------')
        })
    })
}
