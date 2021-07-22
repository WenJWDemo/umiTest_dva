import { history } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <button onClick={() => history.push('/p1')}>P1</button>
      &nbsp;
      <button onClick={() => history.push('/p2')}>P2</button>
    </div>
  );
}
