describe('ToDo List Test', () => {
  it('1 Visit site', () => {
    cy.visit('https://forhemer.github.io/React-Todo-List/')
  })
  
  it('2 Add 3 elements', () => { 
	for (let i = 1; i < 4; i++) {
		cy.get('[placeholder="Add Todo..."]').type('Task ' + i.toString())
		  .should('have.value', 'Task ' + i.toString())
		cy.get('[class="input-submit"]')
		 .click()
	}
  })
  
  it('3 Check that the number of items in the list = 3', () => {
    cy.get('li')
	  .should('have.length', 3)
  })
  
  it('4 Select item', () => {
	cy.contains('Task 1')
      .parent()
      .find('input[type=checkbox]')
      .check()
  })

  it('5 Checking item selection', () => {	  
	cy.contains('Task 1')
      .should('have.css', 'text-decoration', 'line-through solid rgb(89, 89, 89)')
  })
	
  it('6 Delete item', () => {
	cy.contains('Task 1')
      .parent()
      .find('button[type=button]')
      .click()
  })
  
  it('7 Checking the deletion of a list item', () => {  
	cy.contains('Task 1')
		.should('not.exist');
	  
	  
	cy.get('li')
        .should('have.length', 2)
	  
  })
})