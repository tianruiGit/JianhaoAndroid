<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="userData" idColumn="fUserId" confirmRefresh="true" confirmDelete="true"> 
      <column label="用户ID" name="fUserId" type="String" xid="xid1"/>  
      <column label="用户手机" name="fPhone" type="String" xid="xid3"/>  
      <column label="用户昵称" name="fName" type="String" xid="xid2"/>  
      <column label="用户密码" name="fPassword" type="String" xid="xid4"/>  
      <column label="用户类型" name="fType" type="String" xid="xid5"/>  
      <column label="用户年龄" name="fAge" type="Integer" xid="xid6"/>  
      <column label="用户性别" name="fSex" type="String" xid="xid7"/>  
      <column label="用户身高" name="fHeight" type="String" xid="xid13"/>  
      <column label="用户所在国家" name="fCountry" type="String" xid="xid8"/>  
      <column label="用户所在省份" name="fProvince" type="String" xid="xid9"/>  
      <column label="用户所在城市" name="fCity" type="String" xid="xid10"/>  
      <column label="用户头像" name="fHead" type="String" xid="xid11"/>  
      <column label="用户创建时间" name="fCreateTime" type="DateTime" xid="xid12"/>  
      <master data="userData" xid="default1"/> 
    </div> 
  </div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver"
    xid="wrHead" onReceive="wrHeadReceive" style="left:6px;top:62px;"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="head"> 
    <div class="x-panel-top" xid="headTop"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="设置头像"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left"
            xid="backBtn" onClick="backBtnClick"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">设置头像</div>  
        <div class="x-titlebar-right reverse"></div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="headContent"> 
      <div class="container"> 
        <center> 
          <div id="imagebox" class="imageBox" style="margin-top:10px;"> 
            <div class="thumbBox"/>  
            <div class="spinner" style="display: none"/> 
          </div>  
          <div class="action"> 
            <div class="new-contentarea tc" style="width:160px;"> 
              <a href="javascript:void(0)" class="upload-img"> 
                <label for="upload-file">选择图片</label> 
              </a>  
              <input type="file" class="" name="upload-file" id="upload-file"/> 
            </div>  
            <input id="btnCrop" type="button" class="Btnsty_peyton" value="OK"/>  
            <div style="float:right;width:25px;margin-right:15px;"> 
              <input type="button" style="width:25px;height:25px;line-height:25px;"
                id="btnZoomIn" class="Btnsty_peyton" value="+"/>  
              <input type="button" style="width:25px;height:25px;line-height:25px;margin-top:7px;"
                id="btnZoomOut" class="Btnsty_peyton" value="-"/> 
            </div>  
            <!--       <a href="javascript:void(0)" id="btnRotate" style="float:right;margin-right:10px;font-size:30px;" class="Btnsty_peyton" > 
                             <i class="icon-ios7-refresh-empty"/>  
                          </a>   --> 
          </div> 
        </center> 
      </div> 
    </div> 
  </div> 
</div>
