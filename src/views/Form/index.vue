<template>
  <div>
    <Cell is-link :title="activeName" @click="show = true" />
    <ActionSheet position="top" v-model="show" :actions="tabs" @select="onSelect" close-on-click-action />
    <component :is="Com[activeName]"></component>
  </div>
</template>

<script>
import { Cell, ActionSheet } from 'vant'

import TypicalForm from './components/TypicalForm.vue'
import RuleForm from './components/RuleForm.vue'
import CustomRuleForm from './components/CustomRuleForm.vue'

export default {
  name: 'Form',
  components: { Cell, ActionSheet },
  data() {
    return {
      show: false,
      activeName: '典型表单',
      Com: {
        '典型表单': TypicalForm,
        '校验表单': RuleForm,
        '自定义校验和按钮': CustomRuleForm,
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
<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
}
</style>