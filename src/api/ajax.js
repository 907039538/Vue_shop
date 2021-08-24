import axios from 'axios'

export default function ajax(url,data={},type="GET"){
    return new Promise((resolve,reject)=>{
        let p 
        if(type === 'GET'){
            let dataStr = ''
            Object.keys(data).forEach(key=>{
                dataStr += key + '=' + data[key] +'&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            p = axios.get(url)
        }else{
            p = axios.post(url,data)
        }
        p.then(response=>{
            resolve(response.data)
        }).catch(reason=>{
            reject(reason)
        })
    })
}