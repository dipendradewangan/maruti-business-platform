import React from 'react'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-100">
            <header className='bg-blue-600 px-6 py-4 text-white'>
                <h1 className='text-xl font-bold'>
                    Enterprise Business Platform
                </h1>
            </header>

            <main className='p-6'>
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout
