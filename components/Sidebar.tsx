import DocumentMagnifyingGlassIcon from '@heroicons/react/24/solid/DocumentMagnifyingGlassIcon'
import React from 'react'

function Sidebar() {
  return (
    <div className='p-2 md:p-10 py-6 overflow-y-auto border-b border-indigo-500/20'>
        <div className='flex flex-col items-center justify-center mb-10'>
        <DocumentMagnifyingGlassIcon className='h-16 w-16 text-indigo-600'/>

        <h1 className='hidden md:inline text-center text-3xl mt-2 mb-2 font-bold'>Web Scraper </h1>
        <h2 className='hidden md:inline text-center text-xs mt-2'>Scraping the Unscrapable</h2>
        </div>

        <ul>
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
        </ul>
    </div>
  )
}

export default Sidebar