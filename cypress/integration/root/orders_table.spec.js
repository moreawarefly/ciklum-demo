describe('Orders table', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
  it('initially doesnt display table and shows notify instead', () => {
    cy.get('table').should('not.be.visible');
    cy.contains('No orders to be displayed.');
  });
  it('shows orders table if records are present in localStorage', () => {
    window.localStorage.setItem(
      'orders',
      '[{"pair":"btcusd","side":"buy","orderType":"market","quantity":"1"}]',
    );
    cy.reload();
    cy.get('table').should('be.visible');
    cy.get('tbody').find('tr').should((tr) => {
      expect(tr.length === 1).to.equal(true);
    });
    cy.contains('No orders to be displayed.').should('not.be.true');
  });
  it('adds orders from form and persists them on reload', () => {
    window.localStorage.clear();
    cy.reload();
    cy.get('table').should('not.be.visible');
    cy.contains('No orders to be displayed.');
    cy.get('form').find('select[name=pair]').select('btc <=> usd');
    cy.get('form').find('select[name=side]').select('BUY');
    cy.get('form').find('select[name=orderType]').select('MARKET');
    cy.get('form').find('input[name=quantity]').type('1');
    cy.get('form').find('input[type=submit]').click();
    cy.get('table').should('be.visible');
    cy.get('tbody').find('tr').should((tr) => {
      expect(tr.length === 1).to.equal(true);
    });
    cy.contains('No orders to be displayed.').should('not.be.true');
    cy.get('form').find('input[type=submit]').click();
    cy.get('tbody').find('tr').should((tr) => {
      expect(tr.length === 2).to.equal(true);
    });
    cy.reload();
    cy.get('tbody').find('tr').should((tr) => {
      expect(tr.length === 2).to.equal(true);
    });
  });
  // it('has clean localStorage orders key', () => {
  //   expect(window.localStorage.ordersrue).to.equal(undefined);
  // });

  // describe('has needed elements', () => {
  //   it('has Pair dropdown', () => {
  //     cy.get('select[name=pair]');
  //   });
  //   it('has Side dropdown', () => {
  //     cy.get('select[name=side]');
  //   });
  //   it('has Order Type dropdown', () => {
  //     cy.get('select[name=orderType]');
  //   });
  //   it('has Limit text field of number type', () => {
  //     cy.get('input[name=limit][type=number]');
  //   });
  //   it('has Quantity text field of number type', () => {
  //     cy.get('input[name=quantity][type=number]');
  //   });
  //   it('has submit button', () => {
  //     cy.get('input[type=submit]');
  //   });
  // });

  // describe('is populated with data', () => {
  //   it('has Pair dropdown populated', () => {
  //     cy.get('select[name=pair]')
  //       .find('option[value=""]')
  //       .should('have.length', 1);
  //     cy.get('select[name=pair]')
  //       .find('option')
  //       .should((option) => {
  //         expect(option.length > 1).to.equal(true);
  //       });
  //   });
  //   it('has Side dropdown', () => {
  //     cy.get('select[name=side]')
  //       .find('option[value=""]')
  //       .should('have.length', 1);
  //     cy.get('select[name=side]')
  //       .find('option')
  //       .should((option) => {
  //         expect(option.length > 1).to.equal(true);
  //       });
  //   });
  //   it('has Order Type dropdown', () => {
  //     cy.get('select[name=orderType]')
  //       .find('option[value=""]')
  //       .should('have.length', 1);
  //     cy.get('select[name=orderType]')
  //       .find('option')
  //       .should((option) => {
  //         expect(option.length > 1).to.equal(true);
  //       });
  //   });
  // });

  // describe('has proper validation', () => {
  //   it('all fields except limit are required', () => {
  //     cy.get('form').find('select[name=pair]').should('have.attr', 'required');
  //     cy.get('form').find('select[name=side]').should('have.attr', 'required');
  //     cy.get('form').find('select[name=orderType]').should('have.attr', 'required');
  //     cy.get('form').find('input[name=limit]').should('not.have.attr', 'required');
  //     cy.get('form').find('input[name=quantity]').should('have.attr', 'required');
  //   });
  //   it('limit field becomes required if Order Type is set to "limit"', () => {
  //     cy.get('form').find('select[name=orderType]').select('LIMIT');
  //     cy.get('form').find('input[name=limit]').should('have.attr', 'required');
  //   });
  // });
});
