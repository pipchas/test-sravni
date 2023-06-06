import { useDispatch, useSelector } from "react-redux"
import { fetchPersons } from "../../redux/slice/personsSlice"
import { useEffect } from "react"

export const useGetUsers = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPersons())
    }, [])
    const { status, error, allPersons: users } = useSelector((state) => state.allPersons)

    return { status, error, users }
}