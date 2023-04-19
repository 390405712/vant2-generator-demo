<template>
  <div class="phone">
    <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption">
      <template #key2="scope">
        {{ scope }}
      </template>
      <template #key4="scope">
        <Rate v-model="form.key4" />
      </template>
    </FormGenerator>
  </div>
</template>

<script>
import { FormGenerator } from 'vant2-generator'
import { Rate } from 'vant';

export default {
  components: {
    FormGenerator, Rate
  },
  data: (vm) => ({
    form: {
      key1: '基础用法文本值',
      key2: '模板插槽文本值',
      key3: 'jsx插槽文本值',
      key4: 2,
    },
    formOption: [
      {
        type: 'slot',
        formItem: {
          name: 'key1',
          label: '基础用法',
        },
      },
      {
        type: 'slot',
        formItem: {
          name: 'key2',
          label: '模板插槽',
        },
      },
      {
        type: 'slot',
        formItem: {
          name: 'key3',
          label: 'jsx插槽',
        },
        control: {
          slots: {
            input: (scope) => (<div style="word-break: break-all;">{JSON.stringify(scope)}</div>)
          }
        }
      },
      {
        type: 'slot',
        formItem: {
          name: 'key4',
          label: '模板插槽(带组件)',
        },
      },
    ],
  }),
}

</script>