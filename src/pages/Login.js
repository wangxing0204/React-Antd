import React, {Component} from 'react';
import {Form, Input, Button, Checkbox, Card, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {setToken} from '../utils/auth';
import {loginApi} from '../service/auth';
import '../pages/login.css'

class Login extends Component {

    onFinish = (values) => {
        console.log('Success:', values);
        //调用后台接口
        loginApi({
            userName: values.username,
            password: values.password
        }).then(res => {
            console.log(res);
            if (res.success === true) {
                message.success(res.msg,1);
                setToken(res.token);
                this.props.history.push('/admin');
            } else {
                message.info(res.message,1);
            }
        }).catch(err => {
            console.log(err);
            message.error("用户不存在",1);
        });

    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Card title="ADSS" className="login-form">
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入账号!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="账号"/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="密码"/>
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked"  style={{ float:"left",width:"50%"}}>
                            <Checkbox>记住</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#/error" style={{ float:"right",width:"45%"}}>
                            忘记密码?
                        </a>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 5,
                        }}
                    >
                        <Button type="primary" shape="round" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Login;