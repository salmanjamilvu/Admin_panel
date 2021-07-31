import React from 'react'
import './login.css';
import { Avatar, Input, Button, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="avatar">
                    <Avatar size={64} icon={<UserOutlined />} />
                </div>
                <Form>
                    <Form.Item rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input placeholder="Username" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item rules={[{ required: true, message: 'Please input your password!' }]} >
                        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>Primary</Button>
                    </Form.Item>
                    <a className="login-form-forgot" href=""> Forgot password </a>
                </Form>
            </div>
        </div>
    )
}

export default Login
