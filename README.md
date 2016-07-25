# FCC voting app basejump

# Вопросы
1. в целом обратная связь по архитектуре, и насколько реально, когда frontend работает с api, а не через сокеты и api единое для всех клиетов.
2. у меня не работает роутинг и я его дочинил до состояния, что приложение падает с ошибкой invariant.js?568c:38 Uncaught Invariant Violation: App.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.
3. понять как локализовать ошибку как в пункте 2 в коде, настраивали мы source map и что толку если сообщение об ошибке - не работает весь метод render.
4. так же мне не понятно место webpack я запускаю приложение командой webpack && npm start мне кажется это как-то не правильно. 
5. если сработаемся мне нужен будет code review готового проекта
6. как монгу запустить вместе с приложением?
7. долго собирает webpack - 17 секунд, это нормально?
8. npm build не работает
9. feedback по webpack config
10. Переменная в класе - как объявить


App uses

Database level
MongoDB
Mongoose

Backend
Node.js
Express
Pasport

Frontend
Backbone
Marionette
Flux
React

Database schema

poll_url : String
user_id 
poll_name : String
poll_options : Object
poll_ip : Array

Api routes

/auth/oauth

/poll