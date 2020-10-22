import React from 'react';

class Props extends React.Component{
    
    render(){
        const {data} = this.props;
        return(
            <div>{data}</div>
        )
    }
};

export default Props;