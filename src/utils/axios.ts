// axios
import Axios from 'axios'

const service = Axios.create({

})

// 请求拦截
service.interceptors.request.use((config) => {
    return config
})

// 响应拦截
service.interceptors.response.use((response) => {
    return response
})

export {
    service as request,
}
