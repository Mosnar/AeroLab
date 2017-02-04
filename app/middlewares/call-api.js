import remote from '../config/remote';

export const CALL_API = Symbol('CALL_API');

export default store => next => action => {
    if (!action[CALL_API]) {
        return next(action);
    }

    let request = action[CALL_API];
    let {method, path, payload, failureType, successType, sendingType, success, failure, extra} = request;
    let {dispatch} = store;

    let opt = {};
    opt.method = method;
    opt.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    if (payload) {
        opt.body = JSON.stringify(payload);
    }

    let promise = fetch(remote.API_URL + path, opt);

    promise.then((response) => response.json()).then(function (res) {
        let respObj = {
            type: successType,
            response: res
        };
        if (extra != null) {
            respObj.extra = extra;
        }
        dispatch(respObj);
        if (success) {
            success(res);
        }
    }, function (err) {
        let respObj = {
            type: failureType,
            response: err
        };
        if (extra != null) {
            respObj.extra = extra;
        }
        dispatch(respObj);
        if (failure) {
            failure(err);
        }
    });

    let sendingBody = {type: sendingType, promise: promise};
    if (extra != null) {
        sendingBody.extra = extra;
    }
    dispatch(sendingBody);

    return promise;
};
