export interface ICounterState {
    count: number;
}

export interface IReducerAction {
    type: string;
    payload: any;
    error: string;
}

export interface IReducerStates {
    counter: ICounterState;
}
