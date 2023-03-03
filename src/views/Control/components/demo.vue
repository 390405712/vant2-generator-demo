<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" />
</template>

<script lang="jsx">
import FormGenerator from '@/components/Generator/FormGeneratorDemo'

export default {
  components: {
    FormGenerator
  },
  data: () => ({
    form: {},
    formOption: [
      {
        type: 'input',
        formItem: {
          prop: 'key1',
          label: '基础用法',
        },
        control: {
          slot: {
            suffix: (scope) => (<span>{{scope}}</span>),
            prefix: () => (<span>prefix</span>),
          }
        }
      },
    ],
  }),
}

// 未封装带输入建议的输入框组件 el-autocomplete 需用type:'slot'方式解决
</script>