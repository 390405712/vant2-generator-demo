<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" />
</template>

<script>
import { FormGenerator } from 'element-ui-generator'


export default {
  components: {
    FormGenerator
  },
  data: () => ({
    form: {
      key: '文本值'
    },
    formOption: [
      {
        type: 'txt',
        formItem: {
          prop: 'key',
          label: '基础用法',
        },
      },
    ],
  }),
}

</script>