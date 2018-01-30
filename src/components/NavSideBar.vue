<template>
  <div class="leftBar">
    <div>
      <p>金凤的管理软件</p>
    </div>
    <el-menu class="el-menu-vertical-demo" router>
      <el-menu-item index="/">
        <i class="el-icon-picture"></i>
        <span>Hello</span>
      </el-menu-item>
      <el-menu-item index="/styles">
        <i class="el-icon-star-off"></i>
        <span>styles</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped>
  .leftBar {
    position: fixed;
    box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.2);
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    width: 200px;
  }
  .leftBar el-menu-item:hover {
    background-color: #D3EDE0;
  }
  .el-menu-item i {
    color: #0F212E;
  }
  .el-menu-item {
    color: #0F212E;
  }
  .el-menu-item span {
    margin-left: 20px;
  }
  .el-menu {
    border-right: solid 0px #e6e6e6;
  }
</style>
