import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchPersonsById } from "../../redux/slice/personsSlice"

export const useGetUserById = ({ id }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPersonsById(id))
    }, [])
    const { userStatus, userError, userById } = useSelector((state) => state.allPersons)
    const data = useSelector((state) => state.allPersons)

    return { userStatus, userError, userById }
}