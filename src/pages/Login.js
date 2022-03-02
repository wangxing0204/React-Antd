import React, {Component} from 'react';
import {Form, Input, Button, Checkbox, Card,message} from 'antd';
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
            if(res.code==='success'){
                message.success("登陆成功");
                setToken(res.token);
                this.props.history.push('/admin');
            }else{
                message.info(res.message);
            }
        }).catch(err => {
            console.log(err);
            message.error("用户不存在");
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
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
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
                        <Input placeholder="账号"/>
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
                        <Input.Password placeholder="密码"/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>记住</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Login;