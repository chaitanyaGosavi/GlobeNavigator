import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
  return (
    <nav className="w-full flex justify-center items-center px-2 sm:px-4">
      <ul className="flex flex-col sm:flex-row w-full sm:w-[80%] md:w-[60%] text-center text-[18px] sm:text-[20px] font-medium">
        <li className="p-2 bg-[#4e4e4e] flex-1 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none AppnavLi border-b-4 sm:border-b-0 sm:border-r-4 border-[#363636]">
          <NavLink to="Cities">Cities</NavLink>
        </li>
        <li className="p-2 bg-[#4e4e4e] flex-1 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none AppnavLi">
          <NavLink to="Countries">Countries</NavLink>
        </li>
      </ul>
    </nav>

  )
}

export default AppNav
