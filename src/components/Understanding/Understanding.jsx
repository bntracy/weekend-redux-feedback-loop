import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Understanding() {
    const [understandingInput, setUnderstandingInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UNDERSTANDINGNUM_STORE',
            payload: understandingInput
        });
        history.push("/support");
    }

    return <>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={handleClick}>
            <label htmlFor="understanding-input">Understanding?</label>
            <input 
                id="understanding-input"
                type="number"
                min="1"
                max="5"
                data-testid="input"
                value={understandingInput}
                onChange={event=>setUnderstandingInput(event.target.value)}
                required
            />
            <button data-testid="next" type="submit">Next</button>
        </form>
    </>;
}

export default Understanding;