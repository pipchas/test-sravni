import s from '../../styles/loadingStyle/loading.module.scss'

const Loading = () => {
    return (
        <div class={s.preloader}>
            <div class={s.preloader__spinner}></div>
        </div>
    )
}

export default Loading