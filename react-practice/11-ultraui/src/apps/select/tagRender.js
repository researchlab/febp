
import React from 'react'
import { Select , TagItem} from '@huayun/ultraui'

const {Option, OptGroup} = Select

export default class TagRender extends React.Component {
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
    
    handleChange (value,option) {
        // 当value 为[] 表示全部删除
        console.log(value,option)
        if (!value.length){
            this.setState({
                selected:[],
            })
        }
        
    }

    componentDidMount(){
        this.setState({
            selected:['primary', 'success'],
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
        option.key = "";
        
    }
    handleTagDeselect(value, option){
        console.log("handleTagDeselect",value,option)
        const {selected} = this.state
        let tagitems = [
            {
                title: '选项1',
                value: 'primary',
                children:'',
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
                value: 'success',
                children:'',
                disabled:true,

            },
            {
                title: '选项5',
                value: 'default'
            }
        ]
        console.log(selected)
        let idx = selected.indexOf(value)
        if ( idx > -1 ){
            selected.splice(idx,1)
        }
        console.log(selected)

        this.setState({
            selected:selected,
            tagitems:tagitems,
        })
    }
    render() {
        const {tagitems,selected} = this.state
        return (
            <Select 
                // defaultValue={['primary', 'success']}
                defaultValue ={selected}
                // value = {selected}
                placeholder="请选择..." 
                onChange={this.handleChange.bind(this)} 
                // onSelect={this.handleTagSelect.bind(this)}
                // onDeselect={this.handleTagDeselect.bind(this)}
                optionLabelProp="title"
                // getPopupContainer={(node) => document.querySelector(".content-wrapper")}
                allowClear
                // showArrow
                removeIcon
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