import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchPhotos } from "../../redux/slice/photosSlice"

export const useGetPhotos = ({ limit, offset }) => {
    const dispatch = useDispatch()
    console.log(limit, offset)
    useEffect(() => {
        dispatch(fetchPhotos({ limit, offset }))
    }, [offset])
    const { status, error, data } = useSelector((state) => state.allPhotos)
    

    return { status, error, data }
}