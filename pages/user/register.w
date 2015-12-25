<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="userData" idColumn="fUserId" confirmRefresh="true" confirmDelete="true" onCustomRefresh="userDataCustomRefresh"> 
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
    xid="register"> 
    <div class="x-panel-top" xid="registerTop"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="注册"
        class="x-titlebar"> 
        <div class="x-titlebar-left"  > 
          <a component="$UI/system/components/justep/button/button" label="" onClick="{operation:'window.close'}"
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">注册</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="registerContent"> 
      <table class="registerTable"> 
        <tr> 
          <td class="registerIcon" align="center"> 
            <img src="$UI/JianhaoAndroid/images/user/phone.png"/> 
          </td>  
          <td class="registerInput"> 
            <input xid="phone" type="text" placeholder="请输入手机号"/> 
          </td> 
        </tr> 
      </table>  
      <table class="registerTable"> 
        <tr> 
          <td class="registerIcon" align="center"> 
            <img src="$UI/JianhaoAndroid/images/user/mima.png"/> 
          </td>  
          <td class="registerInput"> 
            <input xid="password" type="text" placeholder="密码不能少于6位"/> 
          </td> 
        </tr> 
      </table>  
      <table class="registerTable"> 
        <tr> 
          <td class="registerIcon" align="center"> 
            <img src="$UI/JianhaoAndroid/images/user/yanzhengma.png"/> 
          </td>  
          <td class="registerInput"> 
            <input xid="code" type="text" placeholder="输入验证码"/> 
          </td>  
          <td class="registerYanzheng" align="right"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-default"
              label="获取验证码" xid="btnYanzheng"> 
              <i xid="i1"/>  
              <span xid="span1"/> 
            </a> 
          </td> 
        </tr> 
      </table>  
      <a component="$UI/system/components/justep/button/button" class="btn btn-default registerButton"
        label="注册" xid="btnRegister" onClick="btnRegisterClick"> 
        <i xid="i1"/>  
        <span xid="span1"/> 
      </a>  
      <div class="registerBottom"> 
        <span class="registerBottomTip">已有账号！</span>  
        <span class="registerBottomBack">返回登陆</span> 
      </div> 
    </div> 
  </div> 
</div>
