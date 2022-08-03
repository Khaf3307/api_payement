<template>
  <v-form>
    <v-container>
      <h1 style="align : center">Creation de Compte</h1>
      <v-row>
        <v-col
          cols="12"
          sm="10"
        >
          <v-text-field
            v-model="login"
            label="Login"
            outlined
            shaped
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Mot de passe"
            hint="Au moins 8 caractères"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirmer mot de passe"
            hint="Au moins 8 caractères"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
         first: '',
          last: '',
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Mininuim 8 characteres',
        },
    }),
  }
</script>