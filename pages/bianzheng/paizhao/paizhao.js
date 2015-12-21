define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/demo/device/common/pub").load();
	require("cordova!org.apache.cordova.camera");
	require("cordova!org.apache.cordova.media-capture");
	require("cordova!org.apache.cordova.inappbrowser");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
		var checks = this.getParent().comp("checkTemp");
		if (checks.getValue("fDemandId") == "02") {
			$("#tipWord").html("请在光线良好的条件下,拍摄痘痘部位的图片,图片将进行加密处理,仅见好医师可见!");
			$("#tipImage").attr("src", "images/paizhao/qudou.jpg");
		} else if (checks.getValue("fDemandId") == "07") {
			$("#tipWord").html("请在光线良好的条件下,拍摄黑头部位的图片,图片将进行加密处理,仅见好医师可见!");
			$("#tipImage").attr("src", "images/paizhao/heitou.jpg");
		} else {
			$("#tipWord").html("舌诊,为中医重要诊断方法,主要通过诊察舌的形态、色泽等,来判断疾病的性质、津液的盈亏及脏腑的虚实等.请在日光或关光线充足的条件下,将摄像头贴近舌头,并将舌头尽量伸出（可试着用舌头努力舔下巴！）!");
			$("#tipImage").attr("src", "images/paizhao/shetou.jpg");
		}
	};

	Model.prototype.cameraBtnClick = function(event) {
		var checks = this.getParent().comp("checkTemp");

		function onSuccess(imageURI) {
			checks.setValue("fMediaId", imageURI);
		}
		function onFail(message) {
			
		}
		navigator.camera.getPicture(onSuccess, onFail, {
			quality : 50
		});
	};

	Model.prototype.beginDatiClick = function(event) {
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fMediaId", "");
		justep.Portal.openWindow("$UI/jhApp/pages/question/question.w");
	}

	return Model;
});