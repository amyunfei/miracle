import * as ActionTypes from '../actionsType/count'

interface INCREMENT_NUMBER {
  type: ActionTypes.INCREMENT_NUMBER
}

interface DECREMENT_NUMBER {
  type: ActionTypes.DECREMENT_NUMBER
}

export type All = INCREMENT_NUMBER | DECREMENT_NUMBER

export function INCREMENT_NUMBER(): INCREMENT_NUMBER {
  return {
    type: ActionTypes.INCREMENT_NUMBER
  }
}

export function DECREMENT_NUMBER(): DECREMENT_NUMBER {
  return {
    type: ActionTypes.DECREMENT_NUMBER
  }
}