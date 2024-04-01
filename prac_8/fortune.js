"use strict";

function ok() {

    //表示位置(pタグ)の取得
    const fortuneResult = document.getElementById("fortuneResult");

    //表示するニックネームの取得
    const username = document.getElementById("username");

    while (fortuneResult.textContent != "") {
        fortuneResult.textContent = "";
    }

    //占い結果に使用する乱数の取得
    let fortuneNumber = Math.floor(Math.random() * 7);
    console.log(fortuneNumber);

    //fortuneNumberによる占い結果の分岐
    switch (fortuneNumber) {
        case 0:
            fortuneResult.textContent = `${username.value}さんの運勢は大吉です。`
            username.value = "";
            break;
        case 1:
            fortuneResult.textContent = `${username.value}さんの運勢は吉です。`
            username.value = "";
            break;
        case 2:
            fortuneResult.textContent = `${username.value}さんの運勢は中吉です。`
            username.value = "";
            break;
        case 3:
            fortuneResult.textContent = `${username.value}さんの運勢は小吉です。`
            username.value = "";
            break;
        case 4:
            fortuneResult.textContent = `${username.value}さんの運勢は末吉です。`
            username.value = "";
            break;
        case 5:
            fortuneResult.textContent = `${username.value}さんの運勢は凶です。`
            username.value = "";
            break;
        case 6:
            fortuneResult.textContent = `${username.value}さんの運勢は大凶です。`
            username.value = "";
            break;
        default:
            break;
    }
}