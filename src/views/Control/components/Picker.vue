<template>
  <div class="phone">
    <FormGenerator :model="form" :formOption="formOption" />
  </div>
</template>

<script>
import { FormGenerator, GeneratorUtils } from 'vant2-generator'
import { Picker, Popup, Field } from 'vant'
export default {
  components: {
    FormGenerator, Picker, Popup, Field
  },
  data: () => {
    const columns = [
      {
        text: '浙江省',
        value: '330000',
      },
      {
        text: '江苏省',
        value: '320000',
      },
    ]
    const cities = {
      浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      福建: ['福州', '厦门', '莆田', '三明', '泉州'],
    };
    return {
      form: {},
      formOption: [
        {
          type: 'picker',
          formItem: {
            name: 'key1',
            label: '基础用法',
          },
          control: {
            columns,
          },
        },
        {
          type: 'picker',
          formItem: {
            name: 'key2',
            label: '默认选中项',
          },
          control: {
            columns,
            defaultIndex: 1
          }
        },
        {
          type: 'picker',
          formItem: {
            name: 'key3',
            label: '多列选择',
          },
          control: {
            columns: [
              // 第一列
              {
                values: [
                  {
                    text: '周一',
                    value: '1'
                  }, {
                    text: '周二',
                    value: '2'
                  }, {
                    text: '周三',
                    value: '3'
                  }, {
                    text: '周四',
                    value: '4'
                  }, {
                    text: '周五',
                    value: '5'
                  },
                ],
                defaultIndex: 2,
              },
              // 第二列
              {
                values: [{
                  text: '上午',
                  value: 'a'
                }, {
                  text: '下午',
                  value: 'b'
                }, {
                  text: '晚上',
                  value: 'c'
                },],
                defaultIndex: 1,
              },
            ],
          },
        },
        {
          type: 'picker',
          formItem: {
            name: 'key4',
            label: '禁用选项',
          },
          control: {
            columns: [
              {
                text: '浙江省',
                value: '330000',
                disabled: true,
              },
              {
                text: '江苏省',
                value: '320000',
              },
            ],
          },
        },
        {
          type: 'picker',
          formItem: {
            name: 'key5',
            label: '动态设置选项',
          },
          control: {
            columns: [
              { values: Object.keys(cities) },
              { values: cities['浙江'] },
            ],
            onChange(picker, values) {
              picker.setColumnValues(1, cities[values[0]]);
            }
          },
        },
        {
          type: 'picker',
          formItem: {
            name: 'key6',
            label: '加载状态',
          },
          control: {
            columns,
            loading: true
          },
        },
        {
          type: 'picker',
          formItem: {
            name: 'key7',
            label: '监听',
          },
          control: {
            columns,
            onChange: (scope) => {
              console.log('onChange:' + JSON.stringify(scope));
            },
            onConfirm: (scope) => {
              console.log('onConfirm:' + JSON.stringify(scope));
            },
            onCancel: (scope) => {
              console.log('onCancel:' + JSON.stringify(scope));
            },
          }
        },
        {
          type: 'picker',
          formItem: {
            name: 'key8',
            label: '自定义插槽',
          },
          control: {
            columns,
            slots: {
              // default: () => '自定义整个顶部栏的内容',
              title: () => '自定义标题内容',
              confirm: () => '自定义确认按钮内容',
              cancel: () => '自定义取消按钮内容',
              option: (option) => `${JSON.stringify(option)}`,
              'columns-top': () => '自定义选项上方内容',
              'columns-bottom': () => '自定义选项下方内容	',
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