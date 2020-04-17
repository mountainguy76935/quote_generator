import React from 'react';
import './quote-button.styles.css'

export const QuoteButton = (props) => {
    const [active, setActive] = React.useState(false)

    return(
        <div 
            className={!active ? 'quote-button' : 'quote-button active'} 
            onClick={props.handleClick} 
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            style={{
                backgroundColor: props.color
            }}>
                <div className="button_title">New Quote</div>
        </div>
    )
}