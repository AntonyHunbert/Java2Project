import commit from '../Repo1/repo2-developers.json'
import ReactJson from 'react-json-view'
const Rest7 = () => {
    return <div>
        <ReactJson src={commit} displayDataTypes={false}/>
    </div>
}

export default Rest7;