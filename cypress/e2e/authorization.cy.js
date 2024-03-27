describe('Signin tests', () => {
  it('None-existent login test', () => {
    cy.fixture('tests').then(data => {
      cy.log('Переxод на страницу автозации')
      cy.visit(data.login_url)

      cy.log('Ввод несуществующего логина')
      cy.get('input[class="form-input--text form-input"]')
        .type(data.none_existent_login)

      cy.log('Ввод несуществующего пароля')
      cy.get('input[class="form-input--password form-input"]')
        .type(data.none_existent_password)

      cy.log('Клик по кнопке "Войти')
      cy.get('div[class="login-form__button"] button[type="submit"]')
        .click()
    })
  })


  it('existent login test', () => {
    cy.fixture('tests').then(data => {
      cy.log('Переходим на страницу авторизации')
      cy.visit(data.login_url)

      cy.log('Ввод существующего логина')
      cy.get('input[class="form-input--text form-input"]')
        .type(data.student_login)

      cy.log('Ввод существующего пароля')
      cy.get('input[class="form-input--password form-input"]')
        .type(data.valid_password)

      cy.log('Клик по кнопке "Войти')
      cy.get('div[class="login-form__button"] button[type="submit"]')
        .click()
    })
  })
})
