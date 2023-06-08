import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { fetchUsersById } from "../../services/users/fetchUsersThunk"

export const useGetUserById = ({ id }) => {
    const dispatch = useDispatch()
    const { status, error, data } = useSelector((state) => state.allUsers.user)

    useEffect(() => {
        dispatch(fetchUsersById(id))
    }, [])

    return { status, error, data }
}