<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption"/>
</template>

<script>
import { FormGenerator } from 'element-ui-generator'


export default {
  components: {
    FormGenerator
  },
  data: () => ({
    form: {},
    formOption: [
      {
        type: 'input-number',
        formItem: {
          prop: 'key1',
          label: '基础用法',
        },
      },
      {
        type: 'input-number',
        formItem: {
          prop: 'key2',
          label: '禁用状态',
        },
        control: {
          disabled: true
        }
      },
      {
        type: 'input-number',
        formItem: {
          prop: 'key3',
          label: '步数',
        },
        control: {
          step: 2
        }
      },
      {
        type: 'input-number',
        formItem: {
          prop: 'key4',
          label: '严格步数',
        },
        control: {
          step: 2,
          stepStrictly: true
        }
      },
      {
        type: 'input-number',
        formItem: {
          prop: 'key5',
          label: '精度',
        },
        control: {
          step: 0.1,
          precision: 2,
          max: 10
        }
      },
      {
        type: 'input-number',
        formItem: {
          prop: 'key6',
          label: '尺寸',
        },
        control: {
          size: 'mini'
        }
      },
      {
        type: 'input-number',
        formItem: {
          prop: 'key7',
          label: '按钮位置',
        },
        control: {
          controlsPosition: "right"
        }
      },
    ],
  }),
}

</script>