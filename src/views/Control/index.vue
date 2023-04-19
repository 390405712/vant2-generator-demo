<template>
  <div>
    <Cell is-link :title="activeName" @click="show = true" />
    <ActionSheet position="top" v-model="show" :actions="tabs" @select="onSelect" close-on-click-action />
    <component :is="Com[activeName]"></component>
  </div>
</template>

<script>
import { Cell, ActionSheet } from 'vant'

import Field from './components/Field.vue'
import Stepper from './components/Stepper.vue'
import Picker from './components/Picker.vue'
import Cascader from './components/Cascader.vue'
import Calendar from './components/Calendar.vue'
import Radio from './components/Radio.vue'
import Checkbox from './components/Checkbox.vue'
import DatetimePicker from './components/DatetimePicker.vue'
import Switch from './components/Switch.vue'
import Uploader from './components/Uploader.vue'
import Slot from './components/Slot.vue'

export default {
  name: 'Control',
  components: { Cell, ActionSheet },
  data() {
    return {
      show: false,
      activeName: '自定义插槽',
      Com: {
        '输入框': Field,
        '步进器': Stepper,
        '选择器': Picker,
        '单选框': Radio,
        '复选框': Checkbox,
        '开关': Switch,
        '时间选择': DatetimePicker,
        '日历': Calendar,
        '级联选择': Cascader,
        '文件上传': Uploader,
        '自定义插槽': Slot,
      },
      tabs: []
    }
  },
  methods: {
    onSelect(item) {
      this.activeName = item.name
      this.show = false
    }
  },
  mounted() {
    this.tabs = Object.keys(this.Com).reduce((acc, cur) => {
      acc.push({ name: cur })
      return acc
    }, [])
  }
}
</script>
