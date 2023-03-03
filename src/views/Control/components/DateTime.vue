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
        type: 'datetime',
        formItem: {
          prop: 'key1',
          label: '日期',
        },
      },
      {
        type: 'datetime',
        formItem: {
          prop: 'key2',
          label: '日期范围',
        },
        control: {
          type: "daterange",
        },
      },
      {
        type: 'datetime',
        formItem: {
          prop: 'key3',
          label: '日期时间',
        },
        control: {
          type: "datetime",
        },
      },
      {
        type: 'datetime',
        formItem: {
          prop: 'key4',
          label: '日期时间范围',
        },
        control: {
          type: "datetimerange",
        },
      },
      {
        type: 'time',
        formItem: {
          prop: 'key5',
          label: '时间',
        },
      },
      {
        type: 'time',
        formItem: {
          prop: 'key6',
          label: '时间范围',
        },
        control: {
          'is-range': true
        },
      },
    ],
  }),
}

</script>