import React, {Component} from 'react';
import {Form, Card, Input, Button, message} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import {createApi} from '../../../service/products';

class Edit extends Component {


    // priceValidator = (rule, value, callback) => {
    //     if (value * 1 > 100) {
    //         callback("价格不能大于100");
    //     } else {
    //         callback();
    //     }
    // }

    onFinish = (values) => {
        console.log('Success:', values);
        //此处调用aoi接口
        createApi({
            name: values.name,
            price: values.price
        }).then(res => {
            console.log(res);
            if (res.success === true) {
                message.success(res.msg,1);
                this.props.history.push('/admin');
            } else {
                message.info(res.message,1);
            }
        }).catch(err => {
            console.log(err);
            message.error("新增失败!",1);
        });
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo.errorFields.map(error => {
            return error.errors
        }));
    };

    render() {
        return (
            <Card title="商品编辑" extra={<CloseOutlined onClick={() => this.props.history.push('/admin/products')}/>}>
                <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Form.Item label="名字" name="name"
                               rules={[{required: true, message: '请输入商品名字!'}]}>
                        <Input placeholder="请输入商品名字"/>
                    </Form.Item>
                    <Form.Item label="价格" name="price" rules={[{required: true, message: '请输入商品价格!'}, {validator: this.priceValidator}]}>
                        <Input placeholder="请输入商品价格"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Edit;