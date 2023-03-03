<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" />
</template>

<script>
import FormGenerator from '@/components/Generator/FormGenerator'

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