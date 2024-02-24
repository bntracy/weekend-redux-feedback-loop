import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Comments() {
    const [commentsInput, setCommentsInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'COMMENTSTEXT_STORE',
            payload: commentsInput
        });
        history.push('/review');
    }

    return <>
        <h2>Any comments you want to leave?</h2>
        <label htmlFor="comments-input">Comments</label>
        <input 
            id="comments-input"
            type="text"
            data-testid="input"
            value={commentsInput}
            onChange={event=>setCommentsInput(event.target.value)}
        />
        <button data-testid="next" onClick={handleClick}>Next</button>
    </>;
}

export default Comments;