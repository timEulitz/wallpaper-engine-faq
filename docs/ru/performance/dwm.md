# Низкая производительность в системах, сочетающих интегрированную и дискретную видеокарты (dwm.exe)

Если на вашем настольном компьютере в BIOS включена интегрированная видеокарта при установленной дискретной, вы можете столкнуться с проблемами в работе *dwm.exe* — низкой производительностью и высокой загрузкой ЦП. Если это возможно, не включайте интегрированную видеокарту и подключите мониторы к дискретной. Одновременное использование двух независимых графических решений мешает работе аппаратного ускорения диспетчера окон рабочего стола. Поэтому очень важно следить за тем, чтобы все мониторы были подключены к основной видеокарте. Это не ошибка и не сбой в работе Wallpaper Engine, это проблема, которая затрагивает любые многомониторные программы, установленные на системах, в которых не все мониторы подключены к основной видеокарте.

Без технологии Nvidia Optimus и ей подобных система Windows будет вынуждена копировать изображение на обоях с одной видеокарты на другую, а это очень медленный процесс. На самом деле, из-за этого любое ваше действие, которое будет затрагивать обе видеокарты, будет происходить медленнее. Это то же самое, что расположить окно с видеоигрой прямо между двумя мониторами.

Эта проблема не затрагивает аппаратное обеспечение, предназначенное для использования нескольких графических процессоров: например, компьютеры с Nvidia Optimus или SLI/CrossFire. В этих случаях проблема не возникает, поскольку решение внедрено на аппаратном уровне.

## Низкая производительность при использовании второй видеокарты в системах без Nvidia SLI / Nvidia Optimus / AMD CrossFire

Многие пользователи считают, что переключение Wallpaper Engine на вторую видеокарту с основной улучшит общую производительность системы, однако это — не более чем распространенное заблуждение: на самом деле общая производительность упадет.

Обои, которые создает Wallpaper Engine, являются частью рабочего стола, а значит — участвуют в процессах проводника Windows. А значит, программа Wallpaper Engine должна использовать тот же графический процессор, что и проводник Windows. В противном случае Windows вынужден обеспечивать взаимодействие между двумя видеокартами, чтобы правильно воспроизводить картинку на мониторах. Эту задачу выполняет процессор, что в результате приводит к значительному снижению общей производительности компьютера и часто потребляет гораздо больше ресурсов, чем обои сами по себе. Некоторые технологии, обеспечивающие полноценное использование нескольких графических процессоров (Nvidia SLI, Nvidia Optimus, AMD CrossFire), решают эту проблему на аппаратном уровне, но это не работает в иных случаях, например, когда вы используете графический процессор Nvidia вместе с интегрированной видеокартой Intel.

Вы можете выбрать, какую видеокарту использовать, в настройках драйверов видеокарты или в общих настройках системы, однако мы категорически не советуем это делать, поскольку общую производительность системы это не повысит.