import { CheckboxGroup } from '@huayun/ultraui'
import React from 'react'

export default class CheckBox extends React.Component {
    constructor() {
        super()
        this.state = {
            checkItem1: [{ title: '选项 1', value: '1' }, { title: '选项 2', value: '2' }, { title: '选项 3', value: '3' }, { title: '选项 4', value: '4' }, { title: '我是不能选的', value: '5', disabled: true }],
            defValue:[]
        }
    }
    handleChange(key,value){
        console.log('key:', key, value)
        //  value.forEach((item, idx) => {
        //     value[idx] = parseInt(item)
        // })
        this.setState({
            defValue: value
        })
    }
    render() {
        const { checkItem1, defValue } = this.state 
        console.log('devval:',defValue)
        return (
            <CheckboxGroup
                className="m-b"
                items={checkItem1}
                defaultValue={defValue}
                name="checkbox_group_1"
                inline
                onChange={this.handleChange.bind(this, 'checkbox_group_1')}
            />
        )
    }
}
