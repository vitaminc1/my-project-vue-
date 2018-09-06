/**
 * Created by leaves on 2018/9/5.
 */

import util from '../util/index'
export default {
  computed: {
    corpId () {
      return this.$route.query.corpId
    }
  },
  methods: {
    ...util,
    getBodyElm () {
      return document.body
    }
  }
}
