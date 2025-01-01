import axios from "axios"

const getTopAlbum = async()=>{
    try {
        const result  = axios.get('https://qtify-backend-labs.crio.do/albums/top')
        return result
    } catch (error) {
        console.log(error);
        
    }
}
export default getTopAlbum