export interface Counter {
    cout: number;
}

export interface CounterState extends Array<Counter> { }

export interface IAppState {
    counter: Counter[];
    router?: any
}

export const INITIAL_COUNTER_STATE: CounterState = [];

export const INITIAL_STATE: IAppState = {
    counter: []
};

export interface Action {
    type: string;
    payload?: any;
}