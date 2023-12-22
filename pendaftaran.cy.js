describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  /* ==== Test Created with Cypress Studio ==== */
  it('PasienLama', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('dev.morclinic.id');
    /* ==== End Cypress Studio ==== */
    cy.get('#username').type('Ro01');
    cy.get('#password').type('12345678');
    cy.get('button[type=submit]').contains('Sign In').click();
    cy.get('li a span[data-original-title="Pendaftaran Pasien"]').click();
    cy.get('button[type=button]').contains('Daftar Pasien').click();
    cy.get('button[type=button]').contains('Cari Pasien').click();    
    cy.get('input#norm_pencarian').type('8').click();
    cy.get('button[type=submit]').contains('Cari').click();
    cy.get('button[type=button][data-norm=8]').click();    
    cy.get('input[type=radio]#radio_rencana_pembayaran1').check();
    cy.get('input[type=checkbox]#status_penanggungjawab').check();
    cy.get('select#layanan').select('Pemeriksaan Umum', {force:true}).focus();
    cy.get('select#unit_umum').select('POLI UMUM', {force:true}).focus();
    cy.get('select#id_jadwal_klinik').select('Dr. dr. Bambang Satoto,Sp.Rad (K).M.Kes - Minggu(08:00:00 - 20:00:00) - POLI UMUM - 1000', {force:true}).focus();
    cy.get('button[type=submit]').contains('Daftar').click();
    cy.get('.sweet-alert button[tabindex=1]').contains('Daftar Pasien').click();
  });  
})
