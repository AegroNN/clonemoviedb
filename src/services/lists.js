/* eslint-disable */
import {api} from "./interceptor/api"

export default{ 
    getList(type,listType,pageNumber){
        return api.get("/"+type+"/"+listType+"?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&page="+pageNumber) 
    },
    getPopularPart(){
        return api.get("trending/all/day?api_key=196ce0b01013c413b6103f24b696e9c3")
    }
}