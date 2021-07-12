import { React, useState } from 'react';

export default function Button() {

    const [ num, setNum ] = useState(0);

    function handleClick() {
        setNum(num + 1);
    }

    return (
        <>
            <h1>{num}</h1>
            <button onClich={handleClick}>Click me!</button>
        </>
    )
}
