import s from "../../styles/buttonStyle/button.module.scss"

const Pagination = ({ page, limit, onPageChange, offset, total }) => {

    const pageCount = Math.ceil(total / limit)

    const increment = () => {
        page++
        onPageChange(page)
    }

    const decrement = () => {
        page--
        onPageChange(page)
    }

    return (
        <>
            <button
                disabled={page === 1}
                className={s.button}
                onClick={decrement}
            >
                Назад
            </button>
            <button
                disabled={page === pageCount}
                className={s.button}
                onClick={increment}
            >
                Вперед
            </button>
        </>
    )
}

export default Pagination