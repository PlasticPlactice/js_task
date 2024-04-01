"use strict";

//ユーザーネームの取得(html→js)
const username = document.getElementById("username");
//投稿する文字の取得(html→js)
const msg = document.getElementById("msgArea");

//追加したいリスト位置の取得
const list = document.getElementById("list");

function AddTextList() {

    //表示するリスト要素の作成
    const createElement = document.createElement("li");

    //日付情報の取得
    const now = new Date();

    //表示する内容を変数に格納(改行の仕方は調べたけどわかりません(\nと<br>は使えませんでした))
    createElement.textContent = `ユーザーネーム:${username.value}
    投稿:${msg.value}
    ${now.toLocaleString()}`;

    //リストの前要素に追加
    list.prepend(createElement);

    //input要素のvalueリセット
    document.getElementById("username").value = "";
    document.getElementById("msgArea").value = "";
}