<template>
  <TableGenerator :data="tableData" :tableOption="tableOption" :showIndex="false" row-key="id" lazy :load="load"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" />
</template>

<script>
import TableGenerator from '@/components/Generator/TableGenerator'

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
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
          {
            id: 31,
            date: '2016-05-01',
            name: 'wangxiaohu',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: 'wangxiaohu',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      },
      {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
        hasChildren: true
      },
    ],
  }),
  methods: {
    load(row, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 33,
            date: '2016-05-01',
            name: 'wangxiaohu',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            id: 34,
            date: '2016-05-01',
            name: 'wangxiaohu',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ])
      }, 1000)
    }
  }
}
</script>