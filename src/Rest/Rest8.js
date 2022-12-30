import release from '../Repo1/repo2-releases.json'
import ReactJson from 'react-json-view'
const Rest8 = () => {
    const r = JSON.stringify(release, null, 2);
    return <div>
        <ReactJson src={release}/>
    </div>
}

export default Rest8;