import React from 'react';
import './quote-box.styles.css'
import { QuoteButton } from '../quote-button/quote-button.component';
import twitter from '../../images/twitter.png';

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
        <div 
            className='twitter'
            style={{
                backgroundColor: props.color
            }}
            >
            <a 
                href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(props.quote)}-${encodeURIComponent(props.author)}`} 
            >
                <img 
                src={twitter}
                height= '50px'
                width= '50px'
                alt='twitter share button'
                />
            </a>
        </div>
    </React.Fragment>
    )
}