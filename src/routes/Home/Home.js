import React from 'react';

import styles from './Home.less';

// 加上页面的logo以及使用说明
class Home extends React.Component{
  render(){
    return (
      <div className={styles.main}>
        <div className={styles.title}>RED Design Demo</div>
        <div className={styles.desc}>使用说明</div>
        <div>balabala</div>

      </div>
    );
  }
}

export default Home;
