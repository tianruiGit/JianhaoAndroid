define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/jhApp/baas");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
		$("#shimianType").height(window.innerHeight - 90 - 48);
		// 加载难入睡比例
		baas.sendRequest({
			"url" : "/jhapi",
			"action" : "queryShimianRate",
			"params" : {

			},
			"success" : function(resultData, xhr) {

				$("#progress1").css("width", resultData.type1 + "%");
				$("#value1").html(resultData.type1 + "%");
				$("#progress2").css("width", resultData.type2 + "%");
				$("#value2").html(resultData.type2 + "%");
				$("#progress3").css("width", resultData.type3 + "%");
				$("#value3").html(resultData.type3 + "%");
				$("#progress4").css("width", resultData.type4 + "%");
				$("#value4").html(resultData.type4 + "%");
				$("#progress5").css("width", resultData.type5 + "%");
				$("#value5").html(resultData.type5 + "%");

			}
		});
	};

	Model.prototype.shimianType1Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId","1");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}
	
	Model.prototype.shimianType2Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId","2");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}
	
	Model.prototype.shimianType3Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId","3");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}
	
	Model.prototype.shimianType4Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId","4");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}
	
	Model.prototype.shimianType5Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId","5");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}

	return Model;
});