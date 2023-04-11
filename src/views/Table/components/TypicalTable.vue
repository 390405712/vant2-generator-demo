<template>
  <TableGenerator :data="tableData" :tableOption="tableOption" :loading="loading">
    <template #operation="scope">
      <el-button type="primary">Primary</el-button>
    </template>
  </TableGenerator>
</template>

<script>
import { TableGenerator } from 'element-ui-generator'

export default {
  components: {
    TableGenerator
  },
  data: () => ({
    loading: false,
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
    tableData: [],
  }),
  mounted() {
    this.loading = true
    setTimeout(() => {
      this.tableData = [
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
      ]
      this.loading = false
    }, 1000);
  }
}
</script>