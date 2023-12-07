describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('pasien baru', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://dev.morclinic.id/home');
    cy.get('#username').type('Ro01');
    cy.get('#password').type('12345678');
    cy.get('.btn-dark').click();
    cy.get('.hover > .waves-effect > .site-menu-title').click();
    cy.get('.ml-auto > .btn').click();
    cy.get('.font-weight-500').click();
    cy.get(':nth-child(3) > :nth-child(9) > #pilih-pasien').click();
    cy.get('#no_telp').type('089506549544');
    cy.get('#nama_pasien').type('GITA ');
    cy.get('#nama_pasien_tengah').type('cahya');
    cy.get('#nama_pasien_belakang').type('rembulan');
    cy.get('#nik').type('1234567890123457');
    cy.get('#tempat_lahir').type('bandung');
    cy.get('#tanggal_lahir').click();
    cy.get(':nth-child(2) > .today').click();
    cy.get('#tanggal_lahir').type('07-12-1997');
    cy.get(':nth-child(2) > .col-md-7').click();
    cy.get('#select2-provinsi-container').click();
    cy.get('#select2-kabupaten-container > .select2-selection__placeholder').click();
    cy.get('.select2-search__field').type('sleman');
    cy.get('#select2-kecamatan-container').click();
    cy.get('#select2-kelurahan-container').click();
    cy.get('#select2-gol_darah-container > .select2-selection__placeholder').click();
    cy.get('#select2-agama-container > .select2-selection__placeholder').click();
    cy.get(':nth-child(16) > .col-md-9 > .btn-group > .btn > .filter-option').click();
    cy.get(':nth-child(16) > .col-md-9 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a > .text').click();
    cy.get('#select2-id_suku-container > .select2-selection__placeholder').click();
    cy.get('.select2-search__field').type('jawa');
    cy.get('#select2-status_perkawinan-container > .select2-selection__placeholder').click();
    cy.get('#select2-id_pekerjaan-container > .select2-selection__placeholder').click();
    cy.get('#select2-id_pendidikan-container').click();
    cy.get('#kontak_penanggung_jawab').type('089506549578');
    cy.get('#alamat_penanggung_jawab').click();
    cy.get('#select2-hubungan_keluarga-container > .select2-selection__placeholder').click();
    cy.get(':nth-child(1) > .col-md-9 > .btn-group > .btn > .filter-option').click();
    cy.get(':nth-child(1) > .col-md-9 > .btn-group > .open > .dropdown-menu > .selected > a > .text').click();
    cy.get('#select2-unit_umum-container').click();
    cy.get('#select2-id_jadwal_klinik-container > .select2-selection__placeholder').click();
    cy.get('#ladda-button-pendaftaran').click();
    cy.get('.confirm').click();
    /* ==== End Cypress Studio ==== */
  });
})