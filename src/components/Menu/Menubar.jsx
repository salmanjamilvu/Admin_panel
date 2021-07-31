import React, {useState} from 'react'
import './sidebar.css'
import { Menu, Badge, Avatar, Dropdown } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    BellFilled,
    UserOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

const Menubar = ({setCollapsed, collapsed}) => {
    const toggleCollapsed = () =>{
        setCollapsed(collapsed? false: true)
    }
    const menu = (
        <Menu>
          <Menu.Item>
            <span>
              <UserOutlined /> Profile 
            </span>
          </Menu.Item>
          <Menu.Item>
            <span>
            <LogoutOutlined /> Logout
            </span>
          </Menu.Item>
        </Menu>
    ) 
    return (
        <div className="menu">
            <span className="btn" onClick={toggleCollapsed}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </span>

            <div className="rigth-menu">
            <Badge count={1} >
                <BellFilled className="menu-icon" />
            </Badge>
            <span className="menu-icon" >
                <FullscreenOutlined />
            </span>
            <Dropdown overlay={menu} arrow>
                <Avatar className="menu-icon">USER</Avatar>
            </Dropdown>
            </div>
        </div>
    )
}

export default Menubar
