import s from'../../styles/cardStyle/card.module.scss'

const PhotoCard = ({ id, photo }) => {

    return (
        <div className={s.card__photos}>
            <div>
                <img src={photo?.thumbnailUrl} />
            </div>
            <div>ID: {id}</div>
        </div>
    )
}

export default PhotoCard