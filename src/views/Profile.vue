<template>
<v-app>
  <Navbar/>
    <v-content class="ma-4">
      <router-view></router-view>
      <div class="team">
    <h1 class="subheading grey--text">Profil</h1> 
    <v-avatar size="100" justify="center">
        <img src="/img1.png" alt="">
     </v-avatar>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Nom"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Prenom"
            readonly
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Pays"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Age"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Telephone"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </div>
    </v-content>
     <Footer/>
  </v-app>
  
</template>
<script>
// @ is an alias to /src

export default {
  name: 'team',
  components: {

  },
  data : () => ({
    team: [
      {name: 'Iyad', role: 'web developer', avatar:'/img1.png'},
      {name: 'Reda', role: 'Graphic designer', avatar:'/img2.png'},
      {name: 'Zineb', role: 'web developer', avatar:'/img3.png'},
      {name: 'Hu TechGroup', role: 'Desktop developer', avatar:'/img4.png'},
    ]
  }),
}
</script>
