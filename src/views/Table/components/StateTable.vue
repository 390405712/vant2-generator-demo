<template>
  <TableGenerator :data="tableData" :tableOption="tableOption" :cell-style="cellStyle" />
</template>

<script>
import { TableGenerator } from 'element-ui-generator'


export default {
  components: {
    TableGenerator
  },
  data: () => ({
    tableOption: [
      {
        prop: 'date',
        label: 'Date',
        width: '180'
      }, {
        prop: 'name',
        label: 'Name',
        width: '180'
      }, {
        prop: 'address',
        label: 'Address',
      },
    ],
    tableData: [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ],
  }),
  methods: {
    cellStyle({ row, rowIndex }) {
      if (rowIndex === 1) {
        return {
          backgroundColor: '#fdf6ec',
        }
      } else if (rowIndex === 3) {
        return {
          backgroundColor: '#f0f9eb',
        }
      }
      return {}
    }
  }
}
</script>