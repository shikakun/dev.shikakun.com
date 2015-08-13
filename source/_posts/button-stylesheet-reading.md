title: CSS フレームワークのボタンのスタイルシート読書会
date: 2015-08-13 10:26:24
tags:
---

暑い日が続きますが、いかがボタンのスタイルシートを書いてお過ごしですか？
例えば、こういう html があったとして…

```html
<a class="button" href="/signin">ログイン</a>
<input class="button" type="submit" value="検索">
```

当たり前のように書いていくと、このようなスタイルシートになるでしょうか。

```scss
.button {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: blue;
}
```

単純なようで、実はここにはスタイルシートの本質があると思うんです。というのも、こんなスタイルシートに辿りつくには、考えることがいっぱいあります。

* セレクタの名前は <code>.btn</code> なのか、<code>.button</code> なのか
* ボタンの上下に隙間を指定するのか、高さを指定するのか
* ボタンの幅は指定するのか、しないのか
* ブロック要素にするのか、インラインブロック要素にするのか
* ブラウザのデフォルトのスタイルは影響しないのか？

いままでなんとなく書いてきたボタンのスタイルシートだけど、みんなどうやって書いてるんだろう。そこで、いくつかの CSS フレームワークのボタンのスタイルシートを調べてみることにしました。

（今回はボタンに関係するスタイルシートだけ抜き出して見ていますが、他の記述でブラウザのデフォルトのスタイルをリセットしていたり、他の要素のスタイルの指定が影響している場合があります。）

## Bootstrap (v3.3.5) のボタン

* [サンプルボタンのページ](/examples/button-stylesheet-reading/bootstrap_v3.3.5.html)

```css
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
```

* セレクタの名前は <code>.btn</code> 。
* <code>width</code> を指定せずに <code>inline-block</code> 要素に指定しているので、文字数によってボタンの大きさが変わる。
* <code>height</code> を指定せずに <code>padding</code> でタップ領域を広げている。
* <code>white-space</code> に <code>nowrap</code> を指定しているので、ラベルの文字が改行されない。
* <code>touch-action</code> は、IE (Edge) や Chrome などで有効なタッチ操作に何を許可するか指定できるプロパティが指定されている。
  * [タッチ操作向けサイト構築のガイドライン - IEBlog 日本語 - Site Home - MSDN Blogs](http://blogs.msdn.com/b/ie_ja/archive/2012/04/28/guidelines-for-building-touch-friendly-sites.aspx)
* <code>user-select</code> は、タップしたときにハイライトされないように <code>none</code> が指定されている。
* 角丸は <code>4px</code> 。

```css
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}
a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}
```

* ボタンがタップされたり disabled だったりと、状態によってスタイルが指定されている。
* <code>-webkit-focus-ring-color</code> は、webkit の独自仕様で focus してるときの周囲の色のこと…。初めて聞いたよ！
* <code>outline-offset</code> は、指定すると outline の線を表示する位置が指定できる。ここでは負の値なので、2px 内側という意味になる。
* <code>pointer-events</code> は、<code>none</code> に指定しておくとマウスイベントのターゲットにならなくなるとのこと。
  * [pointer-events - CSS | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/pointer-events)

## Foundation (v5.5.2) のボタン

* [サンプルボタンのページ](/examples/button-stylesheet-reading/foundation_v5.5.2.html)

```css
button, .button {
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  border-style: solid;
  border-width: 0;
  cursor: pointer;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  font-weight: normal;
  line-height: normal;
  margin: 0 0 1.25rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 1rem 2rem 1.0625rem 2rem;
  font-size: 1rem;
  background-color: #008CBA;
  border-color: #007095;
  color: #FFFFFF;
  transition: background-color 300ms ease-out; }
  button:hover, button:focus, .button:hover, .button:focus {
    background-color: #007095; }
  button:hover, button:focus, .button:hover, .button:focus {
    color: #FFFFFF; }
  button.disabled, button[disabled], .button.disabled, .button[disabled] {
    background-color: #008CBA;
    border-color: #007095;
    color: #FFFFFF;
    box-shadow: none;
    cursor: default;
    opacity: 0.7; }

button::-moz-focus-inner {
  border: 0;
  padding: 0; }
```

* セレクタの名前は <code>.button</code> 。
* <code>appearance</code> は、ブラウザにおける標準的な UI の見た目を利用するかどうか指定できるプロパティ。ここではあえて <code>button</code> を指定しないことで、ブラウザのデフォルトの見た目のスタイルに影響を受けないようにしている。
* <code>padding</code> で下方向に絶妙な値が指定されていて、ラベルの文字が中央に見えるように調整されている。
* <code>transition</code> で、カーソルを合わせたときにに色がゆっくり変わるように指定している。
* <code>::-moz-focus-inner</code> は、Firefox で focus したときに適用されるスタイル。normalize.css にも border と padding を無効にする記述が書かれています。
  * https://necolas.github.io/normalize.css/3.0.2/normalize.css
* 角丸はなし。

## Pure (v0.6.0) のボタン

* [サンプルボタンのページ](/examples/button-stylesheet-reading/pure_v0.6.0.html)

```css
.pure-button {
    /* Structure */
    display: inline-block;
    zoom: 1;
    line-height: normal;
    white-space: nowrap;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

/* Firefox: Get rid of the inner focus border */
.pure-button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

/*csslint outline-none:false*/

.pure-button {
    font-family: inherit;
    font-size: 100%;
    padding: 0.5em 1em;
    color: #444; /* rgba not supported (IE 8) */
    color: rgba(0, 0, 0, 0.80); /* rgba supported */
    border: 1px solid #999;  /*IE 6/7/8*/
    border: none rgba(0, 0, 0, 0);  /*IE9 + everything else*/
    background-color: #E6E6E6;
    text-decoration: none;
    border-radius: 2px;
}

.pure-button-hover,
.pure-button:hover,
.pure-button:focus {
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000',GradientType=0);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), color-stop(40%, rgba(0,0,0, 0.05)), to(rgba(0,0,0, 0.10)));
    background-image: -webkit-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
    background-image: -moz-linear-gradient(top, rgba(0,0,0, 0.05) 0%, rgba(0,0,0, 0.10));
    background-image: -o-linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
    background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
}
.pure-button:focus {
    outline: 0;
}
.pure-button-active,
.pure-button:active {
    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;
    border-color: #000\9;
}

.pure-button[disabled],
.pure-button-disabled,
.pure-button-disabled:hover,
.pure-button-disabled:focus,
.pure-button-disabled:active {
    border: none;
    background-image: none;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
    filter: alpha(opacity=40);
    -khtml-opacity: 0.40;
    -moz-opacity: 0.40;
    opacity: 0.40;
    cursor: not-allowed;
    box-shadow: none;
}

.pure-button-hidden {
    display: none;
}

/* Firefox: Get rid of the inner focus border */
.pure-button::-moz-focus-inner{
    padding: 0;
    border: 0;
}

.pure-button-primary,
.pure-button-selected,
a.pure-button-primary,
a.pure-button-selected {
    background-color: rgb(0, 120, 231);
    color: #fff;
}
```

* セレクタの名前は <code>.pure-button</code> 。ボタンに限らず、すべてのセレクタでフレームワークの名前が接頭辞になってる。
* コメントめっちゃ書いてある。なんで Structure という名前で切り分けたんだろう…？
* CSS ハックとか IE8 対応とか、辛そうだなぁ…。
* <code>-webkit-user-drag</code> は <code>-webkit-user-select</code> と似ていて、ドラッグしたときに選択させない指定。
* 角丸は <code>2px</code> 。

## Bourbon (v4.2.3) + Bitters (v1.0.0) のボタン

* [サンプルボタンのページ](/examples/button-stylesheet-reading/bourbon_v4.2.3.html)

Bourbon と Bitters は、CSS フレームワークというよりは Sass の mixin のライブラリなので、以下のような scss を書きました。

```scss
@import "bourbon/bourbon";
@import "base/base";

.button {
  @extend button;
}
```

これを Sass でコンパイルしたのが、以下の css です。

```css
button, .button, input[type="button"], input[type="reset"], input[type="submit"],
button,
.button {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  background-color: #477dca;
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
  font-size: 1em;
  font-weight: 600;
  line-height: 1;
  padding: 0.75em 1em;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap; }
  button:hover, .button:hover, button:focus, .button:focus, input[type="button"]:hover, input[type="button"]:focus, input[type="reset"]:hover, input[type="reset"]:focus, input[type="submit"]:hover, input[type="submit"]:focus,
  button:hover,
  .button:hover,
  button:focus,
  .button:focus {
    background-color: #2c5999;
    color: #fff; }
  button:disabled, .button:disabled, input[type="button"]:disabled, input[type="reset"]:disabled, input[type="submit"]:disabled,
  button:disabled,
  .button:disabled {
    cursor: not-allowed;
    opacity: 0.5; }
```

* <code>-webkit-font-smoothing</code> は、文字をレンダリングするときにアンチエイリアスのかかり具合を調整できるプロパティ。知らなかった…。<code>subpixel-antialiased</code> がデフォルトなので、Retina ディスプレイなど環境によっては太く見えることがあるらしい。

## まとめ

* セレクタの名前は、当たり前ですがプロジェクトが採用している命名規則に沿ってつけたらいいんじゃないでしょうか。個人的には、競合しないなら <code>.button</code> でいいんじゃないかなぁと思います…。あと、セレクタがなくても要素名だけでスタイルが適用されるように書いておいてもいいのかもしれない。
* ボタンの幅や高さは指定していない。なぜなら、ラベルの文字の量によって大きさが変わるようにしておいたほうがはみださないし。ボタンそのものに大きさの情報を持たせるよりも、ボタンを置く場所自体のスタイルで配置を調整するほうがコンポーネントとして使いやすそうです。もちろん、Modifier として幅を揃えるセレクタを用意しておいてもいいかもしれませんが、<code>middle</code> とか <code>large</code> とかつけてると、その中間の名前で悩みそうなので避けたい。<code>block</code> 要素にしておいて、囲んでる要素の大きさで揃えるとかかな…？
* <code>:focus</code> したとき、<code>:hover</code> したとき、<code>:active</code> なとき、<code>:disabled</code> なとき…。ボタンは、想定しなきゃいけない状態がいっぱいあるなぁ。地味に disabled なときにカーソルの形を <code>not-allowed</code> にしてたりする気遣い。
* 見たこともないようなプロパティの意味を理解して使いこなせると便利そうだなぁ。
  * <code>touch-action</code>
  * <code>user-select</code>、<code>user-drag</code>
  * <code>pointer-events</code>
  * <code>outline-offset</code>、<code>-webkit-focus-ring-color</code>…。

あくまでもこれは CSS フレームワークのスタイルシートなので、たとえばコーポレートサイトや EC サイトのボタンとか読んでみてもおもしろそう。
