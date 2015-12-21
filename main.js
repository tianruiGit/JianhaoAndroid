define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	require("$UI/JianhaoAndroid/plugin/lunbo/js/jquery-1.10.2.min");
	require("$UI/JianhaoAndroid/plugin/lunbo/js/jquery.kinMaxShow-1.1.min");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
		// 窗体初始化大小
		this.initWindow();
		// 初始轮播广告
		this.initGuanggao();
		// 初始检测状态
		this.initCheckState();
	};
	// 初始窗口大小
	Model.prototype.initWindow = function() {

		$("#bianzhengTable").height(window.innerHeight - 150 - 48);
	};
	// 初始检测状态
	Model.prototype.initCheckState = function() {

		var rowsJianfei = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '01', "1" ]);
		if (rowsJianfei.length > 0) {
			this.initJiaobiao("Jianfei");
		}
		var rowsQudou = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '02', "1" ]);
		if (rowsQudou.length > 0) {
			this.initJiaobiao("Qudou");
		}
		var rowsBianmi = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '03', "1" ]);
		if (rowsBianmi.length > 0) {
			this.initJiaobiao("Bianmi");
		}
		var rowsKouchou = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '05', "1" ]);
		if (rowsKouchou.length > 0) {
			this.initJiaobiao("Kouchou");
		}
		var rowsShimian = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '06', "1" ]);
		if (rowsShimian.length > 0) {
			this.initJiaobiao("Shimian");
		}
		var rowsHeitou = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '07', "1" ]);
		if (rowsHeitou.length > 0) {
			this.initJiaobiao("Heitou");
		}
		var rowsHuanjie = this.getParent().comp('checkData').find([ 'fBelongDemand', 'fStatus' ], [ '08', "1" ]);
		if (rowsHuanjie.length > 0) {
			this.initJiaobiao("Huanjie");
		}
	}
	// 初始角标位置
	Model.prototype.initJiaobiao = function(imgs) {
		if (imgs != "huanjie") {
			var td = $("#bz" + imgs).height();
			var imgHeight = $("#bz" + imgs + "Image").height();
			var iconTop = (td - imgHeight) * 0.5 + imgHeight;
			$("#bz" + imgs + "State").css("margin-top", "-" + iconTop + "px");
			$("#bz" + imgs + "State").css("display", "block");
		} else {
			var td = $(".bzCenter").height();
			var tdTable = $("#bzCenterTable").height();
			$("#bzHuanjieIcon").css("margin-top", tdTable - td - 14);
			$("#bzHuanjieIcon").css("display", "block");
		}
	};

	// 初始轮播广告
	Model.prototype.initGuanggao = function() {
		$(function() {
			$("#kinMaxShow").kinMaxShow();
		});
	};
	// 失眠检测
	Model.prototype.shimianClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "06");
		justep.Portal.openWindow("$UI/JianhaoAndroid/pages/bianzheng/shimian/shimian.w")
	}
	// 失眠方案
	Model.prototype.shimianSolutionClick = function(event) {
		alert("失眠方案");
	}
	// 祛痘检测
	Model.prototype.qudouClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "02");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/qudou/qudou.w"))
	}
	// 祛痘方案
	Model.prototype.qudouSolutionClick = function(event) {
		alert("祛痘方案");
	}
	// 黑头检测
	Model.prototype.heitouClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "07");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 黑头方案
	Model.prototype.heitouSolutionClick = function(event) {
		alert("黑头方案");
	}
	// 减肥检测
	Model.prototype.jianfeiClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "01");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/jianfei/jianfei.w"));
	}
	// 减肥方案
	Model.prototype.jianfeiSolutionClick = function(event) {
		alert("减肥方案");
	}
	// 便秘检测
	Model.prototype.bianmiClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "03");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 便秘方案
	Model.prototype.bianmiSolutionClick = function(event) {
		alert("便秘方案");
	}
	// 口臭检测
	Model.prototype.kouchouClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "05");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 口臭方案
	Model.prototype.kouchouSolutionClick = function(event) {
		alert("口臭方案");
	}
	// 缓解疲劳检测
	Model.prototype.huanjieClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.clear();
		checks.newData({
			index : 0
		});
		checks.setValue("fDemandId", "08");
		justep.Portal.openWindow(require.toUrl("$UI/JianhaoAndroid/pages/bianzheng/paizhao/paizhao.w"));
	}
	// 缓解疲劳方案
	Model.prototype.huanjieSolutionClick = function(event) {
		alert("缓解疲劳方案");
	}

	// 辩证按钮点击
	Model.prototype.btnBiangzhengClick = function(event) {
		$('#btnBiangzhengIcon').attr("src", "../JianhaoAndroid/images/main/bz1.png");
		$('#btnZaowuIcon').attr("src", "../JianhaoAndroid/images/main/zw2.png");
		$('#btnFaxianIcon').attr("src", "../JianhaoAndroid/images/main/fx2.png");
		$('#btnMeIcon').attr("src", "../JianhaoAndroid/images/main/me2.png");
	};
	// 造物按钮点击
	Model.prototype.btnZaowuClick = function(event) {
		$('#btnBiangzhengIcon').attr("src", "../JianhaoAndroid/images/main/bz2.png");
		$('#btnZaowuIcon').attr("src", "../JianhaoAndroid/images/main/zw1.png");
		$('#btnFaxianIcon').attr("src", "../JianhaoAndroid/images/main/fx2.png");
		$('#btnMeIcon').attr("src", "../JianhaoAndroid/images/main/me2.png");
	};
	// 发现按钮点击
	Model.prototype.btnFaxianClick = function(event) {
		$('#btnBiangzhengIcon').attr("src", "../JianhaoAndroid/images/main/bz2.png");
		$('#btnZaowuIcon').attr("src", "../JianhaoAndroid/images/main/zw2.png");
		$('#btnFaxianIcon').attr("src", "../JianhaoAndroid/images/main/fx1.png");
		$('#btnMeIcon').attr("src", "../JianhaoAndroid/images/main/me2.png");
	};
	// 我按钮点击
	Model.prototype.btnMeClick = function(event) {
		$('#btnBiangzhengIcon').attr("src", "../JianhaoAndroid/images/main/bz2.png");
		$('#btnZaowuIcon').attr("src", "../JianhaoAndroid/images/main/zw2.png");
		$('#btnFaxianIcon').attr("src", "../JianhaoAndroid/images/main/fx2.png");
		$('#btnMeIcon').attr("src", "../JianhaoAndroid/images/main/me1.png");
	};

	return Model;

});
