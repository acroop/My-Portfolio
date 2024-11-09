import React from 'react'
import { FloatingNav } from './ui/floating-navbar'
import { FaHome } from 'react-icons/fa'
import { navItems } from '@/data'

const Navbar = () => {
  return (
    <FloatingNav navItems={
        navItems
    }/>
  )
}

export default Navbar
