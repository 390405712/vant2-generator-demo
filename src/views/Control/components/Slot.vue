<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption">
    <template #slotKey="scope">
      <el-rate v-model="form.slotKey" />
      {{ scope }}
    </template>
  </FormGenerator>
</template>

<script>
import FormGenerator from '@/components/Generator/FormGenerator'

export default {
  components: {
    FormGenerator
  },
  data: () => ({
    form: {
      slotKey: 5
    },
    formOption: [
      {
        type: 'slot',
        formItem: {
          prop: 'slotKey',
          label: '自定义插槽',
        },
      },
    ],
  }),
}

</script>