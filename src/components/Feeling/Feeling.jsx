import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Feeling() {
    const [feelingInput, setFeelingInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'FEELINGNUM_STORE',
            payload: feelingInput
        });
        history.push('/understanding');
    }

    return <>
        <h2>How are you feeling today?</h2>
        <label htmlFor="feeling-input">Feeling?</label>
        <input
            id="feeling-input"
            type="number"
            min="1"
            max="5"
            data-testid="input" 
            value={feelingInput}
            onChange={event=>setFeelingInput(event.target.value)}
        />
        <button data-testid="next" onClick={handleClick}>Next</button>
    </>;
}

export default Feeling;