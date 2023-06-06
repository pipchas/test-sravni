import { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetPhotos } from "../../utils/hooks/use-get-photos"
import { useGetUserById } from "../../utils/hooks/use-get-persons-by-id"
import Pagination from "../../components/pagination/Pagination"
import PhotoCard from "../../components/cards/PhotoCard"
import Loading from "../../components/app-state/Loading"
import Error from "../../components/app-state/Error"

const UserInfo = () => {
    const total = 5000

    const { id: personsId } = useParams()

    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(1);
    const [limit] = useState(10);

    // console.log(offset, limit, page)

    const onPageChange = (newPage) => {
        const newOffset = newPage * limit - (limit - 1);
        setOffset(newOffset);
        setPage(newPage);
    };

    const { userStatus, userError, userById } = useGetUserById({ id: personsId })
    const { status, error, photos } = useGetPhotos({ limit, offset })

    if (status === 'loading') {
        return <Loading />
    }

    if (!userById) {
        return <Error error='Пользователя по такому ID не существует' />
    }

    if (status === 'error') {
        return <Error error={error}/>
    }

    return (
        <div className="custom__container">
            <div className="cards__box">
                {photos?.map((photoItem) => <PhotoCard key={userById?.id} id={userById?.id} photo={photoItem} />)}
            </div>
            <Pagination
                onPageChange={onPageChange}
                page={page}
                offset={offset}
                limit={limit}
                total={total}
            />
        </div>
    )
}

export default UserInfo