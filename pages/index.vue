<template>
  <v-main>
    <section>
      <v-parallax :lazy-src="require('~/assets/img/sub_main.png')" :src="require('~/assets/img/sub_main.png')" height="400">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">
            The social network for epic content
          </h1>
          <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">
            Unlesh your creativity without limitations
          </div>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            link
            router
            exact
            to="/calculator"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">
              Para Punggawa
            </h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-avatar size="240">
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
                    </v-avatar>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Ridwan M Yusuf
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-avatar size="240">
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
                    </v-avatar>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">
                      Luky Setiawan
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-avatar size="240">
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
                    </v-avatar>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Septian W Pamungkas
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="require('~/assets/img/math.jpg')" height="380">
        <v-layout column align-center justify-center>
          <v-btn class="blue yellow mt-5" large router exact to="/calculator">
            Perhitungan
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section style="height:600px" />
    <section>
      <v-parallax :src="require('~/assets/img/logo.png')" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            We are dropping cool news and opportunities on socials
          </div>
        </v-layout>
        <v-layout justify-space-around justify-center>
          <v-icon x-large dark>
            fab fa-facebook-f
          </v-icon>

          <v-icon x-large dark>
            fab fa-twitter
          </v-icon>

          <v-icon x-large dark>
            fab fa-reddit-alien
          </v-icon>

          <v-icon x-large dark>
            fab fa-instagram
          </v-icon>

          <v-icon x-large dark>
            fab fa-discord
          </v-icon>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">
                  Company info
                </div>
              </v-card-title>
              <v-card-text>
                We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">
                  We are hiring
                </div>
              </v-card-title>
              <v-card-text>
                Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and interests
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-main>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Endorfine',
      email: '',
      emailRules: [
        (v) => {
          return !!v || 'E-mail is required'
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid'
      ],
      subscribed: false
    }
  },

  computed: {
    imgHeight () {
      const offset = 320
      return this.pageHeight - offset
    }
  },
  methods: {
    subscribe () {
      this.subscribed = !this.subscribed
    }
  }
}
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
