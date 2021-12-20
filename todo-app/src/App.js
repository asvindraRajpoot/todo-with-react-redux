import { connect } from "react-redux";

function App(props) {

  function handleClick(event) {
    if (event.keyCode === 13 && event.target.value) {
      // console.log("testing");
      props.dispatch({ type: "add", todo: event.target.value });
      event.target.value = "";
    }
  }
  function handleRemove({ target }) {
    let { id } = target.dataset;
    props.dispatch({ type: "remove", id: id });
  }

  function handleCompleted({ target }) {
    let { id, completed } = target.dataset;
    console.log("testing");
    props.dispatch({ type: "toggle", isCompleted: completed === "false" ? true : false, id: id })
  }
  return <div className="p-12">
    <h1 className="text-center text-5xl font-bold">Todo App</h1>
    <div className="bg-green-300 p-8 flex flex-col items-center mt-12 ">
      <input type="text" placeholder="Enter todo" className="w-5/6 p-2 rounded-md" onKeyUp={handleClick}/>
      <div>
        <ul className="w-5/6">
          {
            props.state && props.state.map((t, i) => {
              return <li key={i} className="flex justify-between w-96 bg-red-200 my-3 items-center text-2xl">
                <input type="checkbox" onClick={handleCompleted} data-id={i} data-completed={t.isCompleted} className="text-2xl" checked={t.isCompleted ? true : false} />
                <h2 className={t.isCompleted ? "capitalize line-through" : "capitalize"}>{t.todo}</h2>
                <span className="cursor-pointer" onClick={handleRemove} data-id={i} >❌</span>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  </div>
}

function getState(state) {
  return {
    state: [...state]
  }
}

export default connect(getState)(App);