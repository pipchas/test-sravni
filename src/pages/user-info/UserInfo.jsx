import { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetPhotos } from "../../utils/hooks/use-get-photos"
import { useGetUserById } from "../../utils/hooks/use-get-users-by-id"
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

    const onPageChange = (newPage) => {
        const newOffset = newPage * limit - (limit - 1);
        setOffset(newOffset);
        setPage(newPage);
    };

    const { status: userStatus, error: userError, data: userData } = useGetUserById({ id: personsId })
    const { status: photoStatus, error: photoError, data: photoData } = useGetPhotos({ limit, offset })

    console.log(userData?.length)

    if (userData?.length === 0) {
        return <Error error='Пользователя по такому ID не существует' />
    }

    if (photoStatus === 'loading' || userStatus === 'loading') {
        return <Loading />
    }

    if (photoStatus === 'error' || userStatus === 'error') {
        return <Error error={photoError}/>
    }

    return (
        <div className="custom__container">
            <div className="cards__box__photos">
                {photoData?.map((photoItem) => <PhotoCard key={photoItem.id} id={userData?.id} photo={photoItem} />)}
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