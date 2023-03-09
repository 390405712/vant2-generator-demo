<template>
  <div class="container">
    <el-tabs v-model="activeName" tab-position="left">
      <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item" :name="item">
        <component v-if="activeName === item" :is="Com[item]"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AddOrDelForm from './components/AddOrDelForm.vue'
import CustomButtonForm from './components/CustomButtonForm.vue'
import CustomRuleForm from './components/CustomRuleForm.vue'
import DialogForm from './components/DialogForm.vue'
import InlineForm from './components/InlineForm.vue'
import NormalForm from './components/NormalForm.vue'
import PositionSizeForm from './components/PositionSizeForm.vue'
import RuleForm from './components/RuleForm.vue'
import SearchForm from './components/SearchForm.vue'
import TypicalForm from './components/TypicalForm.vue'
import CtstomStyleForm from './components/CtstomStyleForm.vue'

export default {
  name:'表单',
  data() {
    return {
      activeName: '自定义校验表单',
      Com: {
        '典型表单': TypicalForm,
        '行内表单': InlineForm,
        '对齐方式与尺寸控制': PositionSizeForm,
        '校验表单': RuleForm,
        '自定义校验表单': CustomRuleForm,
        '添加/删除表单项': AddOrDelForm,
        '弹窗表单': DialogForm,
        '搜索表单': SearchForm,
        '自定义按钮': CustomButtonForm,
        '自定义样式表单': CtstomStyleForm,
      },
      tabs: []
    }
  },
  mounted() {
    this.tabs = Object.keys(this.Com)
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
}
</style>