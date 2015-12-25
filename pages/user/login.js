define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.btnLoginClick = function(event){

	};

	Model.prototype.btnRegisterClick = function(event){
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/user/register.w"));
	};

	return Model;
});