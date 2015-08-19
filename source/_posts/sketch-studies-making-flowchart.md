title: 歯車しか描けない僕が Sketch 3 で画面遷移図を描く
date: 2015-08-19 19:47:53
tags:
---

（これまでのあらすじ）半年前に衝動的に購入して放置していた Sketch 3 をちゃんと使えるようになろうと思い、本を読みながら歯車アイコンを描きました。連載第3回目です。

* [なんにもできない僕が Sketch 3 で円を描く (第1回)](http://dev.shikakun.com/post/sketch-studies-making-circle/)
* [円しか描けない僕が Sketch 3 で絵を描く (第2回)](http://dev.shikakun.com/post/sketch-studies-making-pictogram/)

----

仕事で Photoshop を使ってスマートフォンサイトの画面遷移図を描くことがありますが、めんどうくさい。画面遷移図っていくつもの画面を同じドキュメントに載せる必要があるのでカンバスが大きくなりがちですが、大きくなればなるほど重くなってしまう。ベクターデータではそんなことないのかなと思って、きょうは Sketch 3 で画面遷移図を描いてみようと思います。

## Mobile Safari のテンプレートをダウンロードする

{% asset_img capture_template_a.png %}

Sketch にはもともと iOS や Material Design のテンプレートが用意されていて、<code>File</code> > <code>New From Template</code> からプロジェクトにあったものを選ぶだけで UI コンポーネントを手に入れられます！

{% asset_img capture_template_b.png %}

すごい！ここからコピー&ペーストするだけで、すぐに画面のプロトタイプが作れますね。

でも、Mobile Safari のアドレスバーやタブのコンポーネントはありません。きょうはスマートフォン向けサイトの画面遷移図を描きたいので、インターネットからダウンロードしようと思います。

[{% asset_img capture_template_c.png %}](http://www.sketchappsources.com/free-source/574-mobile-safari-browser-sketch-freebie.html)

[Sketch App Sources](http://www.sketchappsources.com/) は Sketch で利用できるリソースや Tips やチュートリアルがまとまっているサイトです。無料だけでなく有料でも販売されていますが、ここで Mobile Safari.sketch っていうファイルを無料で配っているすばらしい人がいたので、ダウンロードさせていただきます。[Christine Chao](http://www.sketchappsources.com/contributor/christinechaooo) さん、ありがとう！

* [Mobile Safari UI Browser Sketch freebie - Download free resource for Sketch 3- Sketch App Sources](http://www.sketchappsources.com/free-source/574-mobile-safari-browser-sketch-freebie.html)

Sketch はこんなふうにユーザー同士で便利なリソースやプラグインをオープンに配布しているエコシステムができていて、すごいですね。もちろん、ライセンスは確認するべきですが…。

ダウンロードした Sketch ファイルを開くと、

{% asset_img capture_template_d.png %}

Mobile Safari の UI コンポーネントを Sketch で再現している！すごい！
ページを読み込んだときとスクロールしたときの見た目が用意されているので、ページを読み込んだときのほうを選択してコピーします。

{% asset_img capture_template_e.png %}

<code>File</code> > <code>New</code> で新しい Sketch のドキュメントを作って、ペーストします。

{% asset_img capture_template_f.png %}

これで画面遷移図をつくる準備ができました！

## Make Gird で繰り返しコピーする

画面の数だけコピーしていってもいいのだけど、Sketch には繰り返しコピーする機能があるので使ってみようと思います。

{% asset_img capture_copy_a.png %}

コピーしたい要素を選択した状態で <code>Arrange</code> > <code>Make Grid...</code> をクリック。

{% asset_img capture_copy_b.png %}

どれだけコピーするの？と尋ねられるので、きょうは横に5行で縦に2列にしたいので、<code>Rows</code> に <code>2</code>、<code>Columns</code> に <code>5</code> と入力します。コピーする画面と画面のあいだに書き込みをしたいので、<code>Margin</code> には <code>500px</code> と広めに指定しました。ほかの項目はちょっと英語の意味がわからなかったので [本とか](http://www.amazon.co.jp/dp/4844338161) 読んでください。

Make Gird ボタンを押すと…！

{% asset_img capture_copy_c.png %}

うおー！コピーされた！便利だなぁ。

## たくさんのアートボードをひとつのアートボードにまとめる

画面と画面のあいだに遷移の意味を書き込みたいので、コピーしたアートボードをひとつにまとめるアートボードをつくります。

{% asset_img capture_writing_a.png %}

<code>Insert</code> > <code>Artboard</code> をクリック。

{% asset_img capture_writing_b.png %}

まとめたい画面を囲むようにドラッグして、アートボードを作ります。

{% asset_img capture_writing_c.png %}

あとは、このアートボードに画面遷移の説明を書いていくだけ。
矢印を描くときは、<code>Insert</code> > <code>Shape</code> > <code>Line</code> で線を引いて、ウィンドウ右の <code>Borders</code> の歯車でいろいろ設定できるみたいです。書くのに疲れて雑になってきました。

よーし、これで画面遷移図を Sketch で描けるようになったぞ。次の仕事から使ってみよう！
