import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


// prevent from going to sign up 
const ProtectedRoute = ({children}) => {
const {user} = UserAuth()

    if (user) {
    return <Navigate to ='.Netflix' />
} else {
    return children;
}

}

export default ProtectedRoute
