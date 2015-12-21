define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	require("css!$UI/jhApp/plugin/alert/sweetalert").load();
	require("$UI/jhApp/plugin/alert/sweetalert.min");
	
	var Model = function() {
		this.callParent();
	};
	Model.prototype.nextClick = function(event) {
		
		if (document.getElementById("qudouRadio1").checked == true) {
			var checks = this.getParent().comp("checkTemp");
			checks.setValue("fFeatureId","1");
			justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
		}
		else if(document.getElementById("qudouRadio2").checked == true){
			var checks = this.getParent().comp("checkTemp");
			checks.setValue("fFeatureId","2");
			justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
		}
		else if(document.getElementById("qudouRadio3").checked == true){
			var checks = this.getParent().comp("checkTemp");
			checks.setValue("fFeatureId","3");
			justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
		}
		else if(document.getElementById("qudouRadio4").checked == true){
			var checks = this.getParent().comp("checkTemp");
			checks.setValue("fFeatureId","4");
			justep.Portal.openWindow(require.toUrl("$UI/jhApp/pages/paizhao/paizhao.w"));
		}
		else{
			swal({
				title : "警告",
				text : "请选择痘痘所在区域！",
				confirmButtonText : "确定"
			});
		}
	}
	return Model;
});