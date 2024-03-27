describe('View notifications test', () => {
    it('View notifications', () => {
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
            
            cy.log('Клик по вкладке "Уведомления"')
            cy.get('[href="/notification"] > .header__label')
                .click()

            cy.wait(3000)

            cy.log('Клик по кнопке "Просмотреть"')
            cy.get(':nth-child(1) > .notification-list-item > .button')
                .click()

            cy.wait(3000)

            cy.log('Клик на иконку колокольчика')
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg')
                .click()

            cy.log('Клик по ссылке "Прочитать все"')
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link')
                .click()

        })
    })
})