<div position="fixed" right="200px" top="200px" gap="10px">
  <a href="#english" background-color="blue" color="white" padding="20px" border-radius="5px" border="1px solid white">EN</a>
  <a href="japanese" background-color="red" color="white" padding="20px" border-radius="5px" border="1px solid white">日本語</a>
</div>

<h1 id="english">Shirushi-no-Machi App</h1>
This is at the prototype stage of development as of May 2025.

<a href="https://sapporoalex.github.io/Shirushinomachi-proto/"><img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/android-chrome-192x192.png"></a>
<caption>Current version hosted on GitHub</caption>

## Current Stage
- Title page
- Create shirushi page
- View map page, with stylised map (<a href="https://leafletjs.com/">Leaflet</a>)
- Shirushi are placed at a random positon within a 500 meter radius of the user.
- Shirushi are currently saved in local storage, and are removed after 24 hours.
- The user is not currently limited to how many Shirushi they can place.

## To Be Added
- User sign up
- Change DB to have the following columns: user (name), premium (bool), marker (list of objects(creation date, colour, shape, message)), age (int or null), gender (char(m,f,o) or null)
- Change markers to save as objects linked to users.
- Add API for leaflet map (needed for non-local running)
- Hosting
- Shirushi data visualisation pages.
- Shirushi records visibility for premium users.
- Full selection of colours and shapes for Shirushi
- Function to censor words out of messages before creation.

## Gallery
<div display="flex" flex-direction="row">
  <img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo1.png" height="300px" width="auto">
  <img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo2.png" height="300px" width="auto">
  <img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo3.png" height="300px" width="auto">
</div>

## Authors
~Moe Iguchi Luick (Designer, Creator)
~Alex McKinley (Programmer)

## Acknowlegments
<a href="https://leafletjs.com/">Leaflet</a>

<h1 id="japanese">印のまちアプリ（Shirushi-no-Machi App）</h1>
このアプリは、2025年5月現在プロトタイプ段階にあります。

<a href="https://sapporoalex.github.io/Shirushinomachi-proto/"><img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/android-chrome-192x192.png"></a>

<caption>GitHub上で公開中のバージョン</caption>
## 現在の開発状況
タイトルページ

印（Shirushi）作成ページ

地図表示ページ（<a href="https://leafletjs.com/">Leaflet</a>使用のスタイライズされた地図）

印は、ユーザーを中心とした半径500メートルの範囲内にランダムに配置されます

印の情報は現在ローカルストレージに保存され、24時間後に自動削除されます

現時点では、ユーザーが配置できる印の数に制限はありません

## 今後の追加予定機能
ユーザー登録機能

データベース構成の変更（以下のカラムを持たせる予定）:

user（ユーザー名）

premium（プレミアムフラグ：true/false）

marker（オブジェクトのリスト：作成日、色、形、メッセージ）

age（年齢：整数またはnull）

gender（性別：m, f, o または null）

マーカーをユーザーに紐づくオブジェクトとして保存する機能

Leaflet地図のためのAPI導入（ローカル環境以外での動作に必要）

本格的なホスティング

印のデータ可視化ページ

プレミアムユーザー向けの印の記録表示機能

印の色と形の完全選択機能

メッセージ作成時のNGワード検出・検閲機能

## ギャラリー
<div display="flex" flex-direction="row"> <img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo1.png" height="300px" width="auto"> <img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo2.png" height="300px" width="auto"> <img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo3.png" height="300px" width="auto"> </div>
## 作者
〜 井口萌（デザイン・企画）
〜 アレックス・マッキンリー（プログラム）

## 謝辞
<a href="https://leafletjs.com/">Leaflet</a>
