import { all, fork } from 'redux-saga/effects'
import booksSaga from './booksSaga'

export default function* mainSaga(){
    yield all([
        fork(booksSaga)
    ])
}