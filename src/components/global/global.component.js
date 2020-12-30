import Vue from "vue"

const requireComponent = require.context(".", true, /.vue$/)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .replace(/^\.\//, "")
    .replace(/\.\w+$/, "")
    .replace(/\w+\//, "")
  Vue.component(componentName, componentConfig.default || componentConfig)
})
