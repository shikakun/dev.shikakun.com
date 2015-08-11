title: Hexo でブログをつくるまで
date: 2015-08-11 14:19:23
---

![](capture_tips.png)

これまで技術的に調べたことは、[GitHub の Tips 専用リポジトリ](https://github.com/shikakun/tips/issues) に issue に書いて公開していた。Markdown で書けるのはもちろん、画像のアップロードもドラック&ドロップでできるし、コメント欄もタグの絞り込みも検索も用意されているので、ブログツールとしてなかなか便利だなーと思っていたんだけど、いいねボタンとかはてなスターとかリアクションがもらえないし、フィードもわかりやすく吐けないし、デザインもいろいろいじってみたいな！と思い、よしブログを作ろうと思ったのでした。

はてなブログ最高だし Tumblr という手もあったけど、この機会に前から興味があった静的サイトジェネレーターを使って GitHub Pages で公開してみようかなと思って [いろいろ調べてみると](https://staticsitegenerators.net/)、npm でインストールできる [Hexo](https://hexo.io/) というツールが現在の仕事で扱ってる技術に近そうだなーと思い、あと GitHub Flavored Markdown で書けるので、いっちょ Hexo でブログを作ってみることにしました。

## インストールする

とりあえず GitHub でブログ用のリポジトリを作るところからやります！

* [shikakun/dev.shikakun.com](https://github.com/shikakun/dev.shikakun.com)

リポジトリを作ったら、Hexo のウェブサイトの Get started を見ながら以下のコマンドを叩いて Hexo をインストールしました。

```bash
$ npm install hexo-cli -g
$ hexo init dev.shikakun.com
$ cd dev.shikakun.com
$ npm install
$ hexo server
```

これだけ！ローカルに Hexo のサーバーが立ち上がって、 <code>http://0.0.0.0:4000/</code> で見られるようになりました。
用意した GitHub のリポジトリをリモートリポジトリに登録しておきます。

```bash
$ git remote add origin git@github.com:shikakun/dev.shikakun.com.git
```

## デプロイする

とりあえず GitHub Pages にデプロイするところをやります！
[Hexo の Deployment のドキュメント](https://hexo.io/docs/deployment.html) を読むと、GitHub Pages へデプロイするには [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) という Hexo のプラグインをインストールしろとあるので、インストールします。

```bash
$ npm install hexo-deployer-git --save
```

Hexo の設定ファイルの <code>_config.yml</code> の Deploy の項目を以下のように編集します。

```yaml
deploy:
  type: git
  repo: git@github.com:shikakun/dev.shikakun.com.git
  branch: gh-pages
  message: "Updated: {{ now('YYYY-MM-DD HH:mm:ss') }}"
```

これだけ！

```bash
$ hexo deploy -g
```

デプロイのコマンドを実行すると、Hexo が静的ファイルを生成したあと、<code>gh-pages</code> ブランチへ push して <code>http://shikakun.github.io/dev.shikakun.com/</code> で見られるようになりました。

## 独自ドメインを設定する

<code>http://shikakun.github.io/dev.shikakun.com/</code> で見られるようにはなったけど、せっかくなので <code>http://dev.shikakun.com/</code> で見たい。というわけで、独自ドメインの設定をやります！

まず、僕は <code>shikakun.com</code> をムームードメインで取得して管理しているため、ムームードメインの管理画面（ムームー DNS のカスタム設定画面）で以下のように入力しました。

<table><tr><th>サブドメイン</th><td>dev</td></tr><tr><th>種別</th><td>CNAME</td></tr><tr><th>内容</th><td>shikakun.github.io</td></tr></table>

[GitHub Pages の独自ドメインを設定するドキュメント](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) を読むと、リポジトリに <code>CNAME</code> ってファイル名の独自ドメインを書いたファイルが置いてあれば良いみたい。
master ブランチのリポジトリ直下に <code>CNAME</code> ファイルを置いてしまうと Hexo のデプロイ先の <code>gh-pages</code> ブランチのファイルには含まれないため、記事のファイルを置いている <code>source</code> ディレクトリに置きます。

```bash
$ echo 'dev.shikakun.com' > source/CNAME
```

これだけ！<code>hexo deploy -g</code> でデプロイすれば、<code>http://dev.shikakun.com/</code> で見られるようになった！やったー！

## フィードを生成する

Hexo ではデフォルトテンプレートのナビゲーションに「RSS Feed」ってリンクがあるくせに、標準ではフィードを生成してくれない。ということで、フィードを生成してくれる Hexo のプラグインを追加します。

```bash
$ npm install hexo-generator-feed --save
```

これだけ！<code>hexo deploy -g</code> でデプロイすれば、<code>http://dev.shikakun.com/atom.xml</code> で見られるようになった！やったー！
フィードに含めるエントリー数とかは [設定ファイル](https://github.com/hexojs/hexo-generator-feed#options) で設定できるらしいです。

## いろいろ設定する

だんだん書くのが疲れてきたので雑になりますが、いろいろ設定しました。
当たり前だけど Git で差分を管理できるのがいいですね！

* [edit config by shikakun · Pull Request #5 · shikakun/dev.shikakun.com](https://github.com/shikakun/dev.shikakun.com/pull/5/files)

というわけでブログできた！やった──────────！

![](capture_dev.png)
