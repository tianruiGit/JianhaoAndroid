<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="userData" idColumn="fUserId" 
      confirmDelete="true"> 
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
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="initInfo"> 
    <div class="x-panel-content" xid="initInfoContent"> 
      <label class="initInfoLable">请填写您的基本信息</label>  
      <input class="initInfoInput" placeholder="你的昵称" type="text" xid="nickName"/>  
      <input class="initInfoInput" placeholder="你的年龄" type="text" xid="age"/>  
      <input class="initInfoInput" placeholder="你的身高" type="text" xid="height"/>  
      <img class="initInfoLine" src="$UI/JianhaoAndroid/images/user/line.png"/>  
      <table class="initInfoTable"> 
        <tr> 
          <td class="initInfoTableTd" align="center"> 
            <img xid="boyImage" src="$UI/JianhaoAndroid/images/user/sexboy2.png"
              bind-click="boyImageClick"/> 
          </td>  
          <td class="initInfoTableTd" align="center"> 
            <img xid="girlImage" src="$UI/JianhaoAndroid/images/user/sexgirl2.png"
              bind-click="girlImageClick"/> 
          </td> 
        </tr>  
        <tr> 
          <td class="initInfoTableTd" align="center"> 
            <span xid="boyName">男</span> 
          </td>  
          <td class="initInfoTableTd" align="center"> 
            <span xid="girlName">女</span> 
          </td> 
        </tr> 
      </table>  
      <a component="$UI/system/components/justep/button/button" style="height:40px;"
        class="btn btn-default initInfoButton" label="确认" xid="initInfoSure" onClick="initInfoSureClick"> 
        <i xid="i1"/>  
        <span xid="span1"/> 
      </a> 
    </div> 
  </div> 
</div>
