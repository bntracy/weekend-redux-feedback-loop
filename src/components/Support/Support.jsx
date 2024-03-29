import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Support() {
    const [supportInput, setSupportInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SUPPORTNUM_STORE',
            payload: supportInput
        });
        history.push('/comments');
    }

    return <>
        <h2>How well are you being supported?</h2>
        <form onSubmit={handleClick}>
            <label htmlFor="support-input">Support?</label>
            <input 
                id="support-input"
                type="number"
                min="1"
                max="5"
                data-testid="input"
                value={supportInput}
                onChange={event=>setSupportInput(event.target.value)}
                required
            />
            <button data-testid="next" type="submit">Next</button>
        </form>
    </>;
}

export default Support;