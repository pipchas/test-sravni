import { useNavigate } from 'react-router-dom'
import '../../styles/card-style/card.css'
import '../../styles/button-style/button.css'

const Card = ({ personData }) => {

    const navigateTo = useNavigate();

    return (
        <div className="card">
            <div>
                ФИО: {personData.name}
            </div>
            <div>
                Email: {personData.email}
            </div>
            <div>
                UserName: {personData.username}
            </div>
            <div className='card__button'>
                <div>
                    Phone: {personData.phone}
                </div>
                <button onClick={() => navigateTo(`users/${personData.id}`)}>
                    Перейти
                </button>
            </div>
        </div>
    )
}

export default Card