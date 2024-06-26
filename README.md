# BookStore

**BookStore** — полноценное веб-приложение с чистой архитектурой, включающее в себя реализацию книжного магазина и выполнение классических операций по добавлению, удалению, изменению и чтению данных.

**Frontend** составляющая была реализована с помощью фреймворка **NEXT**, использующий библиотеку **React**, сочетая в себе следующие вспомогательные техологии: **Tailwind** — CSS-фреймворк, ориентированный на полезность, **Ant Design** — дизайн-система со своей библиотекой компонентов. Подавляющая часть кода была написана с помощью **TypeScript** со статической типизацией, что обеспечивало надёжность на этапе разработки.

**Backend** составляющая была реализована на основе **ASP.NET Core Web API**, включая в себе чистую и расширяемую архитектуру с логически грамотным разделением слоёв и соблюдением принципов **REST**. В качестве базы данных была выбрана **PostgreSQL**, запускаемая с помощью **Docker**'а. Взаимодействие с базой данных осуществляется через ORM **Entity Framework Core**, позволяя работать с базой данных с помощью объектов .NET. В качестве набора инструментов для автоматического описания RESTful API был выбран Swagger.

____

# Инструкция по запуску:
1. Для запуска Frontend составляющей необходимо в терминале перейти по пути Frontend -> bookstore и прописать `npm run dev`
2. Для запуска Docker контейнера с базой данных необходимов терминале перейти по пути BookStore -> BookStore и прописать `docker-compose up`
3. Для запуска BackEnd составляющей откройте проект через `.sln` файл и запустите его с помощью http.
