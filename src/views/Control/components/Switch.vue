<template>
  <div>
    <div class="phone">
      <FormGenerator :model="form" :formOption="formOption" />
    </div>
    <JsonViewer :value="form" expand previewMode />
  </div>
</template>

<script>
import { FormGenerator } from 'vant2-generator'
import { Icon, Dialog } from 'vant'

export default {
  components: {
    FormGenerator
  },
  data: (vm) => ({
    form: {
      key5: false
    },
    formOption: [
      {
        type: 'switch',
        formItem: {
          name: 'key1',
          label: '基础用法',
        },
      },
      {
        type: 'switch',
        formItem: {
          name: 'key2',
          label: '禁用状态',
        },
        control: {
          disabled: true
        }
      },
      {
        type: 'switch',
        formItem: {
          name: 'key3',
          label: '加载状态',
        },
        control: {
          loading: true
        }
      },
      {
        type: 'switch',
        formItem: {
          name: 'key4',
          label: '自定义大小',
        },
        control: {
          size: '24px'
        }
      },
      {
        type: 'switch',
        formItem: {
          name: 'key5',
          label: '自定义颜色',
        },
        control: {
          activeColor: '#ee0a24',
          inactiveColor: '#dcdee0',
        }
      },
      {
        type: 'switch',
        formItem: {
          name: 'key6',
          label: '自定义按钮',
        },
        control: {
          slots: {
            node: () => (<div class="icon-wrapper">
              <Icon name={vm.form.key5 ? 'success' : 'cross'} />
            </div>)
          }
        }
      },
      {
        type: 'switch',
        formItem: {
          name: 'key7',
          label: '异步控制',
        },
        control: {
          onInput: (checked) => {
            vm.form.key7 = !checked;
            Dialog.confirm({
              title: '提醒',
              message: '是否切换开关？',
            }).then(() => {
              vm.form.key7 = checked;
            });
          },
        }
      },
      {
        type: 'switch',
        formItem: {
          name: 'key8',
          label: '监听',
        },
        control: {
          onChange: (value) => { console.log(`onChange:${value}`); },
          onClick: (event) => { console.log(`onClick:${event}`); },
        }
      },
    ],
  }),
}

</script>

<style lang="scss" scoped>
:deep(.icon-wrapper) {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 18px;

  .van-icon-success {
    line-height: 32px;
    color: var(--van-blue);
  }

  .van-icon-cross {
    line-height: 32px;
    color: var(--van-gray-5);
  }
}
</style>
