"use strict";

let height = window.prompt("身長を入力してください");
console.log(height);

if (height == "") {
    window.alert("入力がないと判定できません");
} else {
    if (height >= 100) {
        let ticket = window.confirm("プレミアムチケットはお持ちですか？");

        if (ticket === true) {
            window.alert("プレミアムシートに乗車可能です");
        } else {
            window.alert("通常のシートに乗車可能です");
        }

    } else if (height < 100 && height >= 90) {
        window.alert("付き添いありで乗車可能です");
    } else if (height < 90) {
        window.alert("乗車できません");
    } else if (height.match(/[^0-9]/)) {
        window.alert("半角数字で入力してください");
    }
}
