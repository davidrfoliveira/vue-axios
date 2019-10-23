import {http} from './axios-config'

export default{
    listarPosts:() => {
        return http.get('posts')
    }
}