# Привязка обоев к определенным программам

С помощью Wallpaper Engine можно автоматически переключаться между разными обоями, в зависимости от того, какой .exe файл запущен в системе. Эта функция может быть полезна, если вы, например, хотите использовать менее отвлекающие обои во время игры или автоматически выводить на экран визуализатор звука при запуске проигрывателя.

::: tip
Если у вас возникают технические проблемы с определенными играми или программами, вы также можете задать в настройках Wallpaper Engine правило, которое будет отключать Wallpaper Engine при запуске определенного .exe файла. Если вы хотите решить техническую проблему взаимодействия с другой программой, прочитайте эту инструкцию: [Решение проблем с конкретными программами и играми](/functionality/applicationrules.html)
:::

## Создание правила приложения

На вкладке **Производительность** в настройках Wallpaper Engine нажмите кнопку **Редактировать** в разделе **Правила приложения**. Нажмите кнопку **Создать новое правило**, чтобы задать новые обои для выбранного вами .exe файла. В строке ввода **Название приложения:** введите название вашего .exe файла. Убедитесь, что названия полностью идентичны: например, *musicplayer.exe*. В пункте **Условие** выберите **«Запущено»**. Для опции **Воспроизведение обоев** вы можете выбрать один из трех вариантов:

* Загрузить обои
* Загрузить плейлист
* Загрузить профиль

Обратите внимание, что оба варианта, и **«Загрузить обои»**, и **«Загрузить плейлист»**, загрузят только одни обои на всех экранах. Есть у вас есть несколько мониторов, и вы бы хотели запускать разные обои на каждом из экранов (или разные плейлисты на каждом из экранов), вам нужен вариант **«Загрузить профиль»**. Вы найдете подробную информацию по созданию такой системы ниже.

### Создание профиля для нескольких мониторов

Вариант **«Загрузить профиль»** в правилах приложения дает возможность создавать профили для нескольких мониторов, которые можно настроить в общем окне мониторов (значок экрана в верхнем правом углу интерфейса). Профиль — это набор всех загруженных обоев и плейлистов на всех ваших экранах. Когда запускается профиль, все обои и плейлисты будут расположены на мониторах в соответствии с настройками профиля.

Настройте удобную для вас конфигурацию обоев и плейлистов на ваших мониторах, а затем нажмите на кнопку **«Сохранить профиль»** в настройках монитора и сохраните данную конфигурацию под удобным для вас названием. Обратите внимания, что любые изменения, которые вы внесете в настройки профиля не будут сохранены, пока вы вновь не нажмете на кнопку **«Сохранить профиль»**. Вы можете создать несколько профилей и привязать их сразу к нескольким программам. Например, вы можете создать три профиля — **«Музыка»**, **«Игры»** и **«Фильмы»**, а затем привязать к каждому профилю все .exe файлы, которые относятся к этим категориям.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>