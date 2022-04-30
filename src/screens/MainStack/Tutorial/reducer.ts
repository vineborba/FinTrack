import React from 'react';

export enum ActionType {
  SetInName = 'SetInName',
  SetInValue = 'SetInValue',
  SetInCreated = 'SetInCreated',
  SetOutName = 'SetOutName',
  SetOutValue = 'SetOutValue',
}

export interface IState {
  inName: string;
  inValue: string;
  inCreated: boolean;
  outName: string;
  outValue: string;
  loading: boolean;
}

export type IReducer =
  | { type: ActionType.SetInName; payload: string }
  | { type: ActionType.SetInValue; payload: string }
  | { type: ActionType.SetOutName; payload: string }
  | { type: ActionType.SetOutValue; payload: string }
  | { type: ActionType.SetInCreated; payload: boolean };

export const initialState: IState = {
  inName: '',
  inValue: '',
  outName: '',
  outValue: '',
  loading: false,
  inCreated: false,
};

export const reducer: React.Reducer<IState, IReducer> = (state, action) => {
  switch (action.type) {
    case ActionType.SetInName:
      return {
        ...state,
        inName: action.payload,
      };
    case ActionType.SetInValue:
      return {
        ...state,
        inValue: action.payload,
      };
    case ActionType.SetOutName:
      return {
        ...state,
        outName: action.payload,
      };
    case ActionType.SetOutValue:
      return {
        ...state,
        outValue: action.payload,
      };
    case ActionType.SetInCreated:
      return {
        ...state,
        inCreated: true,
      };
    default:
      return state;
  }
};
