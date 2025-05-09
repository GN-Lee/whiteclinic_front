import React from 'react'

export const Header = () => {
  return (
      <div className="px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex items-center justify-between h-16 max-w-5xl mx-auto">
          <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src="/logo.jpg" alt="WHITECLINIC Logo" className="h-12 w-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent tracking-tight hover:tracking-wide transition-all duration-300">WHITECLINIC</h1>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">예약현황</button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">기사정보</button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">매출</button>
          </div>
        </div>
      </div>
  )
}
