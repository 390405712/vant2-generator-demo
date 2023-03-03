<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" @submit="submit">
    <template>
      <el-button @click="onClick" type="primary" round>自定义按钮</el-button>
    </template>
  </FormGenerator>
</template>

<script>
import FormGenerator from '@/components/Generator/FormGenerator'

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
          prop: 'name',
          label: 'Activity name',
        },
      },
    ],
  }),
  methods: {
    onClick() {
      this.$refs.FormGenerator.submit()
    },
    submit() {
      console.log(this.$refs.FormGenerator);
    }
  },
}
</script>