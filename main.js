function tryIt() {
  var valueStart = parseInt($('#valueStart').val())
  var valueEnd = parseInt($('#valueEnd').val())

  var fps = parseInt($('#fps').val())
  var duration = parseInt($('#duration').val())

  // 累加所需要的常數
  var fpsValue = (valueEnd - valueStart) / fps
  var fpsDuration = duration / fps

  // console.log(valueStart, valueEnd, fps, duration, fpsValue, fpsDuration)
  // -- 正在累加的數值 / Running values --
  var currentValue = 0
  var currentTimes = 0

  var $display = $('#display')
  //　每隔 總時間除以偵數的時間　執行一次
  function runOneTime() {
    setTimeout(function() {
      currentTimes += 1
      currentValue += fpsValue
      console.log(currentTimes, currentValue)

      if (currentTimes > fps) {
        return //　不繼續了
      }
      $display.text(Math.round(currentValue))
      runOneTime() // 再跑一次

    }, fpsDuration * 1000)
  }

  $display.text(0)
  runOneTime()
}