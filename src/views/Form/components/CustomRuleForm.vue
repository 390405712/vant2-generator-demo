<template>
  <div>
    <div class="phone">
      <FormGenerator :model="form" :formOption="formOption" @submit="submit">
        <template>
          <Button block type="primary" native-type="submit">提交</Button>
        </template>
      </FormGenerator>
    </div>
    <JsonViewer :value="form" expand previewMode />
    <JsonViewer :value="formOption" expand previewMode />
  </div>
</template>

<script>
import { FormGenerator, GeneratorUtils } from 'vant2-generator'
import { Button } from 'vant';
import { RegExpMobilePhoneNunber } from 'common-rules'

export default {
  components: {
    FormGenerator, Button
  },
  data: () => ({
    form: {},
    formOption: [
      {
        type: 'field',
        formItem: {
          name: 'phone1',
          label: '手机号',
          rules: [{
            trigger: 'onChange',
            validator: (val) =>
              new Promise((resolve) => {
                resolve(RegExpMobilePhoneNunber.test(val));
              })
          }]
        },
      },
      {
        type: 'field',
        formItem: {
          name: 'phone2',
          label: '手机号',
          rules: [{
            trigger: 'onChange',
            pattern: RegExpMobilePhoneNunber
          }]
        },
      },
      {
        type: 'field',
        formItem: {
          name: 'phone3',
          label: '手机号',
          rules: [{
            trigger: 'onChange',
            message: '自定义校验提示',
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
          }]
        },
      },
    ],
  }),
  created() {
    GeneratorUtils.setRequired(this.formOption)
    this.formOption.forEach(item => {
      item.popup = { getContainer: '.FormGenerator' }
    })
  },
  methods: {
    submit() {
      console.log(this.$refs.FormGenerator);
    }
  },
}
</script>