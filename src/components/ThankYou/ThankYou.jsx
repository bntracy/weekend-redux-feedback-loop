import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ThankYou() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({type: 'FEELINGNUM_CLEAR'});
        dispatch({type: 'UNDERSTANDINGNUM_CLEAR'});
        dispatch({type: 'SUPPORTNUM_CLEAR'});
        dispatch({type: 'COMMENTSTEXT_CLEAR'});
        history.push('/');
    }

    return <>
        <h1>Feedback!</h1>
        <h2>Thank You!</h2>
        <button onClick={handleClick}>Leave New Feedback</button>
    </>;
}

export default ThankYou;