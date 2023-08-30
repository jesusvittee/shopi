import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { contextCards } from '../../context'
import { useContext } from 'react'

const Navbar = () => {
    const context = useContext(contextCards)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-2 px-2 lg:py-5
    lg:px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink 
          to='/shoppi'
          onClick={() => context.setSearchByCategory()}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => context.setSearchByCategory()}
            >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory(`men's clothing`)}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelery'
            onClick={() => context.setSearchByCategory('jewelery')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          jesusvitte@example.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li className='flex'>
          <ShoppingBagIcon className='h-5 w-5'/>
          <div> {context.count}</div>
        </li>
      </ul>
    </nav>
  )
}

export {Navbar}