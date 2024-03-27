describe('Traning test', () => {
    it('Valid training test', () => {
        cy.fixture('tests').then(data => {
            cy.log('Переxод на страницу автозации')
            cy.visit(data.login_url)

            cy.log('Ввод существующего логина Студента')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.student_login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]')
                .type(data.valid_password)

            cy.log('Клик по кнопке "Войти')
            cy.get('div[class="login-form__button"] button[type="submit"]')
                .click()

                .wait(3000)

            cy.log('Переход на вкладку "Стажировки"')
            cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label')
                .click()

                .wait(3000)

            cy.log('Вводим в поиск название, что ищем')
            cy.get('.form-input--text')
                .type(data.training_title)

            cy.log('Выбор оплаты "Оплачиваемая"')
            cy.get(':nth-child(2) > .radio-component__input')
                .click()

            cy.log('Жмем иконку поиска')
            cy.get('div.search-input__field > .button')
                .click()

            
        })
    })

    it('None valid training test', () => {
        cy.fixture('tests').then(data => {
            cy.log('Переxод на страницу автозации')
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

                .wait(3000)

            cy.log('Переход на вкладку "Стажировки"')
            cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label')
                .click()

                .wait(3000)

            cy.log('Вводим в поиск название, стажировки которой нет')
            cy.get('.form-input--text')
                .type(data.none_training_title)

            cy.log('Выбор оплаты "Оплачиваемая"')
            cy.get(':nth-child(3) > .radio-component__input')
                .click()

            cy.log('Жмем иконку поиска')
            cy.get('div.search-input__field > .button')
                .click()

            
        })
    })
})