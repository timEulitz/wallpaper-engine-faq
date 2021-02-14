---
sidebarDepth: 2
---

# 命令行控制

您可以使用命令行参数来控制 Wallpaper Engine。 这使您可以通过快捷方式、宏绑定或您选择的任何一种自行编写的脚本或代码，来访问该应用程序的大多数功能。 例如，您可以暂停或停止所有壁纸，更改壁纸，甚至更改正在运行的壁纸的设置。

请确保 Wallpaper Engine 已在运行，然后使用本指南中列出的任何命令参数，通过运行程序的主要进程 *wallpaper32.exe*（如果使用该应用程序的 64 位版本，则为 *wallpaper64.exe*）向 Wallpaper Engine 发送命令。 您可在 `wallpaper_engine` 安装目录中找到可执行文件。

所有命令均作为 `-control` 参数的值发出。 例如，暂停命令可按照如下方式执行：

``` powershell
wallpaper32.exe -control pause
```

对于包含空格的字符串，请务必使用双引号 **"** 字符：

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

## 命令概览

### 暂停

暂停所有壁纸。

``` powershell
-control pause
```

### 停止

停止所有壁纸。

``` powershell
-control stop
```

### 播放

恢复所有暂停或停止的壁纸。

``` powershell
-control play
```

### 静音

使所有壁纸静音。

``` powershell
-control mute
```

### 取消静音

使所有壁纸取消静音。

``` powershell
-control unmute
```

### 打开壁纸

为给定显示器或第一台显示器（如果未指定任何显示器）加载新壁纸。 您可以使用 `location` 或 `monitor` 参数来选择要加载壁纸的显示器，或使用 `playInWindow` 参数在窗口中打开壁纸。

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file：** 要打开的壁纸的 project.json 的路径，或壁纸文件的直接路径 (.mp4 etc)。
* **location* （可选） *：** 显示器内部标识符。 它们由您的 PC 生成，可在 config.json 文件中找到。
* **monitor* （可选） *：** 要加载壁纸的显示器的索引，以 0 开头。
* **preset* （可选） *：** 要加载的本地预设的名称，您必须已经事先创建并保存该本地预设。
* **playInWindow* （可选） *：** 如果您想在一个窗口中打开/控制多款壁纸，则为该窗口的名称。
  * **width* （可选） *：** 窗口宽度。
  * **height* （可选） *：** 窗口高度。
  * **x* （可选） *：** 窗口的水平位置。
  * **y* （可选） *：** 窗口的垂直位置。

### 下一张壁纸

跳至给定显示器或所有显示器（如果未指定任何显示器）的下一张壁纸。

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### 移除壁纸

从指定显示器或窗口中移除壁纸，或移除所有壁纸。

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location* （可选） *：** 显示器内部标识符或您指定的窗口名称。
* **monitor* （可选） *：** 要关闭壁纸的显示器的索引，以 0 开头。

### 打开播放列表

为给定显示器或第一台显示器（如果未指定任何显示器）加载新壁纸。 您可以使用 location 或 monitor 参数来选择要加载壁纸的显示器。

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist：** 您已创建并保存在 Wallpaper Engine 中的播放列表的名称。
* **location* （可选） *：** 显示器内部标识符。 它们由您的 PC 生成，可在 config.json 文件中找到。
* **monitor* （可选） *：** 要加载播放列表的显示器的索引，以 0 开头。

### 应用壁纸设置

将壁纸属性动态应用于给定壁纸或所有壁纸。 这使您能够在该程序运行时动态更改属于壁纸的任何设置，而无需打开壁纸浏览器手动更改壁纸设置。 选择浏览器中的任何壁纸时，单击右侧的**分享 JSON**，即可在浏览器中轻松找到可用属性列表。

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties：** 定义为要应用的 **JSON** 字符串的属性。 必须以 `RAW~(` 和 `)~END` 为分隔符对该字符串进行特殊转义，请参阅下方的示例！
* **location* （可选） *：** 显示器内部标识符或您指定的窗口名称。
* **monitor* （可选） *：** 要更新属性的显示器的索引，以 0 开头。

将名为 `rate` 的壁纸设置更改为 10 的示例：

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

将壁纸方案颜色设置更改为红色的示例（`"1 0 0"`代表 *RGB* 值）：

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### 隐藏桌面图标

隐藏桌面图标。

``` powershell
-control hideIcons
```

### 显示桌面图标

显示桌面图标。

``` powershell
-control showIcons
```
