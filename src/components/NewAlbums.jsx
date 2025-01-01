import { useEffect, useState } from "react"
import style from "./topAlbum.module.css"
import Card from "./Card";
import getNewAlbum from "../services/getNewAlbum";
const NewAlbums = () => {
 const [albumList, setAlbumList] = useState([]);
    const fetchAlbum = async () => {
        const result = await getNewAlbum();
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
                        New Albums
                    </h4>
                    <span className={style.showAll}>Show all</span>
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

export default NewAlbums