/**
 * Created by leaves on 2018/9/5.
 */
import Axios from './index'

/**
 * 获取用户信息
 */
export const getUser = async () => {
  return (await Axios.get(`/user`))
}
