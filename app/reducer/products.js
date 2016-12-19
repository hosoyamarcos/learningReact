let initialState = [
    {id: 1, name: 'fridge', price: 500},
    {id: 3, name: 'keyboard', price: 20}
]

export default function products(state=initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
