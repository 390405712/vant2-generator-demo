<template>
  <TableGenerator :data="tableData" :tableOption="tableOption">
    <template #date="scope">
      {{ scope }}
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
    tableOption: [
      {
        prop: 'date',
        label: 'Date',
        width: '180',
        slot: {
          header: () => ('自定义标题')
        },
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
}
</script>