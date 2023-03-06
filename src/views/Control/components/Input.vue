<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" />
</template>

<script>
import { FormGenerator } from 'element-ui-generator'


export default {
  components: {
    FormGenerator
  },
  data: () => ({
    form: {},
    formOption: [
      {
        type: 'input',
        formItem: {
          prop: 'key1',
          label: '基础用法',
        },
      },
      {
        type: 'input',
        formItem: {
          prop: 'key2',
          label: '禁用状态',
        },
        control: {
          disabled: true
        },
      },
      {
        type: 'input',
        formItem: {
          prop: 'key3',
          label: '可清空',
        },
        control: {
          clearable: true
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'key4',
          label: '密码框',
        },
        control: {
          showPassword: true
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'key5',
          label: '图标:attr',
        },
        control: {
          suffixIcon: "el-icon-date",
          prefixIcon: "el-icon-search"
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'key6',
          label: '图标:slot',
        },
        control: {
          slot: {
            suffix: () => (<i class="el-input__icon el-icon-date"></i>),
            prefix: () => (<i class="el-input__icon el-icon-search"></i>),
          }
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'key7',
          label: '文本域',
        },
        control: {
          rows: "2",
          type: "textarea",
          autosize: { minRows: 2, maxRows: 4 },
          maxlength: "30",
          showWordLimit: true
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'key8',
          label: '复合型',
        },
        control: {
          slot: {
            prepend: () => (<i class="el-input__icon el-icon-date"></i>),
            append: () => (<i class="el-input__icon el-icon-search"></i>),
          }
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'key9',
          label: '监听方法',
        },
        control: {
          onBlur: (event) => { console.log('blur', event); },
          onFocus: (event) => { console.log('focus', event); },
          onChange: (value) => { console.log('change', value); },
          onInput: (value) => { console.log('input', value); },
          onClear: () => { console.log('clear'); },
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'key10',
          label: '尺寸',
        },
        control: {
          size: 'mini',
        }
      },
      {
        type: 'input',
        formItem: {
          prop: 'key11',
          label: '长度限制',
        },
        control: {
          maxlength: "30",
        }
      },
    ],
  }),
}

// 未封装带输入建议的输入框组件 el-autocomplete 需用type:'slot'方式解决
</script>