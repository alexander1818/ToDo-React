export default function (state, action) {
    switch (action.type) {
        case 'add':
            return [...state,
            {
                id: Date.now(),
                text: action.payload,
                complete: false
            }
            ]
        case 'toggle':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    // console.log('state', todo.id)
                    // console.log('state', action.payload)

                    todo.complete = !todo.complete;
                    console.log('todo', todo.complete)

                }
                return todo;
            })
        case 'remove':
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state;
    }
}