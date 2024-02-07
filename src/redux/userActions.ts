export const SAVE_RESUME = "SAVE_RESUME"
export const SAVE_FIRSTNAME = "SAVE_FIRSTNAME"
export const SAVE_LASTNAME = "SAVE_LASTNAME"
export const SAVE_BDAY = "SAVE_BDAY"
export const SAVE_EMAIL = "SAVE_EMAIL"
export const SAVE_YEARS = "SAVE_YEARS"
export const SAVE_ADDRESS = "SAVE_ADDRESS"
export const SAVE_STAT = "SAVE_STAT"
export const SAVE_LETTER = "SAVE_LETTER"


export const saveResume = (resume: File) => {
  return {
    type: SAVE_RESUME,
    value: resume,
  }
}

export const saveFirstName = (firstName: string) => {
  return {
    type: SAVE_FIRSTNAME,
    value: firstName
  }
}

export const saveLastName = (lastName: string) => {
  return {
    type: SAVE_LASTNAME,
    value: lastName
  }
}

export const saveBday = (bday: string) => {
  return {
    type: SAVE_BDAY,
    value: bday
  }
}

export const saveEmail = (email: string) => {
  return {
    type: SAVE_EMAIL,
    value: email
  }
}

export const saveYears = (years: string) => {
  return {
    type: SAVE_YEARS,
    value: years
  }
}

export const saveAddress = (address: string) => {
  return {
    type: SAVE_ADDRESS,
    value: address
  }
}

export const saveStat = (stat: string) => {
  return {
    type: SAVE_STAT,
    value: stat
  }
}

export const saveLetter = (letter: string) => {
  return {
    type: SAVE_LETTER,
    value: letter
  }
}

export interface SaveResumeAction {
  type: typeof SAVE_RESUME,
  value: File
}

export interface SaveFirstName {
  type: typeof SAVE_FIRSTNAME,
  value: string
}

export interface SaveLastName {
  type: typeof SAVE_LASTNAME,
  value: string
}

export interface SaveBday {
  type: typeof SAVE_BDAY,
  value: string
}

export interface SaveEmail {
  type: typeof SAVE_EMAIL,
  value: string
}

export interface SaveYears {
  type: typeof SAVE_YEARS,
  value: string
}

export interface SaveAddress {
  type: typeof SAVE_ADDRESS,
  value: string
}

export interface SaveStat {
  type: typeof SAVE_STAT,
  value: string
}

export interface SaveLetter {
  type: typeof SAVE_LETTER,
  value: string
}

export type UserActionTypes = | SaveResumeAction | SaveFirstName | SaveLastName | SaveBday | SaveEmail | SaveYears | SaveAddress | SaveStat | SaveLetter;