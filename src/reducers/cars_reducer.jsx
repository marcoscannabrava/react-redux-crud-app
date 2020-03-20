import { FETCH_CARS, REMOVE_CAR } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case REMOVE_CAR:
      return state.filter((car) => car !== action.payload);
    default:
      return state;
  }
}
