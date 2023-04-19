<template>
  <div class="phone">
    <FormGenerator :model="form" :formOption="formOption" />
  </div>
</template>

<script>
import { FormGenerator } from 'vant2-generator'


export default {
  components: {
    FormGenerator
  },
  data: () => ({
    form: {},
    formOption: [
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key1',
          label: '选择年月日',
        },
        control: {
          type: 'date',
          title: '选择年月日',
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(2025, 10, 1)
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key2',
          label: '选择年月',
        },
        control: {
          type: 'year-month',
          title: '选择年月',
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(2025, 10, 1),
          formatter: (type, value) => {
            if (type === 'year') return `${value}年`;
            if (type === 'month') return `${value}月`;
            return value;
          }
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key3',
          label: '选择月日',
        },
        control: {
          type: 'month-day',
          title: '选择月日',
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(2025, 10, 1),
          formatter: (type, value) => {
            if (type === 'month') return `${value}月`;
            if (type === 'day') return `${value}日`;
            return value;
          }
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key4',
          label: '选择时间',
        },
        control: {
          type: 'time',
          title: '选择时间',
          minHour: 10,
          maxHour: 20,
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key5',
          label: '选择完整时间',
        },
        control: {
          type: 'datetime',
          title: '选择完整时间',
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(2025, 10, 1),
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key6',
          label: '选择年月日小时',
        },
        control: {
          type: 'datehour',
          title: '选择年月日小时',
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(2025, 10, 1),
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key7',
          label: '选项过滤器',
        },
        control: {
          type: 'time',
          filter: (type, values) => {
            if (type === 'minute') {
              return values.filter((i) => Number(i) % 5 === 0);
            }
            return values;
          },
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key8',
          label: '自定义列排序',
        },
        control: {
          type: 'date',
          title: '自定义列排序',
          columnsOrder: ['month', 'day', 'year'],
          formatter: (type, value) => {
            if (type === 'year') return `${value}年`;
            if (type === 'month') return `${value}月`;
            if (type === 'day') return `${value}日`;
            return value;
          }
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key9',
          label: '监听',
        },
        control: {
          onChange: (value) => { console.log(`onChange:${value}`) },
          onConfirm: (value) => { console.log(`onConfirm:${value}`) },
          onCancel: () => { console.log(`onCancel`) },
        }
      },
      {
        type: 'datetimePicker',
        formItem: {
          name: 'key10',
          label: '自定义插槽',
        },
        control: {
          slots: {
            // default: () => '自定义整个顶部栏的内容',
            title: () => '自定义标题内容',
            confirm: () => '自定义确认按钮内容',
            cancel: () => '自定义取消按钮内容',
            option: (option) => `${option}-文本`,
            'columns-top': () => '自定义选项上方内容',
            'columns-bottom': () => '自定义选项下方内容',
          }
        }
      },
    ]
  }),
  created() {
    this.formOption.forEach(item => {
      item.popup = { getContainer: '.FormGenerator' }
    })
  },
}
</script>