title: Sketch 3 でピクトグラムを描く
date: 2015-08-17 19:10:30
tags:
---

半年前に衝動的に Sketch 3 を買ったものの、全然使い方がわからず放置していました。あまりにも富豪すぎるだろと思い、改めてちゃんと勉強しようと思ったものの、Sketch の使い方を紹介している本って全然ないんだなと知りました。

* [Web制作者のためのIllustrator＆ベクターデータの教科書 マルチデバイス時代に知っておくべき新・グラフィック作成術](http://www.amazon.co.jp/dp/4844338161)

いろいろ探していると、Sketch だけでなく Illustrator などベクターデータについて書いてある本のなかで Sketch を紹介していることを知りました。今回は、この本で紹介されている通りに実際にピクトグラムを作ってみようと思います！

## アートボードを作る

アートボードとは、Illustrator のそれと同じ意味のキャンバスのことらしいです。
アートボードを作りたい！

{% asset_img capture_artboard_a.png %}

Mac の画面上のメニューバーから <code>Insert</code> > <code>Artboard</code> をクリック。

{% asset_img capture_artboard_b.png %}

Sketch のウィンドウの右にアートボードのプリセットが一覧で表示されます。
今回はアイコンを作りたいので、<code>Mac Icons</code> > <code>512</code> をクリック。

{% asset_img capture_artboard_c.png %}

512px × 512px のアートボードができました。

## ガイドを引く

上下左右の中央にガイドを引きたい！

{% asset_img capture_guide_a.png %}

512px の半分ということで、定規の上にカーソルを乗せて 256px のところでクリック。

{% asset_img capture_guide_b.png %}

ガイドが引けました！

## 円を描いてくりぬく

ドーナツみたいな、真ん中がくりぬかれている円を描きたい！

{% asset_img capture_circle_a.png %}

Mac の画面上のメニューバーから <code>Insert</code> > <code>Shape</code> > <code>Oval</code> をクリック。

{% asset_img capture_circle_b.png %}

カーソルをドラッグして 410px × 410px の円を描きます。描いた円は円をドラッグして中央に揃えましょう。Keynote っぽい挙動で吸い付くように中央寄せできて気持ちいい。

{% asset_img capture_circle_c.png %}

描いた円を選択した状態で、Mac の画面上のメニューバーから <code>Edit</code> > <code>Duplicate</code> をクリック。

{% asset_img capture_circle_d.png %}

描いた円が複製されるので、前面の円だけを選択した状態で 80px 小さい 330px の円に縮小します。ドラッグして縮小してもいいし、Sketch のウィンドウの右のテキストフォーム <code>Size</code> で数値でも指定できます。縮小したら、円を中央に揃えます。

{% asset_img capture_circle_e.png %}

前面の円だけを選択した状態で、Mac の画面上のメニューバーから <code>Layer</code> > <code>Combine</code> > <code>Substract</code> をクリック。

{% asset_img capture_circle_f.png %}

うしろの円が前面の円でくりぬかれた！

{% asset_img capture_circle_g.png %}

なお、くりぬいたあともふたつのパス情報は残っているので、Sketch のウィンドウの左のレイヤー一覧のリストから、要素の重ね方を変更することもできます。
