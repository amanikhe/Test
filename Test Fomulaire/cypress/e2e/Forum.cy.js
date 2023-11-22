

// Dans weekend_steps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Je visite l\'URL du formulaire', () => {
  cy.visit('C:\Users\Amoun Kh\Desktop\Test Fomulaire\ceWeekEnd.html'); 
});

When('Je remplis le formulaire avec des données de test', () => {
  cy.request('GET', 'https://dummyapi.io/account')
    .then((response) => {
      const user = response.body.data[0];

      cy.get('#nom').type(user.lastName);
      cy.get('#prenom').type(user.firstName);
      cy.get('#ville').type('Lille'); 
      cy.get('#email').type(user.email);
      cy.get('#telephone').type(user.phone);
      cy.get('form').submit();
    });
});

Then('Je vérifie que le formulaire a été soumis avec succès', () => {
  cy.get('#message').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience inoubliable.');
});
