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
  data: () => {
    return {
      form: {},
      formOption: [
        {
          type: 'calendar',
          formItem: {
            name: 'key1',
            label: '选择单个日期',
          },
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key2',
            label: '选择多个日期',
          },
          control: {
            type: 'multiple'
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key3',
            label: '选择日期区间',
          },
          control: {
            type: 'range'
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key4',
            label: '自定义颜色',
          },
          control: {
            color: '#1989fa'
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key5',
            label: '自定义日期范围',
          },
          control: {
            minDate: new Date(2010, 0, 1),
            maxDate: new Date(2010, 0, 31)
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key6',
            label: '自定义按钮文字',
          },
          control: {
            type: 'range',
            showConfirm: true,
            confirmText: '完成',
            confirmDisabledText: '请选择结束时间'
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key7',
            label: '自定义日期文案',
          },
          control: {
            type: 'range',
            formatter: (day) => {
              const month = day.date.getMonth() + 1;
              const date = day.date.getDate();
              if (month === 5) {
                if (date === 1) {
                  day.topInfo = '劳动节';
                } else if (date === 4) {
                  day.topInfo = '青年节';
                } else if (date === 11) {
                  day.text = '今天';
                }
              }
              if (day.type === 'start') {
                day.bottomInfo = '入住';
              } else if (day.type === 'end') {
                day.bottomInfo = '离店';
              }
              return day;
            }
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key8',
            label: '自定义弹出位置',
          },
          control: {
            round: false,
            position: 'right'
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key9',
            label: '日期区间最大范围',
          },
          control: {
            type: 'range',
            maxRange: '3',
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key10',
            label: '自定义周起始日',
          },
          control: {
            firstDayOfWeek: '1'
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key11',
            label: '监听',
          },
          control: {
            type: 'multiple',
            onSelect: (value) => { console.log('onSelect:' + value) },
            onConfirm: (value) => { console.log('onConfirm:' + value) },
            onOpen: () => { console.log('onOpen') },
            onClose: () => { console.log('onClose') },
            onOpened: () => { console.log('onOpened') },
            onClosed: () => { console.log('onClosed') },
            onUnselect: (value) => { console.log('onUnselect:' + value) },
            onMonthShow: (scope) => { console.log('onMonthShow:' + JSON.stringify(scope)) },
            onOverRange: () => { console.log('onOverRange') },
            onClickSubtitle: (event) => { console.log('onClickSubtitle:' + event) },
          }
        },
        {
          type: 'calendar',
          formItem: {
            name: 'key12',
            label: '自定义插槽',
          },
          control: {
            slots: {
              title: () => '自定义标题',
              footer: () => '自定义底部区域内容',
              'top-info': (day) => '上方信息',
              'bottom-info': (day) => '下方信息',
            }
          }
        },
      ],
    }
  },
  created() {
    this.formOption.forEach(item => {
      item.popup = { getContainer: '.FormGenerator' }
    })
  },
}

</script>