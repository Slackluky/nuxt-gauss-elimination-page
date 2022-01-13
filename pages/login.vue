<template>
  <v-row style="height: 100%;">
    <v-col style="height: 100%" class="text-center d-flex justify-center align-center">
      <v-card width="600" outlined>
        <v-form ref="login" lazy-validation>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-text-field :rules="rule.username" placeholder="admin" label="username" outlined />
            <v-text-field :rules="rule.password" placeholder="admin" label="password" outlined type="password" />
          </v-card-text>
          <v-card-actions>
            <v-btn class="primary" dark @click="login">
              Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data () {
    return {
      rule: {
        username: [
          v => (!!v || v === 0) || 'Field ini harus diisi',
          v => v === 'admin' || 'username salah'
        ],
        password: [
          v => (!!v || v === 0) || 'Field ini harus diisi',
          v => v === 'admin' || 'password salah'
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.login.validate()
      if (this.$refs.login.validate()) {
        this.$store.dispatch('auth/loginAction')
      }
    }
  }
}
</script>
