import { combineReducers } from "redux";

import { UserActionTypes, SAVE_RESUME,SAVE_FIRSTNAME,SAVE_LASTNAME,SAVE_BDAY,SAVE_EMAIL, SAVE_YEARS, SAVE_ADDRESS, SAVE_STAT, SAVE_LETTER } from "./userActions";

export interface RootState {
  resume: File | null;
  firstName: string;
  lastName: string;
  bday: string;
  email: string;
  years: string;
  address: string;
  stat: string;
  letter: string;
}

const resume = (state: File | null = null, action: UserActionTypes): File | null => {
  switch (action.type) {
    case SAVE_RESUME:
      return action.value;
    default:
      return state;
  }
};

const firstName = (state: string = "", action: UserActionTypes): string => {
  switch (action.type) {
    case SAVE_FIRSTNAME:
      return action.value;
    default:
      return state;
  }
};

const lastName = (state: string = "", action: UserActionTypes): string => {
  switch (action.type) {
    case SAVE_LASTNAME:
      return action.value
      default:
        return state
  }
};

const bday = (state: string = '', action: UserActionTypes): string => {
  switch (action.type) {
    case SAVE_BDAY:
      return action.value
      default:
        return state
  }
};

const email = (state: string = '', action: UserActionTypes): string => {
  switch (action.type) {
    case SAVE_EMAIL:
      return action.value
      default:
        return state
  }
}

const years = (state: string = '', action: UserActionTypes): string => {
  switch (action.type) {
    case SAVE_YEARS:
      return action.value
      default:
        return state
  }
}

const address = (state: string = '', action: UserActionTypes): string => {
  switch (action.type) {
    case SAVE_ADDRESS:
      return action.value
      default:
        return state
  }
}

const stat = (state: string = '', action: UserActionTypes): string => {
  switch (action.type) {
    case SAVE_STAT:
      return action.value
      default:
        return state
  }
}

const letter = (state: string = '', action: UserActionTypes): string => {
  switch (action.type) {
    case SAVE_LETTER:
      return action.value
      default:
        return state
  }
}





export default combineReducers({ resume, firstName, lastName, bday, email, years, address, stat, letter });
