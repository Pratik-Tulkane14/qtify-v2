import axios from "axios"

const getNewAlbum = async()=>{
    try {
        const result  = axios.get('https://qtify-backend-labs.crio.do/albums/new')
        return result
    } catch (error) {
        console.log(error);
        
    }
}
export default getNewAlbum