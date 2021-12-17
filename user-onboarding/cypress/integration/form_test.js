//writing my test here
describe('User Onboarding app', () => {
   beforeEach(()=> {
       cy.visit('http://localhost:3000/')
   }) 
   const firstNameInput = () => cy.get('input[name=first_name]');
   const lastNameInput = () => cy.get('input[name=last_name]');
   const emailInput = () => cy.get('input[name=email]');
   const passwordInput = () => cy.get('input[name=password')
   const tosInput = () => cy.get('input[type=checkbox]');
   const submitBtn = () => cy.get('button[id="sumbitBtn"]');
   const errorDiv = ()=> cy.get('.errorsDiv')
   
   ;

   it('just to make sure the test work', () => {
       expect(1+2).to.equal(3);
       expect(2+2).to.not.equal(5);
       expect({}).not.to.equal({});
       expect({}).to.eql({});
   })

   it('proper elements are showing',()=> {
       firstNameInput().should('exist');
       lastNameInput().should('exist');
       emailInput().should('exist');
       passwordInput().should('exist');
       tosInput().should('exist');
       submitBtn().should('exist');
   })

   describe('Filling out the inputs', ()=>{
       it('can navigate to the url',()=> {
           cy.url().should('include','localhost');
       })
       it('submit button starts disabled', () => {
           submitBtn().should('be.disabled')
       })
       it('can type in the inputs', ()=> {
           firstNameInput()
           .should('have.value', '')
           .type('First name input')
           .should('have.value', 'First name input')

           lastNameInput()
           .should('have.value', '')
           .type('Last name input')
           .should('have.value', 'Last name input')

           emailInput()
           .should('have.value', '')
           .type('Emailinput')
           .should('have.value', 'Emailinput') 

           passwordInput()
           .should('have.value', '')
           .type('Password input')
           .should('have.value', 'Password input')

           tosInput()
           .check()
           .should('be.checked')
       })
       it ('submit button enables when all imports are filled', ()=> {
           firstNameInput().type('First');
           lastNameInput().type('Last');
           emailInput().type('email@email.com');
           passwordInput().type('12345');
           tosInput().check();
           submitBtn().should('not.be.disabled');
           
       })
    describe('Submit and deleting Users', ()=> {
        it('submit and delete users', ()=> {
            firstNameInput().type('First name input');
            lastNameInput().type('Last name input');
            emailInput().type('email@email.com');
            passwordInput().type('12345');
            tosInput().check();
            submitBtn().click(); 

            
            cy.contains('First name input').reload();
            cy.contains('First name input').should('not.exist');
        })
    })
    
            
    
   })
   describe('Form Validation', ()=> {
    it('Form Validation pops up when theres nothing typed', () => {
        firstNameInput().should('have.value', '').type('A').clear();
        lastNameInput().should('have.value', '').type('B').clear();
        emailInput().should('have.value', '').type('C').clear();
        passwordInput().should('have.value', '').type('D').clear();
        tosInput().check().uncheck();
        errorDiv().should('exist')
      
        
   })
})
})
