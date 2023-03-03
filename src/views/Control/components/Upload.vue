<template>
  <FormGenerator ref="FormGenerator" :model="form" :formOption="formOption" />
</template>

<script>
import FormGenerator from '@/components/Generator/FormGenerator'

export default {
  components: {
    FormGenerator
  },
  data: (vm) => ({
    imageUrl: '',
    form: {},
    formOption: [
      {
        type: 'upload',
        formItem: {
          prop: 'key1',
          label: '基础用法',
        },
        control: {
          httpRequest: vm.submitUpload,
          accept: '.jpg, .png',
          slot: {
            tip: () => <div class="el-upload__tip">文件格式：.jpg, .png</div>,
          }
        }
      },
      {
        type: 'upload',
        formItem: {
          prop: 'key2',
          label: '用户头像',
        },
        control: {
          showFileList: false,
          httpRequest: vm.submitUpload,
          accept: '.jpg, .png',
          slot: {
            default: () => (vm.imageUrl !== '' ? <img src={vm.imageUrl} class="avatar" /> : <i class="avatar el-icon el-icon-plus avatar-uploader-icon"></i>),
          }
        }
      },
      {
        type: 'upload',
        formItem: {
          prop: 'key3',
          label: '照片墙',
        },
        control: {
          listType: "picture-card",
          httpRequest: vm.submitUpload,
          accept: '.jpg, .png',
          slot: {
            default: () => (<i class="el-icon-plus"></i>),
          }
        }
      },
      {
        type: 'upload',
        formItem: {
          prop: 'key4',
          label: '图片列表',
        },
        control: {
          listType: "picture",
          httpRequest: vm.submitUpload,
          accept: '.jpg, .png',
        }
      },
      {
        type: 'upload',
        formItem: {
          prop: 'key5',
          label: '拖拽上传',
        },
        control: {
          drag: true,
          httpRequest: vm.submitUpload,
          accept: '.jpg, .png',
          slot: {
            default: () => <div>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </div>,
          }
        }
      },
    ],
  }),
  methods: {
    async submitUpload(content) {
      if (content.file.size / 1024 / 1024 > 20) return ElMessage.warning('上传文件大小不能超过 20MB')
      this.imageUrl = URL.createObjectURL(content.file)
      console.log(this.imageUrl);
    }
  },
}

</script>

<style lang="scss" scoped>
:deep(.el-upload.el-upload--text) {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    border: 1px dashed #c0ccda;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

}

:deep(.el-upload--picture-card) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
