import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../services/users/fetchUsersThunk"


export const useGetUsers = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    const { status, error, data } = useSelector((state) => state.allUsers.allUsers)

    return { status, error, data }
}