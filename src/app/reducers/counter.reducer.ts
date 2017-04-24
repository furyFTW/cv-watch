import { AppActions } from '../actions';
import { CounterState, Action, INITIAL_COUNTER_STATE } from './model.interface';


export function counterReducer() {
    return function (state: CounterState = INITIAL_COUNTER_STATE, action: Action): CounterState {
        console.log(state, action)
        switch (action.type) {
            case AppActions.REHYDRATE:
                return INITIAL_COUNTER_STATE;
            case AppActions.ADD_COUNTER:
                return state + 1;
            case AppActions.REMOVE_COUNTER:
                return state - 1;
            default:
                return state;
        }
    }
}