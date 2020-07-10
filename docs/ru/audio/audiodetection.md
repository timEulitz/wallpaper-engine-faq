# Не работают визуализаторы аудио / звук не обнаружен

Есть несколько причин, почему визуализаторы аудио могут не работать. Здесь мы перечислим все известные возможные причины. Пожалуйста, прочтите полное руководство, чтобы не пропустить какие-либо иные причины проблем.

## 1. Настройка звукового устройства.
Откройте настройки Wallpaper Engine и перейдите на вкладку «Общее». Ближе к центру находится раздел «Медиа», в котором можно выбрать аудиоустройство. Удостоверьтесь, что выбрано правильное устройство. Если вы не знаете, какое устройство правильное, попробуйте все возможные устройства во время прослушивания музыки. То, с которым работают визуализаторы аудио, и есть нужное.

Если выбрано правильное аудиоустройство, но вы все равно не слышите звук или если ваши визуализаторы аудио не работают, убедитесь, что вы не отключили звук Wallpaper Engine в окне звукового микшера или не установили для него малую громкость. Windows не различает громкость воспроизведения и записи звука. Это означает, что если вы установили низкую громкость в Windows, запись звука также не будет работать:

![Увеличьте громкость и включите звук Wallpaper Engine в звуковом микшере Windows.](./audiomixer.png)

Если звук воспроизводится, но на слишком низкой громкости, он может не быть распознан. Внутренние настройки звука в приложениях (музыкальном проигрывателе, веб-браузере и т. д.) влияют на качество его распознавания. Если вы не хотите увеличивать громкость остальных приложений, увеличить чувствительность распознавания можно в настройках Wallpaper Engine на вкладке «Общее» (по умолчанию громкость записи составляет 50%).

## 2. Проблемы, вызванные оборудованием.

### Гарнитуры Corsair Void Pro / Bluetooth / USB

USB- и беспроводные гарнитуры часто имеют проблемы со звуковыми драйверами. Исправить проблемы со многими устройствами можно, установив в настройках устройства Windows частоту дискретизации звука 44 100 Гц:

Нажмите правой кнопкой мыши по значку звука в правом углу панели задач, затем выберите «Открыть параметры звука». В открывшемся окне в разделе «Вывод» нажмите на «Свойства устройства». Далее нажмите на «Дополнительные свойства устройства» и перейдите на вкладку «Дополнительно». Замените частоту дискретизации на рекомендованную нами. В различных версиях Windows точное расположение этого меню отличается. Если меню найти не удается, поищите в интернете инструкции о том, как изменить частоту дискретизации звуковых устройств в вашей версии Windows.

![Установите частоту дискретизации в «24 бит, 44100 Гц».](./samplingrate.png)

### Гарнитуры Razer с ТНХ

В настройках Wallpaper Engine выберите устройство ввода «Динамики (Razer XXX)». Эта опция находится в общих настройках, и любые гарнитуры Razer с эффектами THX должны ее поддерживать.

## 3. Конфликтующие приложения.

Если настройки звука правильные, но реагирующие на аудио обои на звук не реагируют, то, скорее всего, у вас установлено звуковое оборудование или программное обеспечение, которое блокирует запись всего воспроизводимого на компьютере аудио. Его нужно правильно настроить или удалить:

* Nahimic
* Sonic Suite
* Alienware Audio
* Прочие приложения, особенно предустановленные на ноутбуках

Если вы не знаете, установлены ли у вас такие приложения, проверьте компьютер инструментом сканирования Wallpaper Engine чтобы найти программы, которые часто вызывают такие проблемы:

* [Инструмент сканирования Wallpaper Engine](/debug/scantool.html)
