import CommitBar from '../Charts/CommitBar';
import CommitScatter from '../Charts/CommitScatter';
import styles from './Repo.module.css'
import dev from './repo2-developers.json'
import dateData from './repo2-devDate.json'
import CommitPie from '../Charts/CommitPie';
import cTime from './repo2-cTime.json';
import weekData from './repo2-week.json'
import closeIssue from './repo2-closeIssue.json'
import totalIssue from './repo2-totalIssue.json'
import IssueBar from '../Charts/IssueBar';
import IssuePie from '../Charts/IssuePie';
import ReleaseLine from '../Charts/ReleaseLine';
import releaseData from './repo2-releases.json'



const Repo2 = () => {

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

export default Repo2;