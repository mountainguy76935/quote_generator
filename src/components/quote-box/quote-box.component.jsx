import React from 'react';
import './quote-box.styles.css'
import { QuoteButton } from '../quote-button/quote-button.component'

export const QuoteBox = (props) => {
    const [active, setActive] = React.useState(false)

    const handleHover = () => {
        setActive({
            active: true
        })
    }

    const handleLeave = () => {
        setActive({
            active: false
        })
    }

    return (
    <div className="quote" style={{color: props.color}}>
        <h2>"{props.quote}"</h2>
        <p>-{props.author}</p>
        <QuoteButton 
            active={active}
            color={props.color} 
            handleHover={handleHover}
            handleLeave={handleLeave}
            handleClick={props.handleClick}
        />
    </div>
    )
}