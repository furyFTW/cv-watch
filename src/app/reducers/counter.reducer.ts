import { AppActions } from '../actions';
import { CounterState, Action, INITIAL_COUNTER_STATE } from './model.interface';


export function counterReducer(key) {
    return function (state: CounterState = INITIAL_COUNTER_STATE, action: Action): CounterState {
        if (action.type === AppActions.REHYDRATE) {
            return 0 || state
        }
        switch (action.type) {
            case AppActions.REHYDRATE:
                return 0 || state;
            case AppActions.ADD_COUNTER:
                let number = state.slice();
                return number;
            default:
                return state;
        }
    }
}