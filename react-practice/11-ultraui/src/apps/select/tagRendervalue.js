
import React from 'react'
import { Select , TagItem} from '@huayun/ultraui'

const {Option, OptGroup} = Select

export default class TagRenderValue extends React.Component {
    constructor() {
        super()
        this.state = {
            tagitems: [
                {
                    title: '选项1',
                    value: 'primary'
                },
                {
                    title: '选项2',
                    value: 'warning'
                },
                {
                    title: '选项3',
                    value: 'danger'
                },
                {
                    title: '选项4',
                    value: 'success'
                },
                {
                    title: '选项5',
                    value: 'default'
                }
            ],
            selected:[],
        }
    }
    
    componentDidMount(){
        this.setState({
            selected:['primary', 'success'],
        })
    }

    handleChange (value,option) {
        // 当value 为[] 表示全部删除
        console.log("handleChange:",value,option)
        // if (!value.length){
        //     this.setState({
        //         selected:[],
        //     })
        // }
        this.setState({
            selected:value,
        })
        
    }

    tagRender (tagProps) {
        const { label, value, closable, onClose } = tagProps
        return (
            <TagItem name={label} type={value} icon={closable ? 'error' : ''} onClick={onClose} />
        )
    }
    handleTagSelect(value,option){
        console.log("handleTagSelect",value,option)
        const {selected} = this.state
        if (!(selected.indexOf(value) > -1)){
            selected.push(value)
            this.setState({
                selected:selected,
            })
        }        
    }
    handleTagDeselect(value, option){
        console.log("handleTagDeselect",value,option)
        const {selected} = this.state
        console.log(selected)
        let idx = selected.indexOf(value)
        if ( idx > -1 ){
            selected.splice(idx,1)
        }
        this.setState({
            selected:selected,
        })
    }
    render() {
        const {tagitems,selected} = this.state
        return (
            <Select 
                value = {selected}
                placeholder="请选择..." 
                onChange={this.handleChange.bind(this)} 
                // onSelect={this.handleTagSelect.bind(this)}
                // onDeselect={this.handleTagDeselect.bind(this)}
                optionLabelProp="title"
                // getPopupContainer={(node) => document.querySelector(".content-wrapper")}
                allowClear
                mode="multiple"
                tagRender={this.tagRender}
            >
                {
                    tagitems.map(option => (
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
        )
    }
}