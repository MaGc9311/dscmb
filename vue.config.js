module.exports = {
	devServer: {
		host: "0.0.0.0",
		port: "9527",
		open: true,
		proxy: {
			api: {
				// target: "http://39.101.210.136:3000/api/",
				target: "http://localhost:3000/api/",
				changeOrigin: true,
				pathRewrite: {
					"^/api": "",
				},
			},
		},
	},
};
