import { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetPhotos } from "../../utils/hooks/useGetPhotos"
import { useGetUserById } from "../../utils/hooks/useGetUserById"
import Pagination from "../../components/pagination/Pagination"
import PhotoCard from "../../components/cards/PhotoCard"
import Loading from "../../components/appState/Loading"
import Error from "../../components/appState/Error"

import s from "../../styles/mainStyle/main.module.scss"

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
    const { data: photoData } = useGetPhotos({ limit, offset })

    if (userStatus === 'loading') {
        return <Loading />
    }

    if (userStatus !== 'loading' && !userData?.id) {
        return <Error error='Пользоваателя с данным ID нет ;(' />
    }

    if (userStatus === 'rejected') {
        return <Error error={userError} />
    }

    return (
        <div className={s.container}>
            <div>Name: {userData?.name}</div>
            <div className={s.cards__box__photos}>
                {photoData?.length
                    ? photoData?.map((photoItem) => <PhotoCard key={photoItem.id} id={userData?.id} photo={photoItem}/>)
                    : <Error error='Фото отсутствует' />
                }
            </div>
            <div className={s.pagination}>
                <Pagination
                    onPageChange={onPageChange}
                    page={page}
                    offset={offset}
                    limit={limit}
                    total={total}
                />
            </div>
        </div>
    )
}

export default UserInfo