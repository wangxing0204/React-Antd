import React, {Component} from 'react';
import {Button, Card, Table, Popconfirm, message} from 'antd';
import {listApi} from '../../../service/products';

const columns = [{
    title: '序号',
    key: 'id',
    width: 80,
    align: 'center',
    render: (txt, record, index) => index + 1
}, {
    title: '名字',
    dataIndex: 'name'
}, {
    title: '价格',
    dataIndex: 'price'
}, {
    title: '操作',
    render: (txt, record, index) => {
        return (
            <div>
                <Button type="primary" size="small">修改</Button>
                <Popconfirm
                    title="确定删除此项?"
                    onConfirm={() => {
                        message.success('用户确认删除', 1)
                    }}
                    onCancel={() => {
                        message.error('用户取消删除', 1)
                    }}
                    okText="确认"
                    cancelText="取消"
                    //此处调用api接口进行相关操作
                >
                    <Button style={{margin: "0 1rem"}} type="danger" size="small">删除</Button>
                </Popconfirm>
            </div>)
    }
}]

let dataSource = [];

listApi(4).then(res => {
    if (res.success === true) {
        dataSource = res.result;
        message.success(res.msg, 1);
    } else {
        message.info(res.message, 1);
    }
}).catch(err => {
    console.log(err);
    message.error("查询失败!", 1);
});

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                title="商品列表"
                extra={
                    <Button type="primary" size="small" onClick={() => this.props.history.push('/admin/products/edit')}>
                        新增
                    </Button>
                }>
                <Table rowKey="id" columns={columns} bordered dataSource={dataSource}/>
            </Card>
        );
    }
}

export default List;