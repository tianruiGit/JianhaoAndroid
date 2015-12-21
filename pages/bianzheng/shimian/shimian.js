define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/jhApp/baas");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
		// 初始化高度
		this.initHeight();
		// 初始化数据
		this.initData();
	};
	// 初始化高度
	Model.prototype.initHeight = function() {
		$("#shimianType").height(window.innerHeight - 90 - 48);
	}
	// 初始化数据
	Model.prototype.initData = function() {
		baas.sendRequest({
			"url" : "/jhapi",
			"action" : "queryShimianRate",
			"params" : {

			},
			"success" : function(resultData, xhr) {

				$("#shimianProgress1").css("width", resultData.type1 + "%");
				$("#shimianValue1").html(resultData.type1 + "%");
				$("#shimianProgress2").css("width", resultData.type2 + "%");
				$("#shimianValue2").html(resultData.type2 + "%");
				$("#shimianProgress3").css("width", resultData.type3 + "%");
				$("#shimianValue3").html(resultData.type3 + "%");
				$("#shimianProgress4").css("width", resultData.type4 + "%");
				$("#shimianValue4").html(resultData.type4 + "%");
				$("#shimianProgress5").css("width", resultData.type5 + "%");
				$("#shimianValue5").html(resultData.type5 + "%");

			}
		});
	}
	Model.prototype.shimianType1Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "1");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}

	Model.prototype.shimianType2Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "2");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}

	Model.prototype.shimianType3Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "3");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}

	Model.prototype.shimianType4Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "4");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}

	Model.prototype.shimianType5Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "5");
		justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
	}

	return Model;
});