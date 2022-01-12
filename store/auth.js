
export const state = () => ({
  login: false
})

export const mutations = {
  setData (state, data) {
    state.login = data
  }
}

export const actions = {
  loginAction (context) {
    context.commit('setData', true)
    this.$router.push('/')
  },
  logoutAction (context) {
    context.commit('setData', false)
    this.$router.push('/login')
  }
}
