<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption">
    <template #key2="scope">
      {{ scope }}
    </template>
    <template #key4="scope">
      <el-rate v-model="form.key4" />
    </template>
  </FormGenerator>
</template>

<script>
import { FormGenerator } from 'element-ui-generator'
import { Rate as ElRate } from 'element-ui'

export default {
  components: {
    FormGenerator
  },
  data: () => ({
    key55: '',
    form: {
      key1: '基础用法文本值',
      key2: '模板插槽文本值',
      key3: 'jsx插槽文本值',
      key4: 2,
      key5: 2,
    },
    formOption: [
      {
        type: 'slot',
        formItem: {
          prop: 'key1',
          label: '基础用法',
        },
      },
      {
        type: 'slot',
        formItem: {
          prop: 'key2',
          label: '模板插槽',
        },
      },
      {
        type: 'slot',
        formItem: {
          prop: 'key3',
          label: 'jsx插槽',
        },
        control: {
          slots: {
            default: (scope) => (<div style="word-break: break-all;">{JSON.stringify(scope)}</div>)
          }
        }
      },
      {
        type: 'slot',
        formItem: {
          prop: 'key4',
          label: '模板插槽(带组件)',
        },
      },
    ],
  }),
}

</script>