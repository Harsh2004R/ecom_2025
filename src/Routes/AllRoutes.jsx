import Auth from '@/Pages/Auth'
import Landing from '@/Pages/Landing'
import PageNotExist from '@/Pages/PageNotExist'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='*' element={<PageNotExist />} />
            <Route path='/auth' element={<Auth />} />
            {/* <Route path='/' element={<Landing />} /> */}
            {/* <Route path='/' element={<Landing />} /> */}
            {/* <Route path='/' element={<Landing />} /> */}
            {/* <Route path='/' element={<Landing />} /> */}
            {/* <Route path='/' element={<Landing />} /> */}
            {/* <Route path='/' element={<Landing />} /> */}
            {/* <Route path='/' element={<Landing />} /> */}

        </Routes >
    )
}

export default AllRoutes
