import React from 'react';
import './quote-button.styles.css'

export const QuoteButton = (props) => {
    return(
        <div 
            className={!props.active ? 'quote-button' : 'quote-button active'} 
            onClick={props.handleClick} 
            onMouseEnter={props.handleHover}
            onMouseLeave={props.handleLeave}
            style={{
                backgroundColor: props.color
            }}>
                Get New Quote!
        </div>
    )
}