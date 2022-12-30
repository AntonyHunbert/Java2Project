import CommitBar from '../Charts/CommitBar';
import CommitScatter from '../Charts/CommitScatter';
import styles from './Repo.module.css'
import dev from './repo3-developers.json'
import dateData from './repo3-devDate.json'
import CommitPie from '../Charts/CommitPie';
import cTime from './repo3-cTime.json';
import weekData from './repo3-week.json'
import closeIssue from './repo3-closeIssue.json'
import totalIssue from './repo3-totalIssue.json'
import IssueBar from '../Charts/IssueBar';
import IssuePie from '../Charts/IssuePie';
import ReleaseLine from '../Charts/ReleaseLine';
import releaseData from './repo3-releases.json'



const Repo3 = () => {

    return <div className={styles.repoBox}>
        <CommitBar devData={dev} />
        <div className={styles.commitBox1}>
            <CommitScatter dateData={dateData} />
            <CommitPie cTime={cTime} weekData={weekData} />
        </div>
        <div className={styles.issueBox1}>
            <IssueBar closeIssue={closeIssue} />
            <IssuePie totalIssue={totalIssue} />
        </div>


        <ReleaseLine releaseData={releaseData} />
    </div>

}

export default Repo3;