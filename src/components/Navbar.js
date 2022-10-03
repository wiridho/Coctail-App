import React from 'react'
import { Layout, Menu } from 'antd';
import '../App.css'
import "./styling/Navbar.css"
const { Header } = Layout;

function Navbar() {
    return (

        <Header className='header'>
            <div className="container">
                <div className="logo">
                    <h1>The Cocktail</h1>
                </div>
                <div style={{
                    width: "30%",
                    zIndex: 2,
                }}>
                    <Menu
                        className='menu' mode='horizontal' theme='dark'>
                        <Menu.Item key='home'> Home </Menu.Item>
                        <Menu.Item key='item2'> Cocktail </Menu.Item>
                        <Menu.Item key='item2'> Ordinary drink </Menu.Item>
                        <Menu.Item key='item3'> Beer </Menu.Item>
                    </Menu>
                </div>
            </div>
        </Header>
    )

}

export default Navbar;
