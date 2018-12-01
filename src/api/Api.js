import Vue from 'vue'
import axios from 'axios'
import base from './base'
import {
	config
} from './config.js'
import * as request from "./RequestClient"

Vue.use(base)

export default {
	install(Vue, pluginOptions = {}) {
		let requestClient = new request.Client({
			baseURL: config.BASE_URL,
		}, {
			globalErrorHandler: error => {
				console.log(error)
				if (error.message) {
					Vue.prototype.showToastError(error.message)
				}
				return Promise.reject(error);
			},
			errCode: res => {
				console.log(res)
				if (res.data.msg) {
					Vue.prototype.showToastError(res.data.msg)
				}
				return Promise.reject(res);
			},
		});
		Vue.prototype.Api = {
			// 获取公司列表
			getCompanys() {
				return requestClient.fetch(request.METHOD_GET, `/company/id/0`, )
			},
			// 获取图形验证码
			getImgCap() {
				return requestClient.fetch(request.METHOD_GET, `/captcha`,{})
			},
			// 获取短信验证码
			getMsgCap( data, options = {}) {
				return requestClient.fetch(request.METHOD_POST, `/messageCaptcha`, data, options)
			},
			// 注册
			register(data, options = {}) {
				return requestClient.fetch(request.METHOD_POST, `/register`, data,options)
			},
			// 登录
			login(data) {
				return requestClient.fetch(request.METHOD_POST, `/login`, data)
			},
			// 获取用户信息
			getUserInfo(id) {
				return requestClient.fetch(request.METHOD_GET, `/student/id/${id}`)
			},
			// 获取课程列表
			getCourse(query, options = {}) {
				return requestClient.fetch(request.METHOD_GET, `/curriculum`, query, options)
			},
			// 获取考试列表
			getExams() {
				return requestClient.fetch(request.METHOD_GET, `/exam/id/0`,{})
			},
			// 获取课程详情
			getCourseDetail(id) {
				return requestClient.fetch(request.METHOD_GET, `/curriculum/id/${id}`, {})
			},
			// 获取考试详情
			getExamDeatil(id) {
				return requestClient.fetch(request.METHOD_GET, `/exam/id/${id}`, {})
			},
		};
	}
};
