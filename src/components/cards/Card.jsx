import { useNavigate } from 'react-router-dom'
import s from '../../styles/cardStyle/card.module.scss'

const Card = ({ personData }) => {

    const navigate = useNavigate();

    return (
        <div className={s.card}>
            <div>
                ФИО: {personData.name}
            </div>
            <div>
                Email: {personData.email}
            </div>
            <div>
                UserName: {personData.username}
            </div>
            <div className={s.card__button}>
                <div>
                    Phone: {personData.phone}
                </div>
                <button onClick={() => navigate(`users/${personData.id}`)}>
                    Перейти
                </button>
            </div>
        </div>
    )
}

export default Card