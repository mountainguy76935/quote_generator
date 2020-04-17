import React from 'react';
import './quote-box.styles.css'
import { QuoteButton } from '../quote-button/quote-button.component'

export const QuoteBox = (props) => {

    return (
    <React.Fragment>
        <div className="quote" style={{color: props.color}}>
            <h2>"{props.quote}"</h2>
            <p>-{props.author}</p>
        </div>
            <QuoteButton 
            color={props.color} 
            handleClick={props.handleClick}
        />
    </React.Fragment>
    )
}