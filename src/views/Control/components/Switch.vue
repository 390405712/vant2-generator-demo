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
    form: {},
    formOption: [
      {
        type: 'switch',
        formItem: {
          prop: 'key1',
          label: '基础用法',
        },
      },
      {
        type: 'switch',
        formItem: {
          prop: 'key2',
          label: '文字描述',
        },
        control: {
          activeText: "Pay by month",
          inactiveText: "Pay by year"
        }
      },
      {
        type: 'switch',
        formItem: {
          prop: 'key3',
          label: '显示自定义图标',
        },
        control: {
          activeIconClass: 'el-icon-date',
          inactiveIconClass: 'el-icon-search'
        }
      },
      {
        type: 'switch',
        formItem: {
          prop: 'key4',
          label: '扩展的value类型',
        },
        control: {
          activeValue: "100",
          inactiveValue: "0"
        }
      },
      {
        type: 'switch',
        formItem: {
          prop: 'key5',
          label: '禁用状态',
        },
        control: {
          disabled: true
        }
      },
    ],
  }),
}

</script>