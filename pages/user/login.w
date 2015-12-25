<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="login"> 
    <div class="x-panel-top" xid="loginTop"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="登陆"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">登陆</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="loginContent"> 
      <table class="loginTable"> 
        <tr> 
          <td class="loginIcon" align="center"> 
            <img src="$UI/JianhaoAndroid/images/user/phone.png"/> 
          </td>  
          <td class="loginInput"> 
            <input xid="phone" type="text" placeholder="请输入手机号"/> 
          </td> 
        </tr> 
      </table>  
      <table class="loginTable"> 
        <tr> 
          <td class="loginIcon" align="center"> 
            <img src="$UI/JianhaoAndroid/images/user/mima.png"/> 
          </td>  
          <td class="loginInput"> 
            <input xid="password" type="text" placeholder="密码不能少于6位"/> 
          </td> 
        </tr> 
      </table>  
      <div class="loginGetback"> 
        <span>找回密码</span> 
      </div>  
      <a component="$UI/system/components/justep/button/button" class="btn btn-default loginButton"
        xid="btnLogin" onClick="btnLoginClick">登陆</a>  
      <a component="$UI/system/components/justep/button/button" class="btn btn-default loginButton"
        xid="btnRegister" onClick="btnRegisterClick">注册</a>  
      <table class="loginDisanfang"> 
        <tr> 
          <td align="center"> 
            <img class="loginDisanfangImg" src="$UI/JianhaoAndroid/images/user/disanfang.png"/> 
          </td> 
        </tr> 
      </table>  
      <table class="loginDisanfang"> 
        <tr> 
          <td align="right">
          	<img class="loginDisanfangLeft" src="$UI/JianhaoAndroid/images/user/qq.png"/>
          </td>  
          <td align="left">
          	<img class="loginDisanfangRight" src="$UI/JianhaoAndroid/images/user/weixin.png"/>
          </td> 
        </tr> 
      </table> 
    </div> 
  </div> 
</div>
