describe('Create job test', () => {
    it('Create job', () => {
        cy.fixture('tests').then(data => {
            cy.log('Переxод на страницу автозации')
            cy.visit(data.login_url)

            cy.log('Ввод логина работодателя')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.employer_login)

            cy.log('Ввод несуществующего пароля')
            cy.get('input[class="form-input--password form-input"]')
                .type(data.valid_password)

            cy.log('Клик по кнопке "Войти')
            cy.get('div[class="login-form__button"] button[type="submit"]')
                .click()

            cy.log('Кликаем по вкладке "Вакансии"')
            cy.get(':nth-child(7) > .menu-item__item-name')
                .click()
            
            cy.log('Кликаем по кнопке "Создать вакансию"')
            cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
                .click()

            cy.wait(5000)
            
            cy.log('Вводим название вакансии')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
                .type(data.job_title)

            cy.log('Выбор графика работы 2/2')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(2) > .radio-component__input')
                .click()
            
            cy.log('Указываем требования')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
                .type(data.requirements)
            
            cy.log('Прописываем обязанности')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
                .type(data.requirements)
            
            cy.log('Нажимаем кнопку "Создать вакансию"')
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons')
                .click()
        })
    })
})