---
tags:
  - download
  - re-download
  - deleted
  - deletes
---

# Steamが壁紙を再ダウンロードする

Steamのダウンロードキャッシュが壊れており、Steamがすべてのファイルをダウンロードします（特に理由もない時もあれば、 Steamが正しく終了せずにクラッシュしたような場合もあります）。 原因がWallpaper Engineではないため、Wallpaper Engineが修正することはできません。Steam上のワークショップアプリはすべて、このSteamバグに悩まされています。 頻繁にこの問題が起きる場合は、回避する方法があります。

## Steamを自動的に修正する
私たちには、Steam自動修正ツールがあります。これで、Steamが継続的にこの問題を起こすのを止められると期待できます。 次の手順に従ってください。
* Steamを終了します
* `wallpaper_engine`インストールディレクトリを開きます
  * デフォルトの場所：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `wallpaper_engine\bin\steamredownloadfixer32.exe`を実行します
  * ツールがエラーメッセージを表示した場合はメールでご連絡ください。改善に向けて調査します
* Steamを再起動し、Wallpaper Engineファイルを検証します。
  * [Wallpaper Engineファイルの検証](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

残念ながら、Steamのダウンロードキャッシュが壊れるたびにこれを繰り返さなければなりません。 Steamは当社が開発したものではないため、Steam自体を修正することはできないのです。

## Steamの再インストール

このSteamのバグが頻繁に起きる場合、長い目で見て最も信頼できる方法は、Steamを再インストールすることです。システム上のSteamファイルが壊れていると考えられるためです。 Steamを完全に再インストールしてみてください。

1. SteamからWallpaper Engineをアンインストールします。
2. Steamをアンインストールします。公式ガイドの手順に従ってください。
  * [Steamの再インストール](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * 特に、上記のSteamのサポート記事にある「手動でSteamを削除する」セクションをチェックし、そこに書かれているように*steamapps*ディレクトリのバックアップを取って、すべてのゲームを再ダウンロードする必要がないようにしてください。

## 回避としてローカルバックアップを使用する

それでも問題が継続して起きる場合は、すべての壁紙のローカルバックアップを作成し、すべての壁紙のサブスクライブを解除することもできます。 Steamはサブスクライブしていない壁紙は再ダウンロードしないので、この方法をとると、頼りはローカルバックアップだけになります。 バックアップの作成方法はこちらのガイドをご覧ください。

* [壁紙のバックアップを使用する](/steam/backup)

その後、すべての壁紙のサブスクライブを解除します。 ファイルを手動で削除しないようにしてください。Steam自体が壁紙ファイルを削除する必要があります。そうでないと、Steamは自分で削除するためだけにまた壁紙を再ダウンロードしようとします。