const initialState = {
    list: []
}

export const Action = {
    Types: {
        SET_LIST: 'SET_LIST'
    },
    Creators: {
        setList: (payload) => ({
            type: Action.Types.SET_LIST,
            payload
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
        case Action.Types.SET_LIST: {
            return {
                ...state,
                list: state.list.concat({
                    name: action.payload.name,
                    price: action.payload.price,
                    detail: action.payload.detail
                })
            }
        }
    }
}

export default reducer;