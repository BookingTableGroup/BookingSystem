import * as types from './mutation-types'

export const mutations = {
  // 这里的data指提交时：
  // 从/api/login传回的user对象，其中包含name,messeage等信息
  [types.LOGIN](state, data) {
    state.user.phone = data.phone;
    // vuex的本质作用是管理组件之间复杂的状态的（如购物车逻辑等等...）
    // 所以当刷新浏览器时，这些状态也会一并被清空
    // 所以还是需要有一个长期在浏览器中保存如登录/登出状态的机制
    // 因此这里采用了localStorage
    // 一定要明白vuex这类库的本质作用，它极大的增加了前端逻辑处理的可能性
    localStorage.setItem('user', data.phone);
    // localStorage.setItem('session', data.session.user)
  },
  [types.DELSESSION](state) {
    localStorage.removeItem('session');
  },
  [types.LOGINOUT](state) {
    state.user = {};
    localStorage.removeItem('user');
  }
}

export default mutations