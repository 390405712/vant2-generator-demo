<template>
  <FormGenerator :inline="true" ref="FormGenerator" :model="form" :formOption="formOption" @submit="submit" />
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
      {
        type: 'select',
        formItem: {
          prop: 'region',
          label: 'Activity zone',
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
    ],
  }),
  methods: {
    submit() {
      console.log(this.$refs.FormGenerator);
    }
  },
}
</script>