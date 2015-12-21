define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/jhApp/baas");

	require("css!$UI/jhApp/plugin/alert/sweetalert").load();
	require("$UI/jhApp/plugin/alert/sweetalert.min");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
		var question = this.comp("questionData");

		var str = "";
		var i = 0;
		question.each(function(param) {
			str += "<li state='0' class='question' id='q" + i + "' bh='" + param.row.val('fBelongDemand') + "' xh='" + i + "'> " + "<a id='qt" + i + "' href='#q" + i + "'> "
					+ "<span class='question-title-name'> " + "<span style='width:auto;display:block;'>" + param.row.val('fContent') + "</span> " + "</span> " + "</a> " + "<ul class='sub-menu'> "
					+ "<li class='question-select'> " + "<div id='question" + i + "answer1' class='question" + i + "answer question-answer' style='margin-left:20px;' onclick='selectAnswer(" + i
					+ ",1)'> 没有</div> " + "<div id='question" + i + "answer2' class='question" + i + "answer question-answer' onclick='selectAnswer(" + i + ",2)'>很少</div> " + "<div id='question" + i
					+ "answer3' class='question" + i + "answer question-answer' onclick='selectAnswer(" + i + ",3)'>有时</div> " + "<div id='question" + i + "answer4' class='question" + i
					+ "answer question-answer' onclick='selectAnswer(" + i + ",4)'> 较多</div> " + "<div id='question" + i + "answer5' class='question" + i
					+ "answer question-answer' onclick='selectAnswer(" + i + ",5)'>总是</div> " + "</li> " + "</ul> " + "<div class='question-line'></div> " + "</li> ";
			i++;
		});
		$("#question-accordion").html(str);
		// 折叠面板效果js
		var accordion_head = $('.question-accordion > li > a'), accordion_body = $('.question-accordion  li > .sub-menu');
		// Open the first tab on load
		accordion_head.first().addClass('active').next().slideDown('normal');
		// Click function
		accordion_head.on('click', function(event) {
			// Disable header links
			event.preventDefault();
			// Show and hide the tabs on click
			if ($(this).attr('class') != 'active') {
				accordion_body.slideUp('normal');
				$(this).next().stop(true, true).slideToggle('normal');
				accordion_head.removeClass('active');
				$(this).addClass('active');
			}
		});
	};

	Model.prototype.submitClick = function(event) {
		var qList = $(".question");
		var bh;
		var state;
		var score = "";
		for (i = 0; i < qList.length; i++) {
			bh = $(qList[i]).attr("bh");
			state = $(qList[i]).attr("state");
			if (state == "0") {
				swal({
					title : "警告",
					text : "还有题没答完呦！",
					confirmButtonText : "确定"
				});
				return;
			}
			if (score == "") {
				score += bh + "H" + state;
			} else {
				score += "I" + bh + "H" + state;
			}
		}
		var checks = this.getParent().comp("checkTemp");
		checks.setValue("fScore", score);
		var checkData = this.getParent().comp('checkData');
		var check = checkData.find([ 'fBelongDemand' ], [ checks.getValue('fDemandId') ]);
		if (check.length > 0) {
			check[0].val('fFeature', checks.getValue('fFeatureId'));
			check[0].val('fMediaId', checks.getValue('fMediaId'));
			check[0].val('fScore', checks.getValue('fScore'));
			check[0].val('fTime', justep.Date.toString(new Date()));
			check[0].val('fBelongSolutionId', '');
			check[0].val('fStatus', '0');
			//checkData.setRowState(check, checkData.STATE.EDIT);
		} else {
			var newCheck = checkData.newData({
				defaultValues : [ {
					"fID" : justep.UUID.createUUID(),
					"fBelongUserId" : localStorage.getItem("UserId"),
					"fBelongDemand" : checks.getValue('fDemandId'),
					"fFeature" :  checks.getValue('fFeatureId'),
					"fMediaId" : checks.getValue('fMediaId'),
					"fScore" : checks.getValue('fScore'),
					"fTime" : justep.Date.toString(new Date()),
					"fBelongSolutionId" : "",
					"fStatus" : "0"
				} ]
			});
			//checkData.setRowState(newCheck, checkData.STATE.NEW);
		}
		baas.sendRequest({
			"url" : "/jhapi",
			"action" : "saveCheck",
			"async" : false,
			"params" : {
				"checkData" : checkData.toJson(true)
			},
			"success" : function(resultData, xhr) {
				checkData.applyUpdates();
			}
		});
		justep.Portal.openWindow("$UI/jhApp/pages/result/success.w");
	}

	Model.prototype.questionDataCustomRefresh = function(event) {
		var checks = this.getParent().comp("checkTemp");
		if (checks.getCount() > 0) {
			var data = event.source;
			var params = {
				"beongDemandId" : checks.getValue("fDemandId")
			};
			var success = function(resultData) {
				var append = event.options && event.options.append;
				data.loadData(resultData, append);
			};
			baas.sendRequest({
				"url" : "/jhapi",
				"action" : "queryQuestion",
				"params" : params,
				"success" : success
			});
		}

	};

	return Model;
});
// 选择答案
function selectAnswer(obj, num) {

	$(".question" + obj + "answer").css("background-color", "white");
	$("#question" + obj + "answer" + num).css("background-color", "#fe6b5b");
	$("#qt" + (obj)).css("color", "#afafaf");
	$("#q" + (obj)).attr("state", num);
	$("#qt" + (obj + 1)).trigger("click");
}