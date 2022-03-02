import React, {Component} from 'react';
import {Layout, Menu,Dropdown,Avatar,message } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined,UserOutlined} from '@ant-design/icons';
import "../../App.css";
import {adminRoutes} from "../../routes";
import {clearToken} from "../../utils/auth";
import logo from './logo.jpg'
import {withRouter} from "react-router-dom";

const {Header, Sider, Content} = Layout;
const routes = adminRoutes.filter(route => route.isShow)

class Index extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    popMenu= (<Menu onClick={(p)=>{
        if(p.key=='logOut'){
            clearToken();
            this.props.history.push('/login');
        }else{
            message.info(p.key);
        }
    }}>
        <Menu.Item key="noti">通知中心</Menu.Item>
        <Menu.Item key="setting">设置</Menu.Item>
        <Menu.Item key="logOut">退出</Menu.Item>
    </Menu>);

    render() {
        return (
            <Layout>
                <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {
                            routes.map(route => {
                                return (
                                    <Menu.Item key={route.path} icon={route.icon}
                                               onClick={p => this.props.history.push(p.key)}>
                                        {route.title}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}} className="header">
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <Dropdown overlay={this.popMenu} >
                            <div>
                                <Avatar>U</Avatar>
                                <span style={{margin:10}}>超级管理员</span>
                                <DownOutlined style={{marginRight:15}} />
                            </div>
                        </Dropdown>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Index);