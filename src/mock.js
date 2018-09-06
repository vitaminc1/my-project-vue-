import Mock from 'mockjs'

export default Mock.mock('/user', {
  'name': '三七',
  'age|1-100': 100,
  'color': 'white',
  'text': '学习vue的时候，vue-cli脚手架其实已经帮我们做了很多的东西了，这里主要是完善了vuex的数据流，还有一些自己的项目规划，目录结构等。话不多说，先上一张项目的工程目录截图，主要是为了把公用部分提取出来，使得项目增加可读性，复用性和扩展性。',
  'code': 0
})
