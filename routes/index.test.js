var app = require("../app")
var request = require("supertest")

test("Création d'un utilisateur - Body correct", async (done) => {
 await request(app).post('/sign-up')
   .send({email:'hajar@hajar.com',nom:'Hajar',chambre:13})
   .expect(200)
   .expect({result:true, saveUser:{token:1234,email:'hajar@hajar.com',nom:'Hajar',chambre:13},tempsAttente:10 });
 done();
});

test("Création d'un utilisateur - Body incomplet", async (done) => {
  await request(app).post('/sign-up')
    .send({email:'hajar@hajar.com'})
    .expect(200)
    .expect({ result: false });
  done();
 });

 test("Connexion d'un utilisateur - Body correct", async (done) => {
  await request(app).post('/sign-in')
    .send({email:'hajar@hajar.com',nom:'Hajar',chambre:13})
    .expect(200)
    .expect({result:true, saveUser:{token:1234,email:'hajar@hajar.com',nom:'Hajar',chambre:13},tempsAttente:10 });
  done();
 });
 
 test("Connexion d'un utilisateur - Body incomplet", async (done) => {
   await request(app).post('/sign-in')
     .send({email:'hajar@hajar.com'})
     .expect(200)
     .expect({ result: false });
   done();
  });

  test("Récupération d'un événement - Params correct", async (done) => {
    await request(app).get('/events/event1234')
      .expect(200)
      .expect({result:true, event:{nom:"Pause goûter de l'après-midi",date:"15/03/2020"},tempsAttente:10});
    done();
  });


  test("Confirmation de la participation à un événements - Body correct", async (done) => {
    await request(app).post('/confirmationEvents')
      .send({userId:'id1234',eventId:'event1234',isComing:true})
      .expect(200)
      .expect({ result: false });
    done();
   });

   test("Affichage détail des recommandations - Params correct", async (done) => {
    await request(app).get('/recommandations/restauration')
      .expect(200)
      .expect({ result:true,recommandation:{nom:'Berthillon',adresse:"31 rue saint louis en l'ile, 75004 Paris",telephone:'+33 (0)1 43 54 23 31'},tempsAttente:10 });
    done();
  });

