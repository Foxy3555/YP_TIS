describe('Registration tests', () => {
  it('None-existent registration test', () => {
    cy.fixture('tests').then(data => {
      cy.log('Переxод на страницу регистрации')
      cy.visit(data.reg_url)

      cy.log('Ввод не валидного логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(data.none_valid_login)

      cy.log('Ввод не валидной электронной почты')
      cy.get('input[class="form-input--email form-input"]')
        .type(data.none_valid_email)

      cy.log('Ввод не валидного пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
        .type(data.none_valid_password)

      cy.log('Повтор ввода пароля')
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
        .type(data.none_valid_password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('.form__buttons > :nth-child(4)')
        .click()
    })
  })


  it('Existent registration test', () => {
    cy.fixture('tests').then(data => {
      cy.log('Переxод на страницу регистрации')
      cy.visit(data.reg_url)

      cy.log('Ввод валидного логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(data.valid_login)

      cy.log('Ввод валидной электронной почты')
      cy.get('input[class="form-input--email form-input"]')
        .type(data.valid_email)

      cy.log('Ввод валидного пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
        .type(data.valid_password)

        cy.log('Повтор ввода пароля')
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
          .type(data.valid_password)  

      cy.log('Клик по кнопке "Войти"')
      cy.get('.form__buttons > :nth-child(4)')
        .click()
    })
  })


  it('Busy email test', () => {
    cy.fixture('tests').then(data => {
      cy.log('Переxод на страницу регистрации')
      cy.visit(data.reg_url)

      cy.log('Ввод валидного логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(data.valid_login)

      cy.log('Ввод занятой электронной почты')
      cy.get('input[class="form-input--email form-input"]')
        .type(data.busy_email)

      cy.log('Ввод валидного пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
        .type(data.valid_password)

      cy.log('Повтор ввода пароля')
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
        .type(data.valid_password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('.form__buttons > :nth-child(4)')
        .click()
    })
  })


  it('Busy login test', () => {
    cy.fixture('tests').then(data => {
      cy.log('Переxод на страницу регистрации')
      cy.visit(data.reg_url)

      cy.log('Ввод валидного логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(data.student_login)

      cy.log('Ввод занятой электронной почты')
      cy.get('input[class="form-input--email form-input"]')
        .type(data.valid_email)

      cy.log('Ввод валидного пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
        .type(data.valid_password)

      cy.log('Повтор ввода пароля')
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
        .type(data.valid_password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('.form__buttons > :nth-child(4)')
        .click()
    })
  })

  it ('rus login signup test',() => {
    cy.fixture('tests').then(data => {
        cy.log('Переxод на страницу регистрации')
        cy.visit(data.reg_url)

        cy.log('Ввод несуществующего логина')
        cy.get('input[autocomplete="username"]')
            .type(data.rus_login)

            
        cy.log('Ввод несуществующего mail')
        cy.get('input[class="form-input--email form-input"]')
            .type(data.valid_email)

        cy.log('Ввод password')
        cy.get('div[class="registration-form__label"]:nth-child(3)').find('input[autocomplete="new-password"]')
            .type(data.valid_password)

        cy.log('Ввод password')
        cy.get('div[class="registration-form__label"]:nth-child(4)').find('input[autocomplete="new-password"]')
            .type(data.valid_password)

            .wait(3000)
        cy.log('Клик по кнопке "Войти')
        cy.get('.form__buttons > :nth-child(4)')
            .click()
            
        cy.log('Ошибка')
        cy.get('.form-error > span')
            .should('exist')
    })
})
})