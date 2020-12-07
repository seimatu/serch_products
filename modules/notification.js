const { Notification } = require('electron');

const notice = {
    start: "スタート",
    end: "結果",
    cancel: "失敗"
}

export const thisNotification = () {
    return new Notification({
        notice: notice,
    }).show();
}