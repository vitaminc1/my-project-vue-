<template>
  <div class="hello">
    <h1>{{ userInfo.name }}</h1>
    <h1>{{ userInfo.age }}</h1>
    <h1>{{ userInfo.color }}</h1>
    <p>{{userInfo.text | textClip(12)}}</p>
    <h1>{{ corpId }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created () {
    this.getUser()
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    ...mapActions(['getUser']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
