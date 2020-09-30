const store = {
  user: {
    name: 'Santa Claus'
  }
}

new Vue({
  el: '#one',
  data: {
    shared: store,
    unique: 'Name'
  }
})

new Vue({
  el: "#two",
  data: {
    shared: store,
    unique: 'Alias'
  }
})
