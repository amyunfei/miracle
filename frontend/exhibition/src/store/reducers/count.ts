import * as Actions from '../actions/count'
import * as ActionTypes from '../actionsType/count'

const initState = {
  number: 0
}

type IState = Readonly<typeof initState>;

const countReducer = (state: IState = initState, action: Actions.All): IState => {
  switch (action.type) {
  case ActionTypes.INCREMENT_NUMBER:
    return{
      number: state.number + 1
    }
  case ActionTypes.DECREMENT_NUMBER:
    return{
      number: state.number - 1
    }
  default:
    return state
  }

}

export default countReducer