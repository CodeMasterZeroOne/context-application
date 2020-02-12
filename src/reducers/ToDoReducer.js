import uuid from 'uuid/v1'

export const ToDoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                title: action.item.title,
                content: action.item.content,
                id: uuid()
            }]

        case 'REMOVE_TODO':
            return state.filter(item => item.id !== action.id)
            
        default:
            return state
    }
}