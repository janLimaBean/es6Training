module.exports = {
	entry:"./script.js",
	output:{filename:"bundel.js"},
	module:{
		loaders:[
		{test:/\.js?/,loader:"babel-loader",exclude:"/node_modules/"}
		]
	}
}