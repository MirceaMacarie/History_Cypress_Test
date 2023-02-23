describe ('Verify different aspects on Hiphi.ro', () => {

    //Access the website of the Faculty of History BBU
    it('History BBU website', () => {
        cy.visit('https://hiphi.ubbcluj.ro/');


        //Verify the website logo to be visible
        cy.get('#logo').should('be.visible');


        //Verify the existence of the footer
        cy.get('#footer-copy').should('exist');


        //Access the information about admission on Faculty
        cy.get(':nth-child(2) > [href="/admitere.html"]').click();
        cy.get('.subpages > :nth-child(1) > a').click();
        cy.get('.page-title').should('have.text', 'Licenţă');


        //Access the information about Faculty academic programs
        cy.get('[href="/studii"]').click();
        cy.get('.page-title').should('have.text', 'Programe');

        cy.get('.subpages > :nth-child(1) > ul > :nth-child(11) > a').click();
        cy.get('.page-title').should('have.text', 'Fişele disciplinelor - domeniul Istorie');
        

        //Enter on Students section and verify the schedule
        cy.get('li.items-7 > [href="/studenti.html"]').click();
        cy.get('.page-title').should('have.text', 'Studenţi');

        cy.get('.subpages > :nth-child(1) > ul > :nth-child(2) > a').click();
        cy.get('.page-text > h2').should('have.text', 'Orarul semestrului II, 2022/2023');
        cy.scrollTo(0, 1700);


        //Enter on Students section and check the medical services of the University
        cy.scrollTo(0, -1700);
        cy.get('li.items-7 > .selected').click();
        cy.get('.page-title').should('have.text', 'Studenţi');

        cy.get('.subpages > :nth-child(3) > ul > :nth-child(3) > a').click();
        cy.get('.page-title').should('have.text', 'Acces la servicii medicale');


        //Search in the search box the word "Macarie" (my name) and check the results
        cy.get('#header-content > .toolbox > .searchbox > .search-input').type('Macarie').type('{enter}');
        cy.get('.page-title').should('have.text', 'Căutare');

        cy.get(':nth-child(2) > .search-title > a').click();
        cy.get('.page-title').should('have.text', 'Cercuri studenţeşti');


        //Chech XXS in the search box
        cy.get('#header-content > .toolbox > .searchbox > .search-input').type('<script>alert(1)</script>').type('{enter}');
        cy.screenshot();


        //Click on the logo to return to main page and verify the first event 
        cy.get('#logo').click();
        cy.scrollTo(0, 500);
        cy.get('.card-status-active_plus > .card-content > .eveniment-titlu > a').click();
        cy.get('.page-title').should('have.text', 'Rural History conference, 2023, Cluj-Napoca');


        //Check the Youtube button from the website footer
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.get('.social-youtube').should('exist').should('be.visible');
        
    });
})