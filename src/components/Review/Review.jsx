import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {
    const history = useHistory();
    const feelingNum = useSelector(store => store.feelingNum);
    const understandingNum = useSelector(store => store.understandingNum);
    const supportNum = useSelector(store => store.supportNum);
    const commentsText = useSelector(store => store.commentsText);

    const handleClick = () => {
        axios.post('/api/feedback', {
            feeling: feelingNum, 
            understanding: understandingNum,
            support: supportNum,
            comments: commentsText}).then(response => {
            history.push('/thank-you');
        }).catch(err => {
            console.log('Error sending data to database', err);
        });
    }

    return <>
        <h1>Review Your Feedback</h1>
        <p>Feelings: {feelingNum}</p>
        <p>Understanding: {understandingNum}</p>
        <p>Support: {supportNum}</p>
        <p>Comments: {commentsText}</p>
        <button data-testid="next" onClick={handleClick}>Submit</button>
    </>;
}

export default Review;