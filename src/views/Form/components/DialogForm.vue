<template>
  <div>
    <el-button type="primary" @click="visible = true">打开dialog</el-button>
    <el-dialog :visible.sync="visible" title="弹窗表单" width="400px">
      <FormGenerator type="dialog" ref="FormGenerator" :model="form" :formOption="formOption" :rules="rules"
        @submit="submit" />
        <!-- TODO 完善type=dialog 样式 -->
    </el-dialog>
  </div>
</template>

<script>
import FormGenerator from '@/components/Generator/FormGenerator'
import * as GeneratorUtils from '@/components/Generator/utils'

export default {
  components: {
    FormGenerator
  },
  data: (vm) => ({
    visible: false,
    form: {},
    formOption: [
      {
        type: 'input',
        formItem: {
          prop: 'key1',
          label: '输入框',
        },
      },
      {
        type: 'select',
        formItem: {
          prop: 'key2',
          label: '选择器',
        },
        control: {
          option: [
            {
              value: 'Option1',
              label: 'Option1',
            },
            {
              value: 'Option2',
              label: 'Option2',
            },
          ]
        },
      },
    ],
    rules: {}
  }),
  methods: {
    submit() {
      console.log(this.$refs.FormGenerator);
    }
  },
  created() {
    this.rules = GeneratorUtils.getRules(this.formOption)
  },
}
</script>