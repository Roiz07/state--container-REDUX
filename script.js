// -----------------------------InitialState
const initialState = {
    value: 0
};

// ----------------------------Reducer
const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "counter/increment":
            return { ...state, value: state.value + 1 };
        case "counter/decrement":
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}

// ------------------------------Store
const store = Redux.createStore(reducer);

// ------------------------------Document's elements
const valueEl = document.querySelector('.value');
const plus = document.querySelector('.increment');
const minus = document.querySelector('.decrement');
const odd = document.querySelector('.incrementIfOdd');

// -------------------------Show value
function render() {
        const state = store.getState();
        // debugger;
        valueEl.innerHTML = state.value.toString();
    }

render();

// --------------------------Update value based of action
store.subscribe(render);

// ---------------------------Dispatches - triggers change
plus.addEventListener('click', () => {
    store.dispatch({ type: "counter/increment"});
});

minus.addEventListener('click', () => {
    store.dispatch({ type: "counter/decrement"});
});

odd.addEventListener('click', () => {
    if (store.getState().value % 2 !== 0) {
        store.dispatch({ type: "counter/increment"});
    }
});

// debugger;

// ---------------------------------------------doesnt works!!!
// // define an initial state value for the app
// const initialState = {
//     value: 0
// };

// // Create a"reducer" function that determines what the new sta
// // should be when something happens in the app
// function counterReducer(state = initialState, action) {
//     // Reducer usually look at the type of action that happened
//     // to decide how to update the state
//     switch (action.type) {
//         case "counter/increment":
//             return { ...state, value: state.value + 1 };
//         case "counter/decrement":
//             return { ...state, value: state.value - 1 };
//         default:
//             // If the reducer doesn't care about this action type,
//             // return the existing state unchanged
//             return state;
//     }
// }

// // Create a new Redux store with the "createStore" function,
// // and use the "counterReducer" for the update logic
// const store = Redux.createStore(counterReducer);

// // Our UI is some text in a single HTML element
// const valueEl = document.getElementsByClassName('value')

// // Whenever the store state change, update the UI by
// // reading the latest store state and showing new data
// function render() {
//     const state = store.getState();
//     debugger;
//     valueEl.innerHTML = state.value.toString();
// }
// // debugger;
// // Update the UI with the initial data
// render();
// // And subcribe to redraw whenever the data changes in the function
// store.subscribe(render);



// // Handle user input by "dispatching" action object,
// // which should describe "what happened" in the app
// const increm_ = document.querySelector('button');

// increm_.addEventListener('click', increM);

// // document.getElementsByClassName('decrement').addEventListener("click",
// //     function () {
// //         store.dispatch({ type: "counter/decremented" });
// //     });

// // document.getElementsByClassName('incrementIfOdd').addEventListener("click",
// //     function () {
// //         if (store.getState().value % 2 !== 0) {
// //             store.dispatch({ type: "counter/increment" });
// //         }
// //     });

//     function increM() {
//         store.dispatch({ type: "counter/incremented" });
//     }

// // document.getElementsByClassName('incrementAsync').addEventListener("click",
// //     function () {
// //         store.dispatch({ type: "counter/increment" });
// //     });
