# 32-Bitバージョンと64-Bitバージョン

64-bitバージョンはより大きなファイル（2GB以上）を扱えますが、壁紙のファイルサイズにかかわらず、常にメモリを余分に使用します。 例えば、通常のビデオ壁紙の場合、64-bitバージョンは32-bitバージョンに比べて使用RAMが50MB多くなります。それ以外には、特に違いや改良点はありません。

::: tip
32-bitバージョンがクラッシュするほど巨大な壁紙をお持ちでない限り、32-bitバージョンの使用をお勧めします。 ほとんどのユーザーは、この問題には遭遇しません。
:::

また、PCのビデオシステムに32-bitのプログラムだけに影響するエラーが発生する場合も64-bitバージョンを選択することができます。 コーデックパックのようなものをインストールしたことがあった場合、恒久的に、Wallpaper Engineが使用する32-bitのWindowsビデオシステムにダメージを与えている可能性があります。 64-bitシステムが影響を受けない場合、Wallpaper Engineの64-bitバージョンを使うことで、破損したファイルの修正をせずに済ますことができます。

::: warning
注意 「Web」タイプの壁紙は、常に32-Bitの実行ファイルで実行されます（webwallpaper32.exe）。 ユーザーインターフェースそのものにも同じことが言えます（ui32.exe）。 64-bitが適用されるのは、「シーン」または「ビデオ」の壁紙タイプを選択したときだけです。
:::

## 32-bitまたは64-bitで、Windowsの起動時にWallpaper Engineを自動起動するように設定する方法

まず、トレイアイコンからWallpaper Engineを完全に終了します（WindowsのトレイでWallpaper Engineを右クリックし、「終了」）。 これが重要なのは、こうしないとSteamはWallpaper Engineを起動せず、既に実行されているバージョンを前面に持ってくるだけだからです。

Wallpaper Engineを終了させたらSteamを開き、32-bitまたは64-bitのうち、自動起動させたい方を起動させます。 Wallpaper Engine設定の「一般」タブの最上部で、自動起動を有効にします。 既に有効になっている場合は、完全にオフにしてからもう一度オンにします。 これにより、使用中のバージョンがWindowsと同時に自動的に起動するように設定されます。 