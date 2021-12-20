import { createStore } from "redux";

function reducerTodo(state = [], action) {

  switch (action.type) {
    case "add":
      return state.concat({ todo: action.todo, isCompleted: false });;
    case "remove":
      return state.filter((s, i) => i !== Number(action.id));
    case "toggle":
      return state.filter((s, i) => {
        if (i === Number(action.id)) {
          console.log(action.isCompleted);
          s.isCompleted = action.isCompleted;
        }
        return s;
      })
    default:
      return state;
  }
}

let store = createStore(reducerTodo);
export default store;