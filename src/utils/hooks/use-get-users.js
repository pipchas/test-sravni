import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../redux/slice/personsSlice"
import { useEffect } from "react"

export const useGetUsers = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    const { status, error, data } = useSelector((state) => state.allUsers.allUsers)

    return { status, error, data }
}