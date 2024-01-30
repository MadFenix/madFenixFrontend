export default function ({ store, redirect }) {
  // Try to get token cookie if token isn't set

  if (! store.state.user.token || ! store.state.user.user) {
    //let token = document.cookie.match(new RegExp('(^| )token=([^;]+)'))
    let token = store.$cookies.get('token')
    if (token) {
      store.dispatch('user/setToken', token)

      //let user = document.cookie.match(new RegExp('(^| )user=([^;]+)'))
      let user = store.$cookies.get('user')

      if (user) {
        store.commit('user/updateUser', user)
      } else {
        console.log('test')
        try {
          store.dispatch('user/fetchUser')
        } catch (error) { }
      }
    }
  }
}
