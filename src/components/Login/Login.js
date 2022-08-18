import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import React from 'react';
import socket from '../../models/socket';
import './login.css'

const App = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
         socket.emit('login',values,(res) => {
            if (res.response ==='1'){
                console.log('登录成功');
                navigate('/chat', {
                    replace: true,
                    state:{
                        username:res.username
                    }
                })
            }
            if (res.response ==='2'){
               alert('不存在该用户名！请重新填写');
            }
            if (res.response === '3'){
                alert('密码错误')
            }
         })
        
    };
    return (
        <div className='login'>
            
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <h1>Login</h1>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/forgot">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
              &nbsp;  Or  <a href="/register">register now!</a>
            </Form.Item>
        </Form>
        </div>
    );
};

export default App;