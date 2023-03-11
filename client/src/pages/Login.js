import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth, selectIsAuth } from '../redux/slices/auth'

export const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();


    const onSubmit = async (values) =>{
        const data = await dispatch(fetchAuth(values));
        if(!data.payload){
            return alert('Failed to log in');
        }

        dispatch(fetchAuth(values))
    }
    return (
        <div>Login</div>
    )
}
