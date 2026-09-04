let clickTimes = 0;
function show() {
  clickTimes++;
  switch (clickTimes) {
    case 1:
      alert('【ヒント】北海道は「県」ではありません。');
      break;
    case 2:
      alert('【ヒント】東北地方にあります。');
      break;
    default:
      alert('答えは「岩手県」です。');
  }
}
