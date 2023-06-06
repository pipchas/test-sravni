import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="header__panel">
                <NavLink to='/'>HomePage</NavLink>
            </div>
        </header>
    )
}

export default Header