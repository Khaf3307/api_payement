<template>
<v-app>
  <Navbar/>
    <v-content class="ma-2">
      <router-view></router-view>
      <div class="projects">
    <h1 class="subheading grey--text">Introduction</h1>
    __________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    <p>
      Vous ne savez pas encore quelle solution choisir pour le paiement de votre 
      e-commerce ? Il existe de nombreuses solutions plus ou moins adaptées à votre 
      situation. En effet, pour démarrer, une plateforme e-commerce souhaitera limiter 
      le coût de cette fonctionnalité pour privilégier son chiffre d’affaires. 
      Plus elle grandit, plus cette plateforme aura besoin de fonctionnalités variées 
      comme le paiement à l’international ou les factures automatisées. Des solutions 
      simples d’utilisation, transparentes et polyvalentes, il y en a beaucoup. Au cœur 
      de la problématique du paiement en ligne, on retrouve la sécurité, la fluidité et 
      la simplicité. Nous vous proposons une API pour la gestion des paiements. Une API, 
      ou interface de programmation d'application, est un ensemble de définitions et de 
      protocoles qui facilite la création et l'intégration de logiciels d'applications. 
      Ce projet consistera à mettre en place un DASHBOARD SPA et l’authentification des 
      utilisateurs voulant souscrire et utiliser le service qui alimentera le dashboard.
      Pour effetuer des testes nous vous conseillons d'utiliser les APIs REST, INSOMNIA 
      ou POSTMAN ou le CLIENT HTTP. Are You Ready ?
    </p>
    -<br/>
    -<br/>
    -<br/>
    <strong>LET'S GO !!!</strong>
    <br/>
    <br/>
    <h1 class="subheading grey--text">Modélisation</h1>
    __________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    <p>
      La modélisation des données est définie comme la structuration et l'ordonnancement d'un ensemble de données afin qu'elles puissent être traitées correctement et sans grande difficulté par une base de données. La modélisation des données vise à fournir un ensemble d'informations désorganisées avec un ordre systématique et propre afin que son analyse et son traitement ultérieurs soient plus efficaces. Après réflexion et observation de l’existant nous avons ainsi structurer notre base de données avec le schéma suivant :
    Users (userid, login(email/tel), password, created_at, updated_at) Profils (idProfile, firstname, lastname, country, age, type(client/marchand), created_at, updated_at, idUser (FK)) Accounts (idAccount, balance, currency(default=xof), created_at, updated_at, idUser (FK)) Transactions (idTransac, status, type, currency, created_at, updated_at, idUser (FK)) ARTICLES (idArticle, name, unitPrice, Quantity, totalPrice, Timestamp (created_at, updated_at), idTransac (FK))
    </p><br />
    <h1 class="subheading grey--text">Implémentation</h1>
    __________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    <p>
      Commençons avec la création d'un compte utilisateur, la méthode utilisé ici est <strong>POST</strong>
      Noté aussi que la création d'un compte utilisateur (marchand ou client) génere en arrière plan 
      un <strong>ACCOUNT</strong> et un <strong>PROFIL</strong> qui sont assignée. Cet utilisateur est tenue de modifier ses infos personnelle
      pour pouvoir continué.
    </p>
    <br/>
    <h5>CREATION COMPTE UTILISATEUR : méthode POST</h5>
    
    <p style="background-color: powderblue;" > <strong> User.create(user) <br>
      .then((user)=>{ <br>
         Profil.create({<br>
          firstname: "john",<br>
          lastname: "doe",<br>
          country: "senegal",<br>
          age: "18",<br>
          typeProfile: "marchand",<br>
          profilUserid: user.userid,}),<br>
          Account.create({<br>
            balance: "0",<br>
            currency: "xof",<br>
            accountUserid: user.userid,<br>
          })<br>
         .then((data) => {<br>
             res.status(201).json(<br>
              {status: 201,<br>
                data: data,<br>
                message: "New user added successfully"});<br>
             }) })<br>
      .catch(err => {<br>
        res.status(500).send({<br>
          message:<br>
            err.message || "Some error occurred while creating the user."<br>
        });<br>
      });<br>
    };<br></strong></p>
    <p> Si la creation se passe bien on recevra le message <br>
        "New user added successfully" sinon le message d'erreur suivant "Some error occurred while creating the user."
    </p>
    <h5>RESULTATS</h5>
    <v-img
      src="../assets/tof2.png"
    ></v-img>
    <p>Ici nous remarquons qu'un profil par défaut est associé à l'utilisateur ce dernier est tenue
       de mettre à jour ses informations afin de pouvoir continué.</p>
  </div>
  <h5>UPDATE PROFIL : méthode PATCH</h5>
  <p style="background-color: powderblue;"><strong> const update = (req, res) => { <br>
    const id = req.params.id; <br>
    User.update(req.body, { <br>
      where: { userid: id } <br>
    }) <br>
      .then(num => { <br>
        if (num == 1) { <br>
          res.send({ <br>
            message: "User was updated successfully." <br>
          }); <br>
        } else { <br>
          res.send({ <br>
            message: `Cannot update User with id=${id}. Maybe user was not found or req.body is empty!` <br>
          }); <br>
        } <br>
      }) <br>
      .catch(err => {<br>
        res.status(500).send({<br>
          message: "Error updating user with id=" + id<br>
        });<br>
      });<br>
  };<br></strong>
  </p>
    <h4>RESULTAT</h4>
    <v-img
      src="../assets/tof5.png"
    ></v-img>
    <br>
    <h5>UPDATE ACCOUNT UTILISATEUR : méthode PATCH</h5>
    <v-img
      src="../assets/tof7.png"
    ></v-img><br>
    <h4>RESULTAT</h4>
    <v-img
      src="../assets/tof8.png"
    ></v-img><br>
    <h5>Creation des articles : méthode POST</h5>
    <p style="background-color: powderblue;"> 
      <strong> const create = (req, res,next) => {<br>
      // Validate request <br>
      if (!req.body.name) { <br>
        res.status(400).send({ <br>
          message: "Content can not be empty!" <br>
        }); <br>
        return; <br>
      } <br>
        const id = req.params.id; <br>
        User.findByPk(id).then((transaction)=>{ <br>
          Transaction.create({ <br>
            status: "en attente", <br>
            typeTransac: "debit", <br>
            currency: "XOF", <br>
            userUserid: transaction.userid <br>
          }).then((articles)=>{ <br>
          Article.create({ <br>
            name: req.body.name, <br>
            unitPrice: req.body.unitPrice, <br>
            quantity: req.body.quantity, <br>
            totalPrice: req.body.totalPrice, <br>
            transactionIdTransaction: articles.idTransaction <br>
          }) <br>
          .then((data) => { <br>
              res.status(201).json( <br>
                {status: 201, <br>
                  data: data, <br>
                  message: "New article added successfully"}); <br>
              }) }) <br>
        }) <br>
        
        .catch(err => { <br>
          res.status(500).send({ <br>
            message: <br>
              err.message || "Some error occurred while creating the user." <br>
          }); <br>
        }); <br>
      }; <br></strong>
    </p>
  <p> Pour ce cas présent, la création d'un article entraine la création de la transaction
    qui pour rappel fera l'objet d'un paiement du client vers le marchand. Un processus de controle 
    sera effectuer pour voir si le client dispose dans son account la somme pour mener à bien le paiement.
    </p>
    <h4>RESULTATS</h4>
    <v-img
      src="../assets/tof11.png"
    ></v-img><br>
    <p>Ici nous avons le résultat avec la table article</p>
    <v-img
      src="../assets/tof12.png"
    ></v-img><br>
    <p>Ici nous avons le résultat avec la table transaction qui est en attente pour un paiement.</p>
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
