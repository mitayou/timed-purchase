(function coreBuy(hour, min = 0, second = 0) {
  // 时间校准
  const currentTimeInMilliseconds = Date.now();
  const lastThreeDigits = currentTimeInMilliseconds.toString().slice(-3);
  let interval = null;
  let count = 0;

  // 延迟具体毫秒数后执行
  setTimeout(() => {
    interval = setInterval(() => buyItem(hour, min, second), 500);
  }, 999 - lastThreeDigits);

  function buyItem(h, m = 0, s = 0) {
    // 检查是否已经到达截止时间
    const now = new Date();
    if (now.getHours() === h && now.getMinutes() === 0 && now.getSeconds() >= s + 5) {
      interval && clearInterval(interval);
    } else {
      // 检查是否已经到达截止时间
      const now = new Date();
      if (now.getHours() === h && now.getMinutes() === m && now.getSeconds() >= s + 5) {
        interval && clearInterval(interval);
        console.log("抢购时间已结束！");
      } else {
        // 计算剩余时间
        const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, s);
        const remainingTime = targetTime - now;

        // 将剩余时间转换为小时、分钟和秒
        const _hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const _minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const _seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        if (_hours < 0 && _minutes + 1 < 0) {
          console.log(`时间设置已过，需要重新设置`);
          interval && clearInterval(interval);
        }

        // 输出剩余时间
        if (_hours === 0 && _minutes === 0 && _seconds >= 0) {
          console.log(`剩余时间：${remainingTime / 1000}秒`);
        } else if (_seconds === 0) {
          console.log(`剩余时间：${_hours}小时 ${_minutes}分钟 ${_seconds}秒`);
        } else if (count === 0) {
          count++
          if (remainingTime <= 0) {
            console.log(`准点定时任务已开始`);
          } else {
            console.log(`准点定时任务已开启，剩余时间：${_hours}小时 ${_minutes}分钟 ${_seconds}秒`);
          }
        }

        // 最后1s抢购
        if (remainingTime <= 0) {
          console.log(`开始抢购${count++}次，达到目标时间后第${-1 * remainingTime / 1000}秒时`,);
          activityFn();
        }
      }
    }
  }

  function activityFn() {
    // 在这里添加你的抢购代码
    DM.df.getClick8('954082', '', 'DM.ld.outPut0617()', '', '8');
    DM.df.getClick8('954082', '', 'DM.ld.outPut0617()', '', '4');
  }
})(15);