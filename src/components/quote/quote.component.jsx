import React from 'react';
import { QuoteBox } from '../quote-box/quote-box.component'


export class Quote extends React.Component{
    componentDidMount() {
        this.props.handleChange()
    }

    render() {
        return(
            (this.props.loaded ? 
            <QuoteBox 
                {...this.props} 
                color={this.props.color} 
                handleClick={this.props.handleClick}/> : 
            null)
        )
    }
}