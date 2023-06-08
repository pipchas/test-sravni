import { NavLink } from "react-router-dom"

import s from '../../styles/mainStyle/main.module.scss'

const Header = () => {
    return (
        <header>
            <div className={s.header__panel}>
                <NavLink to='/'>HomePage</NavLink>
            </div>
        </header>
    )
}

export default Header