<template>
    <div class="card">
    <!-- <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
    <h1 class="card__title" v-else>Connexion</h1> -->
    <!-- <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
    <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p> -->
    <v-container>
      <h1 class="card__title">Connexion</h1>
      <v-row >
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
          sm="10"
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
        <div class="form-row" v-if="mode == 'login' && status == 'error_login'">
          Adresse mail et/ou mot de passe invalide
        </div>
        <div class="form-row" v-if="mode == 'create' && status == 'error_create'">
          Adresse mail déjà utilisée
        </div>
      </v-row>
      <v-row >
          <v-btn outlined color="red lighten-3" dark v-on="on">ANNULER</v-btn>
          <v-btn outlined color="teal lighten-3" dark v-on="on">VALIDER</v-btn>
      </v-row>
      <!-- <div class="form-row">
        <button @click="login()" class="button" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
          <span v-if="status == 'loading'">Connexion en cours...</span>
          <span v-else>Connexion</span>
        </button>
        <button @click="createAccount()" class="button" :class="{'button--disabled' : !validatedFields}" v-else>
          <span v-if="status == 'loading'">Création en cours...</span>
          <span v-else>Créer mon compte</span>
        </button>
      </div> -->
      </v-container>
    </div>
    
</template>
<script>

</script>
<style>
  .form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  }

  .form-row__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }

  .form-row__input::placeholder {
    color:#aaaaaa;
  }


</style>>

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