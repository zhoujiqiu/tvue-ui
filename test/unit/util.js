let id = 0

const createElm = function () {
  const elm = document.createElement('div')
  elm.id = 'app' + ++id
  document.body.appendChild(elm)
  return elm
}

export {
  createElm
}
