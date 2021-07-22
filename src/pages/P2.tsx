import Router from './Router';
import styles from './index.less';

export default function IndexPage() {
  console.log('p2 render');
  return (
    <div style={{ padding: 20 }}>
      <Router />
      <h1 className={styles.title}>Page index2</h1>
    </div>
  );
}
