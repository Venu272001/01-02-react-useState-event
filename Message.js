import { useState } from 'react';

export const Message = () => {
    const [Message, setMessage] = useState('Welcome Visitor')
    return (
        <div>
        <h1> { Message }</h1>
        <button onClick={() => setMessage('Thankyou for subscribing!')}>Subsribe</button>
        </div>
    );
}