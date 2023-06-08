import s from '../../styles/errorStyle/error.module.scss'

const Error = ({ error }) => {
    return (
        <div class={s.error__container}>
            <div>{error}</div>
            <div class={s.error__animation}></div>
        </div>
    )
}

export default Error