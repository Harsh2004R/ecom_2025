import React from 'react'
import PrivateRoutes from './PrivateRoutes';
import { Route, Routes } from 'react-router-dom';
import Navigator from '@/AppComponents/Navigator';
import Auth from '@/Pages/Auth'
import Landing from '@/Pages/Landing'
import PageNotExist from '@/Pages/PageNotExist'
import Private from '@/Pages/Private';
import Product from '@/Pages/Product';
import Dashboard from '../Admin/Dashboard';
function AllRoutes() {
    return (
        <>
            <Navigator />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='*' element={<PageNotExist />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/private' element={<PrivateRoutes>
                    <Private />
                </PrivateRoutes>} />
                <Route path='/product' element={<PrivateRoutes>
                    <Product />
                </PrivateRoutes>} />
                <Route path='/dashboard' element={<Dashboard />} />
                {/* <Route path='/' element={<Landing />} /> */}
                {/* <Route path='/' element={<Landing />} /> */}
                {/* <Route path='/' element={<Landing />} /> */}

            </Routes >
        </>
    )
}

export default AllRoutes
