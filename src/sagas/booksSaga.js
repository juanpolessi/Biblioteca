import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { CALL_FETCH_BOOKS, fetchBooksSuccess, fetchBooksFailed } from '../ducks/Books'
import BooksAPI from '../integrations/BooksAPI'
import { message } from 'antd'

function* fetchBooks(){
    try{
        const books = yield call(BooksAPI.fetchBooks)
        yield put(fetchBooksSuccess(books))
    }catch(error){
        message.error('Não foi possível obter os dados da listagem')
        yield put(fetchBooksFailed(error))
    }
}

function* fetchBooksSaga(){
    yield takeEvery(CALL_FETCH_BOOKS, fetchBooks)
}

export default function* booksSaga(){
    yield all([
        fork(fetchBooksSaga)
    ])
}