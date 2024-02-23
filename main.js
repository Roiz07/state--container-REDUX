// ---------------Global Reducer
const reducer = (state = [], action) => {
    // console.log("reducer", state, action);
    console.log(state, action);
    if (action.type === "ADD_USER") {
        return [...state, action.payload]; //...state --> merge our current state
    }
    return state;
};

// -------------------Store
const store = Redux.createStore(reducer);

//  -------------------Subscribe
// store.subscribe(() => {
//     console.log(store.getState()); //store.getState() returns current Redux state
// });
// store.subscribe is called everywhere on state change - this is activated through store changes

// --------------------Dispatches
// store.dispatch({ type: "ADD_USER", payload: 'jack' }); //triggers change of the Redux state
// The object inside dispatch is an action
// payload is a property to store data in action
// store.dispatch({ type: "ADD_USER", payload: 'john' });

const list = document.querySelector('.list');
const addUserBtn = document.querySelector('.addUser');
const userInput = document.querySelector('.userInput');

store.subscribe(() => {
    list.innerHTML = ''
    userInput.value = ''
    store.getState().forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        list.appendChild(li);
    })

});

addUserBtn.addEventListener('click', () => {
    store.dispatch({ type: "ADD_USER", payload: userInput.value });
})