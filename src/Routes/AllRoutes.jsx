import Landing from '@/Pages/Landing'
import PageNotExist from '@/Pages/PageNotExist'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='*' element={<PageNotExist />} />

        </Routes >
    )
}

export default AllRoutes
