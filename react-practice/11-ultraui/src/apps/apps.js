import React from 'react'

import UltraButton from './button/button';
import TagRender from './select/tagRender';
import TagRenderValue from './select/tagRendervalue'
import CheckBox from './checkbox/checkbox'
import Hello from './hello/hello';
import MultiSelect from './select/select'
export default class Apps extends React.Component{
    render(){
        return(
            <div>
                <UltraButton/>
                <Hello/>
                <TagRender/>
                <div>
                    <TagRenderValue/>
                </div>
                <div>
                    <CheckBox/>
                </div>
                <div>
                    <MultiSelect/>
                </div>
            </div>
        )
    }
}