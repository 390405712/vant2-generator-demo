<template>
  <FormGenerator type="search" ref="FormGenerator" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script>
import { FormGenerator } from 'element-ui-generator'


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
          prop: 'key1',
          label: '输入框1',
        },
      },
      {
        type: 'input',
        formItem: {
          prop: 'key2',
          label: '输入框2',
        },
      },
      {
        type: 'select',
        formItem: {
          prop: 'key3',
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
      {
        type: 'datetime',
        formItem: {
          prop: 'key4',
          label: '日期',
        },
      },
    ],
  }),
  methods: {
    submit() {
      console.log(this.$refs.FormGenerator);
    }
  },
}
</script>