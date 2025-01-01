import PropTypes from 'prop-types';
import style from "./card.module.css"
const Card = ({id,title,image,follows}) => {
  return (
    <div key={id} className={style.cardWrapper}>
      <div className={style.wrapper}>
        <img className={style.albumImg} src={image} alt="album photo" />
        <span className={style.follows}>{follows} Follows</span>
      </div>
      <div className={style.title}>
       <span>
         {title}
        </span>
      </div>
    </div>
  )
} 
Card.propTypes={
  id:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  follows:PropTypes.number.isRequired
}
export default Card