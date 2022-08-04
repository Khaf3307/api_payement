<template>
<v-app>
  <Navbar/>
    <v-content class="ma-4">
      <router-view></router-view>
       <div class="team">
    <h1 class="subheading grey--text">Settings</h1>
    <template>
  <v-card dark flat>
    <v-toolbar flat height="72">
      <v-switch
        v-model="$vuetify.theme.dark"
        hint="Cela bascule l'état du thème"
        inset
        label=" Dark theme"
        persistent-hint
      ></v-switch>
    </v-toolbar>
  </v-card>
</template>
    
  </div>
    </v-content>
     <Footer/>
  </v-app>
 
</template>

<script>
// @ is an alias to /src

export default {
  name: 'setting',
  components: {

  },
  data : () => ({
    setting: [
      {name: 'Iyad', role: 'web developer', avatar:'/img1.png'},
      {name: 'Reda', role: 'Graphic designer', avatar:'/img2.png'},
      {name: 'Zineb', role: 'web developer', avatar:'/img3.png'},
      {name: 'Hu TechGroup', role: 'Desktop developer', avatar:'/img4.png'},
    ]
  }),
}
</script>
