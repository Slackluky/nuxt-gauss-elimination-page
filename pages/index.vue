<template>
  <v-row justify="center" align="center" style="height: 100%">
    <v-col cols="12" class="justify-content-center">
      <v-label>Masukkan jumlah Persamaan yang digunakan : </v-label>
      <v-flex class="d-flex flex-row align-items-center">
        <v-text-field v-model="arrLength" outlined style="max-width: 420px;" @keyup.enter.exact="makeArray()" />
        <v-btn
          class="ml-4 info"
          dark
          height="56"
          text
          outlined
          @click="makeArray()"
        >
          Buat
        </v-btn>
      </v-flex>
      <v-card flat outlined>
        <v-card-text>
          <v-form ref="form">
            <v-card
              v-for="(val, i) in arr"
              :key="i"
              class="mb-2"
              flat
            >
              <v-card-title class="text-center">
                persamaan {{ i + 1 }}
              </v-card-title>
              <v-card-text>
                <v-list class="d-flex flex-row flex-wrap justify-center">
                  <v-list-item v-for="(val2, j) in val" :key="j" style="max-width: 120px" class="align-item-center d-flex">
                    <v-text-field v-model="arr[i][j]" :rules="rule" outlined dense>
                      <template #label>
                        <span>X <sub>{{ (parseInt(j)+1) }}</sub></span>
                      </template>
                    </v-text-field>
                  </v-list-item>
                  <v-list-item style="max-width: 160px">
                    <v-text-field
                      v-model="hasil[i]"
                      :rules="rule"
                      prepend-icon="mdi-equal"
                      label="Hasil"
                      placeholder="Hasil"
                      outlined
                      dense
                    />
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-divider />
            </v-card>
            <v-sheet v-if="arrLength > 0" style="width:100%" class="d-flex justify-center">
              <v-btn
                color="success"
                class="mx-auto"
                @click="validate"
              >
                Hitung
              </v-btn>
            </v-sheet>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Hasil perhitungan
        </v-card-title>

        <v-card-text>
          <v-list v-if="valid">
            <v-list-item v-for="(val, i) in hasilPerhitungan" :key="i">
              <span>X <sub>{{ i }}</sub> = {{ val }} </span>
            </v-list-item>
          </v-list>
          <v-sheet v-else>
            <span class="display-1 red--text">Semua field harus diisi</span>
          </v-sheet>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      dialog: false,
      rule: [
        v => (!!v || v === 0) || 'Field ini harus diisi',
        v => /^-?[0-9]\d*(\.\d+)?$/.test(v) || 'Hanya nilai numeric diizinkan'
      ],
      epo: [0, 1, 2],
      arrLength: 3,
      arr: [
        [5, 3, 10],
        [8, 12, 9],
        [15, 10, 6]
      ],
      hasil: [1900, 3000, 3600],
      hasilPerhitungan: [],
      valid: false
    }
  },
  methods: {
    makeArray () {
      const arr = []
      for (let i = 0; i < this.arrLength; i++) {
        arr[i] = []
        for (let j = 0; j < this.arrLength; j++) {
          arr[i][j] = 0
        }
      }
      const hasil = []
      for (let j = 0; j < this.arrLength; j++) {
        hasil[j] = 0
      }
      this.hasil = hasil
      this.arr = arr
    },
    validate () {
      this.all()
      this.$refs.form.validate()
      this.valid = this.$refs.form.validate()
      if (this.$refs.form.validate()) {
        const arr = this.arr.map(function (arr) {
          return arr.slice()
        })
        const hasil = this.hasil.slice()
        this.hasilPerhitungan = this.solve(arr, hasil)
      }
      this.dialog = true
    },
    all () {
      this.epo = [...Array(this.errLength).keys()].map((k, i) => i)
      console.log(this.epo)
    },
    diagonalize (M) {
      const m = M.length
      const n = M[0].length
      for (let k = 0; k < Math.min(m, n); ++k) {
      // Find the k-th pivot
        const iMax = this.findPivot(M, k)
        if (M[iMax][k] === 0) { console.log('matrix is singular') }
        this.swap_rows(M, k, iMax)
        // Do for all rows below pivot
        for (let i = k + 1; i < m; ++i) {
        // Do for all remaining elements in current row:
          const c = M[i][k] / M[k][k]
          for (let j = k + 1; j < n; ++j) {
            M[i][j] = M[i][j] - M[k][j] * c
          }
          // Fill lower triangular matrix with zeros
          M[i][k] = 0
        }
      }
    },

    findPivot (M, k) {
      let iMax = k
      for (let i = k + 1; i < M.length; ++i) {
        if (Math.abs(M[i][k]) > Math.abs(M[iMax][k])) {
          iMax = i
        }
      }
      return iMax
    },

    swap_rows (M, iMax, k) {
      if (iMax !== k) {
        const temp = M[iMax]
        M[iMax] = M[k]
        M[k] = temp
      }
    },

    makeM (A, b) {
      for (let i = 0; i < A.length; ++i) {
        A[i].push(b[i])
      }
    },

    substitute (M) {
      const m = M.length
      for (let i = m - 1; i >= 0; --i) {
        const x = M[i][m] / M[i][i]
        for (let j = i - 1; j >= 0; --j) {
          M[j][m] -= x * M[j][i]
          M[j][i] = 0
        }
        M[i][m] = x
        M[i][i] = 1
      }
    },

    extractX (M) {
      const x = []
      const m = M.length
      const n = M[0].length
      for (let i = 0; i < m; ++i) {
        x.push(M[i][n - 1])
      }
      return x
    },
    solve (A, b) {
    // print(A, "A");
      this.makeM(A, b)
      // print(A, "M");
      this.diagonalize(A)
      // print(A, "diag");
      this.substitute(A)
      // print(A, "subst");
      const x = this.extractX(A)
      // print(x, "x");
      return x
    }
  }
}
</script>
