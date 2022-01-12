export default function ({ route, redirect, store }) {
  if (route.name === 'login') {
  // skip middleware
    return
  }
  console.log(store.state.auth.login)
  if (!store.state.auth.login) {
    console.log('logged in with email not verified')
    return redirect('/login')
  }
}
