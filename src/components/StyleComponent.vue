<template>
  <div class="page">
    <div class="pageCon">
      <div>
        <h2>Panel</h2>
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Panel title</h3>
          </div>
          <div class="panel-body">
            Panel body ...
          </div>
        </div>
      </div>

      <div>
        <h2>文字</h2>
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">链接</h3>
          </div>
          <div class="panel-body">
            <!--链接 代码开始-->
            <a href="">默认</a>
            <a href="" class="disabled">不可点</a>
            <!--链接 代码结束-->
          </div>
        </div>
      </div>

      <!--div>
        <h2>面包屑</h2>
        <div class="panel">
          <div>
            将 data() 中 pageHeadInfo.breadcrumb 赋值正确即可
          </div>
        </div>
      </div-->

      <div>
        <h2>Tabs 标签页</h2>
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">样式1</h3>
          </div>
          <div class="panel-body">
            <!--代码开始-->
            <el-tabs v-model="dataInfo.activeName" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
            <!--代码结束-->
          </div>
        </div>
      </div>

      <div>
        <h2>Button</h2>
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Element UI button</h3>
          </div>
          <div class="panel-body">
            <span>可点击： </span>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>

            <br><br>
            <span>不可点： </span>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="primary" plain disabled>主要按钮</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function first() {
    console.log('I am Styles');
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  data() {
    return {
      dataInfo: {
        activeName: 'second',
      },
    };
  },
};
</script>
