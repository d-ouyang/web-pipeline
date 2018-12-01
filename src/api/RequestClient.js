import axios from 'axios'
import {
    config,
    inArr
} from './config'
export const METHOD_GET = 'GET'
export const METHOD_POST = 'POST'
export const METHOD_PUT = 'PUT'
export const METHOD_DELETE = 'DELETE'
export const METHOD_PATCH = 'PATCH'
import Vue from 'vue'
export class Client {
constructor(options = {}, callbacks = {}) {
    this.options = Object.assign({}, {
        disabledGlobalErrorHandler: false
    }, options)

    this.callbacks = Object.assign({}, {
        // tokenGetter: () => {
        //     return ''
        // },
        defaultHandler: error => {},
        globalErrorHandler: null,
    }, callbacks)

    this.client = axios.create(this.options)
}
    /**
     *
     * @param method
     * @param url
     * @param params
     * @param headers
     * @param options
     * @returns {AxiosPromise<any>}
     */
    fetch(method, url, params, headers = {}, options = {}) {
        // axios.defaults.withCredentials = true
        let $this = this;

        let token = window.localStorage.getItem('token')

        let originHeader = {};
        if (token) {
            originHeader['token'] = token
        } 
        // if (inArr(url)) {
        //     originHeader['Content-Type'] = 'application/x-www-form-urlencoded';
        //     // axios.defaults.withCredentials = true
        // }

        if (url == '/login') {
            originHeader['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        let requestOptions = {
            url,
            method,
            headers: Object.assign({}, originHeader, headers),
            ...Object.assign({}, $this.options, options)
        };

        method = method.toUpperCase();
        switch (method) {
            case METHOD_GET:
                requestOptions.params = params;
                break;
            case METHOD_POST:
                // if (url == '/login') {
                //     requestOptions.data = JSON.stringify(params);
                // } else {
                //     requestOptions.data = params;
                // }
                requestOptions.data = params;
                break;
            case METHOD_PUT:
                requestOptions.data = params;
                break;
            case METHOD_DELETE:
                requestOptions.params = params;
                break;
            case METHOD_PATCH:
                requestOptions.data = params;
                break;
            default:
                requestOptions.data = params;
                break;
        }
        return new Promise((resolve, reject) => {
            $this.client.request(requestOptions).then(response => {
                if (response.status == 200 && response.data.code == config.ERR_OK) {
                    resolve(response.data.data);
                } else {
                    $this.callbacks.errCode(response)
                }
            }).catch(error => {
                $this.callbacks.defaultHandler(error);
                if (!requestOptions.disabledGlobalErrorHandler &&
                    $this.callbacks.globalErrorHandler
                ) {
                    $this.callbacks.globalErrorHandler(error);
                }
                reject(error);
            });
        });
    }

}