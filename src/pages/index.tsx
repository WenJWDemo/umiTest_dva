import { IndexModelState, ConnectRC, Loading, connect } from 'umi';
import Router from './Router';
import styles from './index.less';

interface PageProps {
  app: IndexModelState;
}

const IndexPage: ConnectRC<PageProps> = ({ app, dispatch }) => {
  // const IndexPage = () => {
  console.log('p1 render');
  console.log(app);

  const changeData = () => {
    dispatch({
      type: 'app/fetchData',
      payload: {
        age: 20,
        like: '2',
      },
    });
    dispatch({
      type: 'app/fetchData1',
      payload: {
        age: 240,
        like: '2333',
      },
    });
    dispatch({
      type: 'app/fetchData2',
      payload: {
        age: 200,
        like: '2sdsds333',
      },
    });
  };
  return (
    <div style={{ padding: 20 }}>
      <Router />
      <h1 className={styles.title}>Page index</h1>
      <button onClick={changeData}>change model</button>

      <p>name: {app?.name}</p>
      <p>age: {app?.info?.age}</p>
      <p>like: {app?.info?.like}</p>
    </div>
  );
};

// export default IndexPage;

export default connect(({ app }: { app: IndexModelState }) => ({
  app,
}))(IndexPage);
