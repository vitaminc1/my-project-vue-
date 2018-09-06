
export const server = {
  protocol: 'http://',
  domain: '172.17.9.76:8080',
  // domain:'sell.haoledian.cn',
  context: '/'
}

export const treasurerServer = {
  protocol: 'http://',
  domain: '172.17.9.76:8080',
  // domain:'shopapi.haoledian.cn',
  context: '/'
}

// 前端
export const product = {
  protocol: 'http://',
  domain: '172.17.9.76:8080',
  context: '/?/'
}

export const productBaseURL = `${product.protocol}${product.domain}${product.context}`

export const baseURL = `${server.protocol}${server.domain}${server.context}`
export const treasurerBaseURL = `${treasurerServer.protocol}${treasurerServer.domain}${treasurerServer.context}`
