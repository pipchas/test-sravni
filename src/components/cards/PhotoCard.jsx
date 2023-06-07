import '../../styles/card-style/card.css'

const PhotoCard = ({ id, photo }) => {

    return (
        <div className="card__photos">
            <div>
                <img src={photo?.thumbnailUrl} />
            </div>
            <div>ID: {id}</div>
        </div>
    )
}

export default PhotoCard