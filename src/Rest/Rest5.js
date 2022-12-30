import commit from '../Repo1/repo1-closeIssue.json'
import ReactJson from 'react-json-view'
const Rest5 = () => {
    return <div>
        <ReactJson src={commit}/>
    </div>
}

export default Rest5;