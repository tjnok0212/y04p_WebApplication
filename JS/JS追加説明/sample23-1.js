document.getElementById('btn').addEventListener('click', anserCheck);
function anserCheck() {
  let anser = document.getElementById('ans_text').value;
  if (anser == '富士山') {
    alert('正解！');
  } else {
    alert('間違い！');
  }
}
/* イベントリスナー */
/* 要素を取得してからその要素にイベントを登録する仕組み。
イベントリスナーはイベントの発生を監視し、発生したあとDOMが完全に読み込まれた後に
登録しておいた処理を行う。
したがって外部ファイルで読み込むとき、head要素で読み込んでしまうと、
まだDOMが読み込まれていないので要素を取得できないので、イベントの登録もできないため、
エラーとなる。
イベントハンドラはDOMが読み込まれユーザーが特定の操作をした後に登録した処理を行うため、
head要素で外部ファイルを読み込んでもエラーにならない。
 */