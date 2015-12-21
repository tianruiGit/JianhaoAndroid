<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="questionData" idColumn="fID" onCustomRefresh="questionDataCustomRefresh"> 
      <column label="问题ID" name="fID" type="String" xid="xid1"/>  
      <column label="问题所属需求" name="fBelongDemand" type="String" xid="xid2"/>  
      <column label="问题所属体质" name="fBelongPhysique" type="String" xid="xid3"/>  
      <column label="问题内容" name="fContent" type="String" xid="xid4"/> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="question"> 
    <div class="x-panel-top" xid="questionTop"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        style="background-color:#fe6b5b;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title"> 
          <img style="width:50px;" src="$UI/jhApp/images/common/title.png"/> 
        </div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="questionContent"> 
      <table id="shimianTip" style="width:100%;height:40px;background-color:#fe6b5b;"> 
        <tr style="height:15px;"> 
          <td align="left" style="padding-left:10px;font-size:13px;color:white;">请如实回答下面的问题</td> 
        </tr>  
        <tr style="height:25px;"> 
          <td align="center"> 
            <img style="width:200px;" src="$UI/jhApp/images/step/step3.png"/> 
          </td> 
        </tr> 
      </table>  
      <ul id="question-accordion" class="question-accordion"></ul> 
      <table style="width:100%;margin-top:30px;"> 
        <tr> 
          <td align="center"> 
            <button bind-click="submitClick" style="width:80px;height:30px;border-radius:15px;background-color:#fe6b5b;border:0px;color:white;font-size:14px;">提 交</button> 
          </td> 
        </tr> 
      </table> 
    </div> 
  </div> 
</div>
