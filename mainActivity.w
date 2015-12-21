<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:mobile" sysParam="false">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"
    style="height:auto;left:275px;top:25px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="userData" idColumn="fUserId" onCustomRefresh="userDataCustomRefresh"> 
      <column label="用户ID" name="fUserId" type="String" xid="xid1"/>  
      <column label="用户手机" name="fPhone" type="String" xid="xid3"/>  
      <column label="用户昵称" name="fName" type="String" xid="xid2"/>  
      <column label="用户密码" name="fPassword" type="String" xid="xid4"/>  
      <column label="用户类型" name="fType" type="String" xid="xid5"/>  
      <column label="用户年龄" name="fAge" type="Integer" xid="xid6"/>  
      <column label="用户性别" name="fSex" type="String" xid="xid7"/>  
      <column label="用户所在国家" name="fCountry" type="String" xid="xid8"/>  
      <column label="用户所在省份" name="fProvince" type="String" xid="xid9"/>  
      <column label="用户所在城市" name="fCity" type="String" xid="xid10"/>  
      <column label="用户头像" name="fHead" type="String" xid="xid11"/>  
      <column label="用户创建时间" name="fCreateTime" type="DateTime" xid="xid12"/>  
      <data xid="default1">[]</data>
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="checkData" idColumn="fID" isTree="false" onCustomRefresh="checkDataCustomRefresh">
      <column label="检测ID" name="fID" type="String" xid="xid13"/>  
      <column label="所属用户" name="fBelongUserId" type="String" xid="xid14"/>  
      <column label="所属需求" name="fBelongDemand" type="String" xid="xid15"/>  
      <column label="类别" name="fFeature" type="String" xid="xid16"/>  
      <column label="图片" name="fMediaId" type="String" xid="xid17"/>  
      <column label="分数" name="fScore" type="String" xid="xid18"/>  
      <column label="检测时间" name="fTime" type="String" xid="xid19"/>  
      <column label="方案" name="fBelongSolutionId" type="String" xid="xid20"/>  
      <column label="状态" name="fStatus" type="String" xid="xid21"/>
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="checkTemp" idColumn="fDemandId">
      <column label="需求ID" name="fDemandId" type="String" xid="xid22"/>  
      <column label="检测类别" name="fFeatureId" type="String" xid="xid23"/>  
      <column label="图片" name="fMediaId" type="String" xid="xid24"/>  
      <column label="分数" name="fScore" type="String" xid="xid25"/>
    </div>
  </div>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
    active="0" xid="pages" wrap="false" slidable="false" swipe="false"> 
    <div class="x-contents-content" xid="main"/> 
  </div> 
</div>
