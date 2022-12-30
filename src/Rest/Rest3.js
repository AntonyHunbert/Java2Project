import commit from '../Repo1/repo3-developers.json'
import ReactJson from 'react-json-view'
const Rest3 = () => {
    return <div>
        <ReactJson src={commit} displayDataTypes={false}/>
    </div>
}

export default Rest3;