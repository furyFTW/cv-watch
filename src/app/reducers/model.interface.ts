// export interface Counter {
//     count: number;
// }

export type CounterState = number;
export interface IAppState {
    counter: number;
    router?: any
}

export const INITIAL_COUNTER_STATE = 0;

export const INITIAL_STATE: IAppState = {
    counter: 0
};

export interface Action {
    type: string;
    payload?: any;
}