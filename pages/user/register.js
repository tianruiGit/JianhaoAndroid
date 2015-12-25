define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/JianhaoAndroid/baas");

	var Model = function() {
		this.callParent();
		this._userID = localStorage.setItem("UserId");
	};

	Model.prototype.modelLoad = function(event) {

	};

	Model.prototype.btnRegisterClick = function(event) {

		var user = this.comp("userData");
		user.setValue("fUserId", "15948612408");
		user.setValue("fPhone", "15948612401");
		user.setValue("fPassword", "123456");

		baas.sendRequest({
			"url" : "/jhapi",
			"action" : "saveUser",
			"async" : false,
			"params" : {
				"userData" : user.toJson(true)
			},
			"success" : function(resultData, xhr) {
				user.applyUpdates();

			}
		});
	};

	Model.prototype.userDataCustomRefresh = function(event) {
		var self = this;
		var data = event.source;
		var params = {
			"id" : this._userID
		};
		var success = function(resultData) {
			var append = event.options && event.options.append;
			data.loadData(resultData, append);
			var user = self.comp("userData");
			localStorage.setItem("UserId", user.getValue("fUserId"))
		};
		baas.sendRequest({
			"url" : "/jhapi",
			"action" : "queryUser",
			"params" : params,
			"success" : success
		});
	};

	return Model;
});