import { Route, Routes } from 'react-router-dom';
import Navigator from '@/AppComponents/Navigator';
import Auth from '@/Pages/Auth'
import Landing from '@/Pages/Landing'
import PageNotExist from '@/Pages/PageNotExist'
import React from 'react'
import PasswordManager from '@/Pages/PasswordManager';
function AllRoutes() {
    return (
        <>
            <Navigator />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='*' element={<PageNotExist />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/manage-password' element={<PasswordManager />} />
                {/* <Route path='/' element={<Landing />} /> */}
                {/* <Route path='/' element={<Landing />} /> */}
                {/* <Route path='/' element={<Landing />} /> */}
                {/* <Route path='/' element={<Landing />} /> */}
                {/* <Route path='/' element={<Landing />} /> */}
                {/* <Route path='/' element={<Landing />} /> */}

            </Routes >
        </>
    )
}

export default AllRoutes
