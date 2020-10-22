//封装一个请求数据的方法，对axios的二次封装

import axios from "axios";

export default function ajax(url = "", params = {}, type = "get") {
	// 1、定义promise
	let promise;
	return new Promise((resolve, reject) => {
		if ("get" == type) {
			let paramsStr = "";

			Object.keys(params).forEach((key) => {
				paramsStr += key + "=" + params[key] + "&";
			});
			if (paramsStr !== "") {
				paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&")); //substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
			}
			url += "?" + paramsStr;
			promise = axios.get(url);
		} else if ("post" === type) {
			promise = axios.post(url, params);
		}

		//返回请求结果
		promise
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
}
