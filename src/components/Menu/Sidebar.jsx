import React from 'react'
import { Link } from "react-router-dom";
import './sidebar.css';
import { Menu } from 'antd';
import {
    ShopOutlined,
    ShoppingCartOutlined,
    ContainerOutlined,
    ScheduleOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
const Sidebar = ({collapsed}) => {

    return (
        <React.Fragment>
        <Menu
        className="sidebar"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
            <Link to="/">View all order</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ContainerOutlined />} >
            <Link to="/restaurant">Restuarat</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ScheduleOutlined />} >
            <Link to="/categories">/categories</Link>
          </Menu.Item>
          <SubMenu key="sub3" icon={<ShopOutlined />} title="Product management">
            <Menu.Item key="13">Craete a product</Menu.Item>
            <Menu.Item key="14">Update product</Menu.Item>
            <Menu.Item key="15">Delete product</Menu.Item>
            <Menu.Item key="16">View all product</Menu.Item>
          </SubMenu>
        </Menu>
      </React.Fragment>
    )
}

export default Sidebar
