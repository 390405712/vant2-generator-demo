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
  data: (vm) => {
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
      },
    ]
    return {
      form: {},
      formOption: [
        {
          type: 'cascader',
          formItem: {
            name: 'key1',
            label: '基础用法',
          },
          control: {
            placeholder: '请选择所在地区',
            options
          }
        },
        {
          type: 'cascader',
          formItem: {
            name: 'key2',
            label: '自定义颜色',
          },
          control: {
            placeholder: '请选择所在地区',
            options,
            activeColor: "#1989fa"
          }
        },
        {
          type: 'cascader',
          formItem: {
            name: 'key3',
            label: '异步加载选项',
          },
          control: {
            placeholder: '请选择所在地区',
            options: [],
          }
        },
        {
          type: 'cascader',
          formItem: {
            name: 'key4',
            label: '自定义字段名',
          },
          control: {
            placeholder: '请选择所在地区',
            options: [
              {
                name: '浙江省',
                code: '330000',
                items: [{ name: '杭州市', code: '330100' }],
              },
            ],
            fieldNames: {
              text: 'name',
              value: 'code',
              children: 'items',
            }
          }
        },
        {
          type: 'cascader',
          formItem: {
            name: 'key5',
            label: '监听',
          },
          control: {
            placeholder: '请选择所在地区',
            options,
            onChange: (scope) => {
              console.log('onChange:' + JSON.stringify(scope));
            },
            onFinish: (scope) => {
              console.log('onFinish:' + JSON.stringify(scope));
            },
            onClose: () => {
              console.log('onClose');
            },
          }
        },
        {
          type: 'cascader',
          formItem: {
            name: 'key6',
            label: '自定义插槽',
          },
          control: {
            placeholder: '请选择所在地区',
            options,
            slots: {
              title: () => '自定义顶部标题',
              option: (scope) => `${scope.option.text}-自定义选项文字`,
            }
          }
        },
      ],
    }
  },
  created() {
    this.formOption.find(i => i.formItem.name === 'key3').control.options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
      },
    ]
    this.formOption.forEach(item => {
      item.popup = { getContainer: '.FormGenerator' }
    })
  },
}

</script>