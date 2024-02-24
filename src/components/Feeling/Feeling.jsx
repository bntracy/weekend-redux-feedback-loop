import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Feeling() {
    const [feelingInput, setFeelingInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'FEELINGNUM_STORE',
            payload: feelingInput
        });
        history.push('/understanding');
    }

    return <>
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleClick}>
        <label htmlFor="feeling-input">Feeling?</label>
            <input
                id="feeling-input"
                type="number"
                min="1"
                max="5"
                data-testid="input" 
                value={feelingInput}
                onChange={event=>setFeelingInput(event.target.value)}
                required
            />
            <button data-testid="next" type="submit">Next</button>
        </form>
    </>;
}

export default Feeling;