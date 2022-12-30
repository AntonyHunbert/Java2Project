import commit from '../Repo1/repo2-closeIssue.json'
import ReactJson from 'react-json-view'
const Rest2 = () => {
    return <div>
        <ReactJson src={commit}/>
    </div>
}

export default Rest2;