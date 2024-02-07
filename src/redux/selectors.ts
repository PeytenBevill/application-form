import { RootState } from "./userReducer";

export const getResume = (state: RootState) => state.resume;
export const getFirstName = (state: RootState) => state.firstName
export const getLastName = (state: RootState) => state.lastName
export const getBday = (state: RootState) => state.bday
export const getEmail = (state: RootState) => state.email
export const getYears = (state: RootState) => state.years
export const getAddress = (state: RootState) => state.address
export const getStat = (state: RootState) => state.stat
export const getLetter = (state: RootState) => state.letter
