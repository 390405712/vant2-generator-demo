<template>
  <div class="container">
    <el-tabs v-model="activeName" tab-position="left">
      <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item" :name="item">
        <component :is="Com[item]"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Input from './components/Input.vue'
import InputNumber from './components/InputNumber.vue'
import Select from './components/Select.vue'
import Cascader from './components/Cascader.vue'
import Radio from './components/Radio.vue'
import Checkbox from './components/Checkbox.vue'
import DateTime from './components/DateTime.vue'
import Switch from './components/Switch.vue'
import Upload from './components/Upload.vue'
import Txt from './components/Txt.vue'
import Slot from './components/Slot.vue'

export default {
  name:'控件',
  data() {
    return {
      activeName: 'input',
      Com: {
        'input': Input,
        'input-number': InputNumber,
        'select': Select,
        'cascader': Cascader,
        'radio': Radio,
        'checkbox': Checkbox,
        'datetime': DateTime,
        'switch': Switch,
        'upload': Upload,
        'txt': Txt,
        'slot': Slot,
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