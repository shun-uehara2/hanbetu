window.onload = function() {
  var beVerbs = ['am', 'is', 'are', 'was', 'were', 'be', 'being', 'been'];
  var generalVerbs = ['run', 'jump', 'eat', 'sleep', 'read', 'write', 'think']; // 必要に応じて他の動詞を追加
  var currentVerb;
  var correct = localStorage.getItem('correct') ? parseInt(localStorage.getItem('correct')) : 0;
  var incorrect = localStorage.getItem('incorrect') ? parseInt(localStorage.getItem('incorrect')) : 0;

  function newVerb() {
    if (Math.random() < 0.5) {
      currentVerb = beVerbs[Math.floor(Math.random() * beVerbs.length)];
    } else {
      currentVerb = generalVerbs[Math.floor(Math.random() * generalVerbs.length)];
    }
    document.getElementById('verb-container').textContent = currentVerb;
  }

  function updateScores() {
    document.getElementById('correct').textContent = "正解数: " + correct;
    document.getElementById('incorrect').textContent = "不正解数: " + incorrect;
    var accuracy = correct / (correct + incorrect) * 100;
    document.getElementById('accuracy').textContent = "正解率: " + accuracy.toFixed(2) + "%";

    localStorage.setItem('correct', correct);
    localStorage.setItem('incorrect', incorrect);
  }

  document.getElementById('be-verb-button').onclick = function() {
    if (beVerbs.includes(currentVerb)) {
      document.getElementById('result').textContent = '正解！';
      correct++;
    } else {
      document.getElementById('result').textContent = '不正解。動詞 "' + currentVerb + '" は一般動詞です。';
      incorrect++;
    }
    newVerb();
    updateScores();
  };

  document.getElementById('general-verb-button').onclick = function() {
    if (generalVerbs.includes(currentVerb)) {
      document.getElementById('result').textContent = '正解！';
      correct++;
    } else {
      document.getElementById('result').textContent = '不正解。動詞 "' + currentVerb + '" はBE動詞です。';
      incorrect++;
    }
    newVerb();
    updateScores();
  };

  updateScores();
  newVerb();
};
