---
tags:
  - crash
  - close
  - nvidia
  - battleye
---

# Античит BattlEye закрывает Wallpaper Engine
Если при запуске определенных игр Wallpaper Engine закрывается без уведомлений, скорее всего это результат работы античита BattlEye, который применяется во множестве многопользовательских игр. BattlEye применяется в:

* Fortnite,
* PlayerUnknown's Battleground (PUBG),
* Rainbow Six Siege,
* Escape from Tarkov,
* *и многих других играх.*

На некоторых компьютерах BattlEye закрывает Wallpaper Engine (и другие программы) по ошибке. Это не сбой в работе Wallpaper Engine. BattleEye завершает работу Wallpaper Engine, несмотря на то, что Wallpaper Engine не взаимодействует с играми или программами на вашем компьютере.

## Nvidia: режим низкой задержки
У большинства пользователей, которые столкнулись с данной проблемой, был включен *режим сверхнизкой задержки (Ultra-Low Latency Mode)* в настройках драйверов Nvidia. Если вы используете видеокарту Nvidia и столкнулись с этой проблемой, откройте панель управления Nvidia и отключите режим сверхнизкой задержки, чтобы устранить сбои. Выберите *Управление параметрами 3D* -> *Глобальные параметры* -> *Режим низкой задержки* и переключите на *Выкл.* Нажмите кнопку *Применить* и перегрузите компьютер. После этого BattlEye больше не будет по ошибке закрывать Wallpaper Engine.

## Обращение в техподдержку BattlEye
Если описанные выше шаги не решили проблему в многопользовательских играх, в которых применяется BattlEye, вам необходимо напрямую связаться с поддержкой BattlEye:

* [Техподдержка BattlEye](https://www.battleye.com/contact/)

На некоторых компьютерах BattlEye завершает работу Wallpaper Engine по непонятной причине, и мы никак не можем это предотвратить, поскольку BattlEye — довольно мощный античит, который может закрывать любые программы на компьютере, не ставя вас в известность. В таких случаях разработчикам BattlEye необходимо изучить поведение программы на вашем компьютере, поскольку причиной сбоев являются дефекты в их продукте.