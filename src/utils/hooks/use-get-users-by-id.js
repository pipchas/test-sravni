import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchUsersById } from "../../redux/slice/personsSlice"

export const useGetUserById = ({ id }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersById(id))
    }, [])
    const { status, error, data } = useSelector((state) => state.allUsers.user)

    return { status, error, data }
}