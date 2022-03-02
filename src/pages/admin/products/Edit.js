import React, {Component} from 'react';
import {Form, Card, Input, Button} from 'antd';


class Edit extends Component {


    priceValidator = (rule, value, callback) => {
        if (value * 1 > 100) {
            callback("价格不能大于100");
        } else {
            callback();
        }
    }

    onFinish = (values) => {
        console.log('Success:', values);
        //此处调用aoi接口
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo.errorFields.map(error => {
            return error.errors
        }));
    };

    render() {
        return (
            <Card title="商品编辑">
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