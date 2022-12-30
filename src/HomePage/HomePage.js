import { Button, Menu } from 'antd';
import { AntDesignOutlined, GithubOutlined, FundOutlined } from '@ant-design/icons';
import styles from './HomePage.module.css'
import { useState } from 'react';
import Repo1 from '../Repo1/Repo1';
import Repo2 from '../Repo1/Repo2';
import Repo3 from '../Repo1/Repo3';
const HomePage = () => {

    const repos = [
        {
            label: 'antd-admin',
            key: 'repo1',
            icon: <AntDesignOutlined />

        },
        {
            label: 'arco-design',
            key: 'repo2',
            icon: <FundOutlined />

        },
        {
            label: 'HowToCook',
            key: 'repo3',
            icon: <GithubOutlined />

        },
    ]

    const repoHandler = (event) => {
        setCurrentRepo(event.key);

    }

    const [currentRepo, setCurrentRepo] = useState('repo1');


    return <>
        <div className={styles.navBox}>
            <div className={styles.topic1}><GithubOutlined/>&nbsp;&nbsp;&nbsp;Java2 repos survey</div>
            <Menu items={repos} mode='horizontal' selectedKeys={currentRepo} onClick={repoHandler}/>
        </div>

        {currentRepo === 'repo1'? <Repo1/> : currentRepo === 'repo2'? <Repo2/> : <Repo3/>}

        



    </>

}

export default HomePage;