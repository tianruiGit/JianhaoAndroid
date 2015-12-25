<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="userData" idColumn="fUserId" onCustomRefresh="userDataCustomRefresh" confirmRefresh="true"
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
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="wdHead"
    src="$UI/JianhaoAndroid/pages/user/head.w" showTitle="false" width="100%" height="100%" onReceive="wdHeadReceive"/>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="main"> 
    <div class="x-panel-content" xid="mainContent"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents" swipe="false"> 
        <div class="x-contents-content" xid="bianzheng"> 
          <div id="bianzhengGuanggao"> 
            <div id="kinMaxShow"> 
              <div> 
                <a href="#" target="_blank"> 
                  <img style="height:150px;" src="$UI/JianhaoAndroid/images/bianzheng/lunbo/guanggao.jpg"/> 
                </a> 
              </div>  
              <div> 
                <a href="#" target="_blank"> 
                  <img style="height:150px;" src="$UI/JianhaoAndroid/images/bianzheng/lunbo/2.jpg"/> 
                </a> 
              </div> 
            </div> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="zaowu"/>  
        <div class="x-contents-content" xid="faxian"> 
          <div component="$UI/system/components/justep/windowContainer/windowContainer"
            class="x-window-container" xid="windowContainer2"/> 
        </div>  
        <div class="x-contents-content" xid="me"> 
          <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
            xid="user"> 
            <div class="x-panel-top" xid="userTop"> 
              <div component="$UI/system/components/justep/titleBar/titleBar"
                title="我" class="x-titlebar"> 
                <div class="x-titlebar-left"/>  
                <div class="x-titlebar-title">我</div>  
                <div class="x-titlebar-right reverse"/> 
              </div> 
            </div>  
            <div class="x-panel-content" xid="userContent"> 
              <table class="user-head"> 
                <tr> 
                  <td align="center"> 
                    <img bind-attr-src=" $model.userData.val(&quot;fHead&quot;)" bind-click="uploadHeadClick"
                      class="user-head-img"/> 
                  </td> 
                </tr> 
              </table>  
              <table class="user-info-line"> 
                <tr bind-click="updateNameClick"> 
                  <td class="user-info-icon" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/name.png"/> 
                  </td>  
                  <td class="user-info-tag" align="left">姓名</td>  
                  <td class="user-info-content" align="right"> 
                    <input component="$UI/system/components/justep/input/input"
                      class="form-control user-value" xid="userName" bind-value="$model.userData.val('fName') "
                      style="background-color:transparent;" disabled="true" readonly="true"/> 
                  </td>  
                  <td class="user-info-right" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/right.png"/> 
                  </td> 
                </tr> 
              </table>  
              <table class="user-info-line"> 
                <tr bind-click="userLoginClick"> 
                  <td class="user-info-icon" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/login.png"/> 
                  </td>  
                  <td class="user-info-tag" align="left">账户登录</td>  
                  <td class="user-info-content" align="right"> 
                    <input component="$UI/system/components/justep/input/input"
                      class="form-control user-value" xid="userPhone" style="background-color:transparent;"
                      disabled="true" readonly="true"/> 
                  </td>  
                  <td class="user-info-right" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/right.png"/> 
                  </td> 
                </tr> 
              </table>  
              <table class="user-info-line"> 
                <tr bind-click="updateSexClick"> 
                  <td class="user-info-icon" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/sex.png"/> 
                  </td>  
                  <td class="user-info-tag" align="left">性别</td>  
                  <td class="user-info-content" align="right"> 
                    <input component="$UI/system/components/justep/input/input"
                      class="form-control user-value" xid="userSex" bind-value=" ( $model.userData.val(&quot;fSex&quot;)   == '1') ? '男':'女'"
                      style="background-color:transparent;" disabled="true" readonly="true"/> 
                  </td>  
                  <td class="user-info-right" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/right.png"/> 
                  </td> 
                </tr> 
              </table>  
              <table class="user-info-line"> 
                <tr bind-click="updateAgeClick"> 
                  <td class="user-info-icon" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/age.png"/> 
                  </td>  
                  <td class="user-info-tag" align="left">年龄</td>  
                  <td class="user-info-content" align="right"> 
                    <input component="$UI/system/components/justep/input/input"
                      class="form-control user-value" xid="userAge" bind-value="$model.userData.val('fAge') + '岁'"
                      style="background-color:transparent;" disabled="true" readonly="true"/> 
                  </td>  
                  <td class="user-info-right" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/right.png"/> 
                  </td> 
                </tr> 
              </table>  
              <table class="user-info-line"> 
                <tr bind-click="updateHeightClick"> 
                  <td class="user-info-icon" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/address.png"/> 
                  </td>  
                  <td class="user-info-tag" align="left">身高</td>  
                  <td class="user-info-content" align="right"> 
                    <input component="$UI/system/components/justep/input/input"
                      class="form-control user-value" xid="userHeight" bind-value="$model.userData.val('fHeight') + 'cm'"
                      style="background-color:transparent;" disabled="true" readonly="true"/> 
                  </td>  
                  <td class="user-info-right" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/right.png"/> 
                  </td> 
                </tr> 
              </table>  
              <table class="user-info-line"> 
                <tr bind-click="updateCityClick"> 
                  <td class="user-info-icon" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/address.png"/> 
                  </td>  
                  <td class="user-info-tag" align="left">城市</td>  
                  <td class="user-info-content" align="right"> 
                    <input component="$UI/system/components/justep/input/input"
                      class="form-control user-value" xid="userCity" bind-ref="userData.ref('fCity')"
                      style="background-color:transparent;" disabled="true" readonly="true"/> 
                  </td>  
                  <td class="user-info-right" align="center"> 
                    <img src="$UI/JianhaoAndroid/images/user/right.png"/> 
                  </td> 
                </tr> 
              </table>  
              <table class="user-info-bottom"> 
                <tr> 
                  <td align="center"> 
                    <a component="$UI/system/components/justep/button/button"
                      class="btn user-info-btn" label="用户退出" xid="userExit"> 
                      <i xid="i1"/>  
                      <span xid="span1"/> 
                    </a> 
                  </td> 
                </tr> 
              </table> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-bottom" xid="mainBottom"> 
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified"
        tabbed="true" xid="menu" style="background-color:white;"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="btnBiangzheng" target="bianzheng" onClick="btnBiangzhengClick" style="background-color:transparent;"
          tabindex="0"> 
          <img id="btnBiangzhengIcon" class="menu-icon" src="$UI/JianhaoAndroid/images/main/bz1.png"/> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="btnZaowu" target="zaowu" tabindex="1" onClick="btnZaowuClick"> 
          <img id="btnZaowuIcon" class="menu-icon" src="$UI/JianhaoAndroid/images/main/zw2.png"/> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="btnFaxian" target="faxian" tabindex="2" onClick="btnFaxianClick"> 
          <img id="btnFaxianIcon" class="menu-icon" src="$UI/JianhaoAndroid/images/main/fx2.png"/> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="btnMe" target="me" tabindex="3" onClick="btnMeClick"> 
          <img id="btnMeIcon" class="menu-icon" src="$UI/JianhaoAndroid/images/main/me2.png"/> 
        </a> 
      </div> 
    </div> 
  </div> 
</div>
