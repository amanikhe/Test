Feature: Formulaire de week-end

Scenario: Remplir et soumettre le formulaire avec des données de test
  Given Je visite l'URL du formulaire
  When Je remplis le formulaire avec des données de test
  Then Je vérifie que le formulaire a été soumis avec succès