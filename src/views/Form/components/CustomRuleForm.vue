<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" @submit="submit" :rules="rules" />
</template>

<script>
import { FormGenerator, GeneratorUtils } from 'element-ui-generator'

export default {
  components: {
    FormGenerator
  },
  data: (vm) => ({
    form: {},
    formOption: [
      {
        type: 'input',
        formItem: {
          prop: 'phone',
          label: '手机号',
          rules: {
            required: true,
            trigger: 'change',
            validator: vm.checkIphoneNum
          }
        },
      },
    ],
    rules: {}
  }),
  methods: {
    checkIphoneNum(
      rule,
      value,
    ) {
      if (!value) return Promise.reject('请输入手机号')
      if (!/(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
        return Promise.reject('手机格式有误')
      }
      return Promise.resolve()
    },
    submit() {
      console.log(this.$refs.FormGenerator);
    }
  },
  created() {
    this.rules = GeneratorUtils.getRules(this.formOption)
  },
}
</script>