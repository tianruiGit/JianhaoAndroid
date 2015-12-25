<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:mobile" sysParam="false">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"
    style="height:auto;left:275px;top:25px;"> 
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
