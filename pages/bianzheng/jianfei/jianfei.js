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
		$("#jianfeiType").height(window.innerHeight - 90 - 48);
	}
	// 初始化数据
	Model.prototype.initData = function() {
		baas.sendRequest({
			"url" : "/jhapi",
			"action" : "queryJianfeiRate",
			"params" : {

			},
			"success" : function(resultData, xhr) {

				$("#jianfeiProgress1").css("width", resultData.type1 + "%");
				$("#jianfeiValue1").html(resultData.type1 + "%");
				$("#jianfeiProgress2").css("width", resultData.type2 + "%");
				$("#jianfeiValue2").html(resultData.type2 + "%");
				$("#jianfeiProgress3").css("width", resultData.type3 + "%");
				$("#jianfeiValue3").html(resultData.type3 + "%");
				$("#jianfeiProgress4").css("width", resultData.type4 + "%");
				$("#jianfeiValue4").html(resultData.type4 + "%");
				$("#jianfeiProgress5").css("width", resultData.type5 + "%");
				$("#jianfeiValue5").html(resultData.type5 + "%");

			}
		});
	}
	// 点击标准体型
	Model.prototype.jianfeiType1Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "1");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 点击轻度肥胖
	Model.prototype.jianfeiType2Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "2");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 点击上身肥胖
	Model.prototype.jianfeiType3Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "3");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 点击下身肥胖
	Model.prototype.jianfeiType4Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "4");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 点击全身肥胖
	Model.prototype.jianfeiType5Click = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fFeatureId", "5");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}

	return Model;
});