import { useGetPersonsInfoQuery, useGetPersonsPhotoQuery } from "../../redux/api"
import Card from "../../components/cards/Card"
import { useGetUsers } from "../../utils/hooks/use-get-users"
import Error from "../../components/app-state/Error"
import Loading from "../../components/app-state/Loading"

const MainPage = () => {

    const { status, error, data: allUsers } = useGetUsers()

    if (status === 'loading') {
        return <Loading />
    }

    if (status === 'rejected') {
        return <Error error={error}/>
    }

    return (
        <div className="custom__container">
            <div className="cards__box">
                {allUsers?.map((personItem) => <Card key={personItem?.id} personData={personItem} />)}
            </div>
        </div>
    )
}

export default MainPage