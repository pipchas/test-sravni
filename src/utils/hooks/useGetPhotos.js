import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos } from "../../services/photos/fetchPhotosThunk"

export const useGetPhotos = ({ limit, offset }) => {
    const dispatch = useDispatch()
    const { status, error, data } = useSelector((state) => state.allPhotos)

    useEffect(() => {
        dispatch(fetchPhotos({ limit, offset }))
    }, [offset])    

    return { status, error, data }
}