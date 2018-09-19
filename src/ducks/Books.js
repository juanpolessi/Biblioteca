/* Actions Types */
export const CALL_FETCH_BOOKS = 'CALL_FETCH_BOOKS'
export const CALL_FETCH_BOOKS_SUCCESS = 'CALL_FETCH_BOOKS_SUCCES'
export const CALL_FETCH_BOOKS_FAILED = 'CALL_FETCH_BOOKS_FAILED'

/* Reducer */

const INITIAL_STATE = {
    books:[],
    loading: false,
    error: null
}

export default function reducer(state = INITIAL_STATE, action){
    const {error, books, type } = action;

    switch(type){
        case CALL_FETCH_BOOKS:
            return {...state, loading: true}
        case CALL_FETCH_BOOKS_SUCCESS:
            return {...state, loading: false, books}
        case CALL_FETCH_BOOKS_FAILED:
            return {...state, loading: false, error}
        default:
            return state
    }
}

/* Action Creators */

export const fetchBooks = () => {
    return { type: CALL_FETCH_BOOKS }
}

export const fetchBooksSuccess = () => {
    return { type: CALL_FETCH_BOOKS_SUCCESS, books }
}

export const fetchBooksFailed = () => {
    return { type: CALL_FETCH_BOOKS_FAILED, error }
}