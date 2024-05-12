import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'
import {
  createProcess,
  createProcessFailure,
  createProcessSuccess,
  getProcess,
  getProcessFailure,
  getProcessSuccess,
} from '../slices/processes/processSlice'
import { put, takeEvery } from 'redux-saga/effects'

function* fetchProcessHandlerSaga(): Generator<any, void, any> {
  try {
    const result = yield invokeWS({
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    yield put(getProcessSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getProcessFailure()) // Dispatch failure action
  }
}

function* createProcessSaga(action: any): Generator<any, void, any> {
  console.log('process saga')
  const processData = action.payload
  try {
    const result = yield invokeWS(
      {
        url: `${APP_BASE_URL}configuration/modeler/rest/models`,
        method: MethodHttp.post,
      },
      processData,
    )
    yield put(createProcessSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(createProcessFailure(error)) // Dispatch failure action
  }
}

function* watchFetchProcessSaga() {
  yield takeEvery(getProcess, fetchProcessHandlerSaga)
  yield takeEvery(createProcess, createProcessSaga)
}

export default watchFetchProcessSaga
