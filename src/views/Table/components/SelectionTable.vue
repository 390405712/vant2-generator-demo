<template>
  <TableGenerator :data="tableData" :tableOption="tableOption" @selection-change="handleSelectionChange" />
</template>

<script>
import { TableGenerator } from 'element-ui-generator'
import { Message as ElMessage } from 'element-ui'

export default {
  components: {
    TableGenerator
  },
  data: () => ({
    tableOption: [
      {
        type: 'selection',
        width: '55'
      }, {
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
    handleSelectionChange(val) {
      console.log(111);
      ElMessage.closeAll()
      ElMessage.success(JSON.stringify(val))
    }
  },
}
</script>