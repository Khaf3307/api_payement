<template>
<v-app>
  <Navbar/>
    <v-content class="ma-4">
      <router-view></router-view>
      <div class="projects">
    <h1 class="subheading grey--text">Documentation</h1>
    
  </div>
    </v-content>
     <Footer/>
  </v-app>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'projects',
  components: {

  },
  data: () => ({
    projects : [
      {title: 'Site web ', person :'khaled', due: '10/10/1987', status:'no'},
      {title: 'Application mobile', person :'Iyad', due: '02/07/1990', status:'complete'},
      {title: 'Gestion de stock', person :'Zineb', due: '01/05/1987', status:'yes'},
      {title: 'Conception', person :'Hu Java', due: '02/09/1991', status:'up'},
    ]
  }),
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
    }
  }
}
</script>
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
