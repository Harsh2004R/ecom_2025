import React from 'react'
import { shallowEqual, useSelector } from "react-redux"
import { Navigate, useLocation } from 'react-router-dom';
import { Center, Spinner, Text } from '@chakra-ui/react';

function PrivateRoutes({ children }) {
    const location = useLocation();
    const { isAuth, isLoading } = useSelector((store) => {
        return {
            isAuth: store.authReducer.isAuth,
            isLoading: store.authReducer.isLoading
        }
    }, shallowEqual)
    if (isLoading) {
        return (
            <Center w="100%" h="100vh" >
                <Text>Loading..</Text> <Spinner size={"lg"} color="blue" />
            </Center>
        )
    }
    return isAuth ? children : <Navigate state={location.pathname} to="/auth" />;
}

export default PrivateRoutes
