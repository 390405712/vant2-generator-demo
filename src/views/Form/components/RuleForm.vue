<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script>
import { FormGenerator, GeneratorUtils } from 'element-ui-generator'

export default {
  components: {
    FormGenerator
  },
  data: (vm) => ({
    form: {
      type: []
    },
    formOption: [
      {
        type: 'input',
        formItem: {
          prop: 'name',
          label: 'Activity name',
        },
      },
      {
        type: 'select',
        formItem: {
          prop: 'region',
          label: 'Activity zone',
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
      {
        type: 'date-time-picker',
        formItem: {
          prop: 'date',
          label: 'Activity time',
        },
        control: {
          type: "datetime"
        },
      },
      {
        type: 'switch',
        formItem: {
          prop: 'delivery',
          label: 'Instant delivery',
        },
      },
      {
        type: 'checkbox',
        formItem: {
          prop: 'type',
          label: 'Activity type',
        },
        control: {
          option: [
            {
              value: 'Online activities',
              label: 'Online activities',
            }, {
              value: 'Promotion activities',
              label: 'Promotion activities',
            }, {
              value: 'Offline activities',
              label: 'Offline activities',
            },
            {
              value: 'Simple brand exposure',
              label: 'Simple brand exposure',
            },
          ]
        },
      },
      {
        type: 'radio',
        formItem: {
          prop: 'resource',
          label: 'Resources',
        },
        control: {
          option: [
            {
              value: 'Sponsor',
              label: 'Sponsor',
            }, {
              value: 'Venue',
              label: 'Venue',
            },
          ]
        },
      },
      {
        type: 'input',
        formItem: {
          prop: 'form',
          label: 'Activity form',
        },
        control: {
          type: 'textarea'
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'omitKey',
          label: '非必填字段',
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
    GeneratorUtils.setRequired(this.formOption, ['omitKey'])
  },
}
</script>