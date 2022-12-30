import CommitBar from '../Charts/CommitBar';
import CommitScatter from '../Charts/CommitScatter';
import styles from './Repo.module.css'
import dev from './repo1-developers.json'
import dateData from './repo1-devDate.json'
import CommitPie from '../Charts/CommitPie';
import cTime from './repo1-cTime.json';
import weekData from './repo1-week.json'
import closeIssue from './repo1-closeIssue.json'
import totalIssue from './repo1-totalIssue.json'
import IssueBar from '../Charts/IssueBar';
import IssuePie from '../Charts/IssuePie';
import ReleaseLine from '../Charts/ReleaseLine';
import releaseData from './repo1-releases.json'



const Repo1 = () => {

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

export default Repo1;