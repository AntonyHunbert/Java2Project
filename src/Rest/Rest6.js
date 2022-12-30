import commit from '../Repo1/repo1-developers.json'
import ReactJson from 'react-json-view'
const Rest6 = () => {
    return <div>
        <ReactJson src={commit} displayDataTypes={false}/>
    </div>
}

export default Rest6;