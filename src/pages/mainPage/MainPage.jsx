import Card from "../../components/cards/Card"
import { useGetUsers } from "../../utils/hooks/useGetUsers"
import Error from "../../components/appState/Error"
import Loading from "../../components/appState/Loading"
import s from "../../styles/mainStyle/main.module.scss"

const MainPage = () => {

    const { status, error, data: allUsers } = useGetUsers()

    if (status === 'loading') {
        return <Loading />
    }

    if (status === 'rejected') {
        return <Error error={error} />
    }

    return (
        <div className={s.container}>
            <div className={s.cards__box}>
                {allUsers?.map((personItem) => {
                    console.log(personItem)
                    return (
                        <div className={s.cards__wrapper}>
                            <Card key={personItem?.id} personData={personItem} />
                            <div className={s.cards__wrapper__hoverable}>
                                <div>Company</div>
                                <div>Name: {personItem?.company?.name}</div>
                                <div>CatchPhrase: {personItem?.company?.catchPhrase}</div>
                                <div>Bs: {personItem?.company?.bs}</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default MainPage