import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CounterState } from '../reducers';

export interface Action {
    type: string;
    payload: any;
}

@Injectable()
export class AppActions {
    static REHYDRATE = 'REHYDRATE';

    static ADD_COUNTER = 'ADD_COUNTER';
    static REMOVE_COUNTER = 'REMOVE_COUNTER';

    constructor(private ngRedux: NgRedux<CounterState>) {
    }

    action(type: string, payload: any = {}) {
        return { type, payload }
    };

    rehydrate(): Action {
        return this.ngRedux.dispatch(this.action(AppActions.REHYDRATE));
    }

    onAddCounter(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.ADD_COUNTER, payload));
    }
    
    onRemoveCounter(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.REMOVE_COUNTER, payload));
    }
}