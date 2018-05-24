import * as api from '../api';
import { auth } from "../config/firebase";

import { AsyncStorage } from 'react-native';

export function register(data, successCB, errorCB) {
    api.register(data, function (success, data, error) {
        console.log('response', success, data, error);
        if (success) {
            successCB(data);
        }
        else if (error) errorCB(error);
    });
}

export function createUser(user, successCB, errorCB) {
    return (dispatch) => {
        api.createUser(user, function (success, data, error) {
            if (success) {
                successCB();
            }else if (error) errorCB(error)
        });
    };
}

export function login(data, successCB, errorCB) {
    api.login(data, function (success, data, error) {
        if (success) {
            successCB(data);
        }else if (error) errorCB(error)
    });
}

export function resetPassword(data, successCB, errorCB) {
    api.resetPassword(data, function (success, data, error) {
        if (success) successCB();
        else if (error) errorCB(error)
    });
}

export function signOut(successCB, errorCB) {
    api.signOut(function (success, data, error) {
        if (success) {
            successCB();
        }else if (error) errorCB(error)
    });
}

export function checkLoginStatus(callback) {
    auth.onAuthStateChanged((user) => {
        let isLoggedIn = (user !== null);

        if (isLoggedIn){
            api.getUser(user, function (success, { exists, user }, error) {
                if (success) {
                    callback(exists, isLoggedIn);
                }else if (error) {
                    //unable to get user
                    callback(false, false);
                }
            });
        }else {
            callback(false, isLoggedIn)
        }
    });
}

export function signInWithFacebook(facebookToken, successCB, errorCB) {
    api.signInWithFacebook(facebookToken, function (success, data, error) {
        if (success) {
            successCB(data);
        }else if (error) errorCB(error)
    });
}