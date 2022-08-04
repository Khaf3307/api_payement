<template>
<v-app>
  <Navbar/>
    <v-content class="ma-4">
      <router-view></router-view>
      <div class="projects">
    <h1 class="subheading grey--text">Documentation</h1>
    <p>
      La documentation est en cours de construction et sera prêt sous peu pour de amples information sur l'utilisations de l'api se referer au README !
    </p>
    
  </div>
    </v-content>
     <Footer/>
  </v-app>
  
</template>


<style >
  .project.complete {
      border-left: 4px solid #3cd1c2;
  }
  .project.no {
      border-left: 4px solid orange;
  }
  .project.up {
      border-left: 4px solid rgb(55, 0, 255);
  }
  .project.yes {
      border-left: 4px solid yellow;
  }
   .v-chip.complete {
      color: #3cd1c2;
  }
  .p.ovnored {
      color: orange;
  }
  .p.up {
      color:  red;
  }
  .p.yes {
      color:  yellow;
  }
</style>
