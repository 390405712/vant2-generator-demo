import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { getQueryString } from '@/utils'

export function getRouter() {
  function arrToTree(arr) {
    let newArr = []
    const childrenList = []
    arr.forEach(item => {
      let children = arr.filter(i => {
        return i.path.indexOf(`${item.path}/`) > -1
      })
      if (children.length > 0) {
        children.forEach(childItem => {
          childrenList.push(childItem.path)
          childItem.name = `${childItem.name}${childItem.name.includes('?') ? '' : '?'}&parent=${item.name}`
        })
        item.name = item.name.replace('&', '?')
        newArr.push({
          ...item,
          children,
        })
      } else {
        item.name = item.name.replace('&', '?')
        newArr.push(item)
      }
    })
    newArr = newArr.filter(i => {
      return !childrenList.includes(i.path)
    })
    return newArr
  }
  const modulesFiles = require.context('./../views', true, /index.vue$/)
  let routes = modulesFiles.keys().reduce((arr, item) => {
    const com = modulesFiles(item)
    arr.push({
      path: `/${item.replace(/^\.\/(.*)\/index.vue$/, '$1')}`,
      name: com.default.name,
      component: com.default
    })
    return arr
  }, [])
  routes = arrToTree(routes)
  routes.sort((a, b) => getQueryString(a.name, 'sort') - getQueryString(b.name, 'sort'))
  routes.forEach((item) => {
    if (item.children) item.children.sort((a, b) => getQueryString(a.name, 'sort') - getQueryString(b.name, 'sort'))
  })
  return routes
}

const router = new VueRouter({
  mode: 'history',
  routes: getRouter(),
  strict: true
})

export default router
