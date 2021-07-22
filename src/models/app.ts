import { Effect, Reducer } from 'umi';

const delay = (timeout: number, params: any) =>
  new Promise((resolve) => setTimeout(() => resolve(params), timeout));

export interface IndexModelState {
  name: string;
  info: {
    age: number;
    like: string;
  };
}

export interface IndexModelType {
  namespace: 'app';
  state: IndexModelState;
  effects: {
    fetchData: Effect;
    fetchData1: Effect;
    fetchData2: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
}

const ApiModel: IndexModelType = {
  namespace: 'app',
  state: {
    name: 'lw',
    info: {
      age: 10,
      like: '20 age',
    },
  },

  effects: {
    *fetchData({ payload }, { call, put }) {
      try {
        console.log('params: ', payload);
        const res = yield call(delay, 500, payload);
        yield put({
          type: 'save',
          payload: {
            info: res,
          },
        });
      } catch (e) {
        console.log('fetchData error', e);
      }
    },
    *fetchData1({ payload }, { call, put }) {
      try {
        console.log('params: ', payload);
        const res = yield call(delay, 1000, payload);
        yield put({
          type: 'save',
          payload: {
            info: res,
          },
        });
      } catch (e) {
        console.log('fetchData error', e);
      }
    },
    *fetchData2({ payload }, { call, put }) {
      try {
        console.log('params: ', payload);
        const res = yield call(delay, 1000, payload);
        yield put({
          type: 'save',
          payload: {
            info: res,
          },
        });
      } catch (e) {
        console.log('fetchData error', e);
      }
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default ApiModel;
