describe('AccessTravel Tests',()=>{

    before(() =>{
        cy.visit('https://www.accesstravel.com/en-US');
        cy.get('h1').should('be.visible')
    });


    beforeEach(() =>{
     cy.visit('https://www.accesstravel.com/en-US');
     cy.get('.hotels').click();
    
    });
    
 //Destination field testing 
 it('Verifying Destination field positive tests',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4').invoke('val').should('equal','4');
  
});

it('Verifying Destination field negative tests',()=>{
    cy.get('[class=btn]').click();
    cy.get('[id=Filter_DestinationId]')
    .siblings('div')
    .contains('Destination Required')
    .should('be.visible');
});

//CheckIn field testing
it('Verifying CheckIn field positive tests',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.CheckIn"]').clear();
    cy.get('[name="Filter.CheckIn"]').type('2020-10-25');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.CheckIn"]').should('not.be.visible');
});


it('Verifying CheckIn field negative tests (invalid value)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.CheckIn"]').clear();
    cy.get('[name="Filter.CheckIn"]').type('468952525');
    cy.get('[class=btn]').click();
    
    cy.get('[name="Filter.CheckIn"]')
    .siblings('div')
    .should('be.visible');
});

it('Verifying CheckIn field negative tests (empty field)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.CheckIn"]').clear();
    cy.get('[name="Filter.CheckIn"]').type(' ');
    cy.get('[class=btn]').click();
    
    cy.get('[name="Filter.CheckIn"]')
    .siblings('div')
    .should('be.visible');
});

//CheckOut field testing
it('Verifying CheckOut field positive tests',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.CheckOut"]').clear();
    cy.get('[name="Filter.CheckOut"]').type('2020-10-27');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.CheckOut"]').should('not.be.visible');
});


it('Verifying CheckIn field negative tests (invalid value)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.CheckOut"]').clear();
    cy.get('[name="Filter.CheckOut"]').type('468952525');
    cy.get('[class=btn]').click();
    
    cy.get('[name="Filter.CheckOut"]')
    .siblings('div')
    .should('be.visible');
});

it('Verifying CheckIn field negative tests (empty field)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.CheckOut"]').clear();
    cy.get('[name="Filter.CheckOut"]').type(' ');
    cy.get('[class=btn]').click();
    
    cy.get('[name="Filter.CheckOut"]')
    .siblings('div')
    .should('be.visible');
});

//Adult field testing

it('Verifying Adult field positive cases',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.AdultNum"]').clear();
    cy.get('[name="Filter.AdultNum"]').type('2');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.AdultNum"]').should('not.be.visible');
});



it('Verifying Adult field negative cases (invalid value: digit)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.AdultNum"]').clear();
    cy.get('[name="Filter.AdultNum"]').type('123456789');
    cy.get('[class=btn]').click();
    
    cy.get('[name="Filter.AdultNum"]')
    .siblings('div')
    .should('be.visible');
});

it('Verifying Adult field negative cases (empty field)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.AdultNum"]').clear();
    cy.get('[name="Filter.AdultNum"]').type(' ');
    cy.get('[class=btn]').click();
    
    cy.get('[name="Filter.AdultNum"]')
    .siblings('div')
    .should('be.visible');
});


 it('Verifying Adult field negative cases (invalid value: letter)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.AdultNum"]').clear();
    cy.get('[name="Filter.AdultNum"]').type('e');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.AdultNum"]').should('be.visible');
});


it('Verifying Adult field negative cases (invalid value: sign)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.AdultNum"]').clear();
    cy.get('[name="Filter.AdultNum"]').type('+-');
    cy.get('[class=btn]').click();
    
    cy.get('[name="Filter.AdultNum"]').should('be.visible');
});

// Children field testing

it('Verifying Children field positive case',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.ChildrenNum"]').clear();
    cy.get('[name="Filter.ChildrenNum"]').type('1');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.ChildrensAge[0]"]').should('be.visible');
});

it('Verifying Children field negative cases (invalid value: digit)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.ChildrenNum"]').clear();
    cy.get('[name="Filter.ChildrenNum"]').type('123456789');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.ChildrenNum"]').should('be.visible');
});

it('Verifying Children field negative cases (invalid value: empty fied)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.ChildrenNum"]').clear();
    cy.get('[name="Filter.ChildrenNum"]').type(' ');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.ChildrenNum"]').should('not.be.visible');
});

// Chikdren and age fields testing

it('Verifying Children and age fields positive cases (age<=17)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.ChildrenNum"]').clear();
    cy.get('[name="Filter.ChildrenNum"]').type('1');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.ChildrensAge[0]"]').clear();
    cy.get('[name="Filter.ChildrensAge[0]"]').type('15');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.ChildrenNum"]').should('be.not.visible');
});

it('Verifying Children and age fields negative cases (age>17)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.ChildrenNum"]').clear();
    cy.get('[name="Filter.ChildrenNum"]').type('1');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.ChildrensAge[0]"]').clear();
    cy.get('[name="Filter.ChildrensAge[0]"]').type('12346789');
    cy.get('[name="Filter.ChildrenNum"]').should('be.visible');
});


it('Verifying Children and age fields negative cases (invalid avlue: sign)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.ChildrenNum"]').clear();
    cy.get('[name="Filter.ChildrenNum"]').type('1');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.ChildrensAge[0]"]').type('-+');
    cy.get('[name="Filter.ChildrenNum"]').should('be.visible');
});

it('Verifying Children and age fields negative cases (invalid avlue: empty field)',()=>{
    cy.get('[id=Filter_DestinationId]').select('Paris','4');
    cy.get('[name="Filter.ChildrenNum"]').clear();
    cy.get('[name="Filter.ChildrenNum"]').type('1');
    cy.get('[class=btn]').click();
    cy.get('[name="Filter.ChildrensAge[0]"]').type(' ');
    cy.get('[name="Filter.ChildrenNum"]').should('be.visible');
});

});