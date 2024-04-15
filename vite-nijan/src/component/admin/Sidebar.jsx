import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import NavItem from './NavItem'
import NavIcons from './NavIcons'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": "w-[300px] flex flex-col justify-start items-start py-3 gap-y-[6px] text-lg font-bold text-black"}>
        <div className="h-auto w-full flex flex-col justify-start items-start gap-y-[2px] text-lg font-bold text-black ">
            <NavItem url="/">
                <NavIcons title="Dashboard">
                    <BsGrid1X2Fill className='icon' />
                </NavIcons>
            </NavItem>
            <NavItem url="/product">
                <NavIcons title="Products">
                    <BsFillArchiveFill className='icon'/> 
                </NavIcons>
            </NavItem>
            <NavItem url="/category">
                <NavIcons title="Categories">
                    <BsFillGrid3X3GapFill className='icon'/>
                </NavIcons>
            </NavItem>
            <NavItem url="/customer">
                <NavIcons title="Customers">
                    <BsPeopleFill className='icon'/>
                </NavIcons>
            </NavItem>
            <NavItem url="/inventory">
                <NavIcons title="Inventory">
                    <BsListCheck className='icon'/>
                </NavIcons>
            </NavItem>
            <NavItem url="/reports">
                <NavIcons title="Reports">
                    <BsMenuButtonWideFill className='icon'/>
                </NavIcons>
            </NavItem>
            <NavItem url="/setting">
                <NavIcons title="Setting">
                    <BsFillGearFill className='icon'/>
                </NavIcons>
            </NavItem>
        </div>

        {/* <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul> */}
    </aside>
  )
}

export default Sidebar