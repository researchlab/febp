import React from 'react'
import { Select } from '@huayun/ultraui'

const {Option} = Select

export default class MultiSelect extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [
                {
                    title: '选项1',
                    value: 'item1'
                },
                {
                    title: '选项2',
                    value: 'item2'
                },
                {
                    title: '选项3',
                    value: 'item3'
                },
                {
                    title: '选项4',
                    value: 'item4'
                },
                {
                    title: '选项5',
                    value: 'item5'
                },
                {
                    title: '选项6',
                    value: 'item6'
                },
                {
                    title: '选项7',
                    value: 'item7'
                },
                {
                    title: '选项8',
                    value: 'item8'
                },
                {
                    title: '不可选',
                    value: 'item9',
                    disabled: true
                }
            ]
        }
    }
    
    handleChange (value) {
        console.log(value)
    }

    render() {
        const {items} = this.state
        return (
            <>
                <Select 
                    placeholder="请选择..." 
                    optionLabelProp="title"
                    onChange={this.handleChange.bind(this)} 
                    // mode="multiple"
                    showSearch
                    showArrow
                >
                    {
                        items.map(option => (
                            <Option 
                                key={option.value}
                                value={option.value}
                                title={option.title}
                                disabled={option.disabled}
                            >
                                {option.title}
                            </Option>
                        ))
                    }
                </Select>
                
            </>
        )
    }
}
