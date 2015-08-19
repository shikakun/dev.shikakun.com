title: 円しか描けない僕が Sketch 3 で絵を描く
date: 2015-08-18 08:58:35
tags:
---

（これまでのあらすじ）半年前に衝動的に購入して放置していた Sketch 3 をちゃんと使えるようになろうと思い、まずは [円を描きました](http://dev.shikakun.com/post/sketch-studies-making-circle/) 。

----

身の回りに Sketch に詳しい人がいなかったし、インターネットを検索しても初歩的な使い方を教えてくれるページがなかったので、本を探しました。でも、実は Sketch だけ紹介する日本語の紙の本ってまだないのでしょうか…？電子書籍では、以下の2冊があるようです。

* [Sketch 3の基本。](http://creative-tweet.net/sketch-3-basics/)
* [Sketch 3 Book for Beginner](http://thoughts.protean.cc/sketch-3-book-for-beginner/)

でも、書かれたのが2014年だったり、やっぱり電子書籍より紙の本がいいなという時代錯誤的な思いもあり、さらに調べてみると「Sketch 3の基本。」を書かれている窪木博士さんが、ベクターデータについて紹介している本で Sketch について書かれていることを知りました。

* [Web制作者のためのIllustrator＆ベクターデータの教科書 マルチデバイス時代に知っておくべき新・グラフィック作成術](http://www.amazon.co.jp/dp/4844338161)

買って読んでみると、この本の Chapter 5-2 で Sketch を使って歯車のアイコンを描くというチュートリアルが載っていた！というわけで、この本で紹介されている方法に従って僕も歯車のアイコンを描いてみようと思います。

{% asset_img photo_completion.jpg %}

この本、Sketch のことだけ書いてあるわけではなく、Illustrator の使い方やベクターデータを最適化する考え方、ウェブで svg 画像を表示する方法やロゴ作成の仕事の進め方まで幅広く書かれていて、とても参考になりました。
## 円をくりぬく

では、さっそく [前回](http://dev.shikakun.com/post/sketch-studies-making-circle/) 円を描いただけの Sketch ファイルを開きます。
歯車を描きたいので、この円をドーナツみたいにくりぬきたいです。

{% asset_img capture_substract_a.png %}

円を選択して、Mac の画面上のメニューバーから <code>Edit</code> > <code>Duplicate</code> をクリック。

{% asset_img capture_substract_b.png %}

複製された円を選択して、80px 小さい 330px × 330px に縮小して中央に寄せます。

{% asset_img capture_substract_c.png %}

背面にある円を前面の円でくりぬきたいので、両方の円を選択して、Mac の画面上のメニューバーから <code>Layer</code> > <code>Combine</code> > <code>Subtract</code> をクリック。
Combine は結合、Subtract は差し引く、という意味なのか（英語の勉強）。

{% asset_img capture_substract_d.png %}

くりぬけた！

{% asset_img capture_substract_e.png %}

ちなみに結合する前のそれぞれの円のパス情報は残ったままなので、あとでウィンドウの左の描いた要素のリストから結合タイプの指定を変更することもできるそうです。

## スポークを描く

歯車の車輪のスポーク部分（3本の線が Y 字になっているところ）を描きたい。
Mac の画面上のメニューバーから <code>Insert</code> > <code>Shape</code> > <code>Rectangle</code> をクリック。

{% asset_img capture_spoke_a.png %}

[本](http://www.amazon.co.jp/dp/4844338161) に載ってるキャプチャ画像を見ながら、180px × 20px の長方形を描きました。

この長方形を回転させながらコピーします。
長方形を選択した状態で、Mac の画面上のメニューバーから <code>Layer</code> > <code>Paths</code> > <code>Rotate Copies</code> をクリック。

{% asset_img capture_spoke_b.png %}

何個コピーするか尋ねられるので、あと2個ほしいから <code>2</code> と入力します。

{% asset_img capture_spoke_c.png %}

コピーできた！
ここで、コピーした長方形たちの中央にある白い丸をクリックしてガイドを引いた中央にドラッグすると…

{% asset_img capture_spoke_d.png %}

あっ

{% asset_img capture_spoke_e.png %}

すごい！Y 字にできた！

あとは、さっきくりぬいた円と長方形たちを結合したいので、円をくりぬいたときと同じ要領で、両方を選択して Mac の画面上のメニューバーから <code>Layer</code> > <code>Combine</code> > <code>Union</code> をクリック。
ちなみに Union はひとつにするという意味（英語の勉強）。

{% asset_img capture_spoke_f.png %}

スポークが描けた！

## 歯を描く

歯車の歯を描きます。
スポークと同じように、Mac の画面上のメニューバーから <code>Insert</code> > <code>Shape</code> > <code>Rectangle</code> をクリック。

{% asset_img capture_teeth_a.png %}

[本](http://www.amazon.co.jp/dp/4844338161) にならって、36px × 36px の正方形を描きました。

{% asset_img capture_teeth_b.png %}

ウィンドウ上にある <code>Edit</code> ボタンを押してパスを編集するモードに切り替えます。

{% asset_img capture_teeth_c.png %}

パスのポイントをドラッグして歯車の歯っぽくします。矢印キーも使えます。

{% asset_img capture_teeth_d.png %}

ウィンドウ右の <code>Finish Editing</code> をクリックして、編集モードから抜けます。Vim っぽい。

{% asset_img capture_teeth_e.png %}

ウィンドウ右の <code>Radius</code> に <code>4</code> と入力すると、4px の角丸になる！
描いたあとで角丸の大きさを指定できるのは便利ですね。

{% asset_img capture_teeth_f.png %}

あとは歯を回転させながらコピーしたい！ということで、スポークと同じように Mac の画面上のメニューバーから <code>Layer</code> > <code>Paths</code> > <code>Rotate Copies</code> をクリックして合計20歯になるように <code>19</code> と入力します。

{% asset_img capture_teeth_g.png %}

あっ

{% asset_img capture_teeth_h.png %}

あっあっ

{% asset_img capture_teeth_i.png %}

あ───────っ

{% asset_img capture_teeth_j.png %}

やった─────────────────！

学習の記録ということで最後めんどくさくなって省略しましたが、[こちらの本](http://www.amazon.co.jp/dp/4844338161) にはもっと詳細に書かれているので、ぜひご参照ください…！
