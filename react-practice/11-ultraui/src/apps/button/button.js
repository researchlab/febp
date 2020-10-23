import React from 'react';
import {Button, ButtonGroup, ButtonList,Static } from '@huayun/ultraui';
import './button.less';

class UltraButton extends React.Component{
    render(){
        return (<div className="wrapper">
            <Static value="默认" style={{backgroundColor:'red'}}/>
            <ButtonList className="m-b">
            <Button type="primary" className="test" name="主按钮" />
            <Button type="default" name="次按钮" />
            <Button type="dashed" name="虚线按钮" />
            <Button type="primary" icon="add">创建</Button>
        </ButtonList>
        <ButtonList>
            <Button type="primary" name="信息按钮" />
            <Button type="success" name="成功按钮" />
            <Button type="warning" name="警告按钮" />
            <Button type="danger" name="危险按钮" />
            <Button type="text" name="text按钮" />
        </ButtonList>
        </div>)
    }
}

export default UltraButton;