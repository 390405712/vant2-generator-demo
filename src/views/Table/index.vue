<template>
  <div class="container">
    <el-tabs v-model="activeName" tab-position="left">
      <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item" :name="item">
        <component v-if="activeName === item" :is="Com[item]"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BorderTable from './components/BorderTable.vue'
import CurrentRowTable from './components/CurrentRowTable.vue'
import ExpandTable from './components/ExpandTable.vue'
import FixedTable from './components/FixedTable.vue'
import FormatTable from './components/FormatTable.vue'
import HeightTable from './components/HeightTable.vue'
import IndexTable from './components/IndexTable.vue'
import MegerTable from './components/MegerTable.vue'
import MultilevelHeadTable from './components/MultilevelHeadTable.vue'
import NoStripeTable from './components/NoStripeTable.vue'
import SelectionTable from './components/SelectionTable.vue'
import SlotTable from './components/SlotTable.vue'
import SortTable from './components/SortTable.vue'
import StateTable from './components/StateTable.vue'
import TotalTable from './components/TotalTable.vue'
import TreeTable from './components/TreeTable.vue'
import TypicalTable from './components/TypicalTable.vue'

export default {
  name:'表格',
  data() {
    return {
      activeName: '基础表格',
      Com: {
        '基础表格': TypicalTable,
        '不带斑马纹表格': NoStripeTable,
        '带边框表格': BorderTable,
        '带状态表格': StateTable,
        '固定表头': HeightTable,
        '固定列': FixedTable,
        '多级表头': MultilevelHeadTable,
        '单选': CurrentRowTable,
        '多选': SelectionTable,
        '排序': SortTable,
        '格式化': FormatTable,
        '自定义列模板': SlotTable,
        '展开行': ExpandTable,
        '树形数据与懒加载': TreeTable,
        '表尾合计行': TotalTable,
        '合并行或列': MegerTable,
        '自定义索引': IndexTable,
      },
      tabs: []
    }
  },
  mounted() {
    this.tabs = Object.keys(this.Com)
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
}
</style>