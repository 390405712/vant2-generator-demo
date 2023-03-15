<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script>
import { FormGenerator, GeneratorUtils } from 'element-ui-generator'
import { RegExpMobilePhoneNunber } from 'element-ui-generator/dist/regexp'

console.log(RegExpMobilePhoneNunber);
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
          prop: 'phone1',
          label: '手机号',
          rules: {
            trigger: 'change',
            validator: vm.checkIphoneNum
          }
        },
      },
      {
        type: 'input',
        formItem: {
          prop: 'phone2',
          label: '手机号',
          rules: {
            trigger: 'change',
            validator: RegExpMobilePhoneNunber
          }
        },
      },
      {
        type: 'input',
        formItem: {
          prop: 'phone3',
          label: '手机号',
          rules: {
            trigger: 'change',
            message: '自定义校验提示',
            validator: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
          }
        },
      },
    ],
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
    GeneratorUtils.setRequired(this.formOption)
  },
}
</script>