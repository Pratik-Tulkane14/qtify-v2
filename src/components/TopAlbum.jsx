import { useEffect, useState } from "react"
import style from "./topAlbum.module.css"
import getTopAlbum from "../services/getTopAlbum";
import Card from "./Card";
const TopAlbum = () => {
    const [albumList, setAlbumList] = useState([]);
    const [isCollapse, setIsCollapse] = useState(false);
    const fetchAlbum = async () => {
        const result = await getTopAlbum();
        setAlbumList(result.data)
    }
    useEffect(() => {
        fetchAlbum()
    }, []);
    return (
        <div className={style.albumWrapper}>
            <div className={style.header}>
                <div className={style.subHeadingWrapper}>

                    <h4 className={style.heading}>
                        Top Albums
                    </h4>
                    <span className={style.showAll} onClick={()=>setIsCollapse((prev)=>!prev)}>{isCollapse?"Collaps":"Show all"}</span>
                </div>
            </div>
            <div className={style.cardWrapper}>
                {albumList?.map((item) => {
                    return (

                        <Card key={item.id} title={item.title} image={item.image} follows={item.follows} />
                    )
                })}
            </div>
        </div>
    )
}

export default TopAlbum