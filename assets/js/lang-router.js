// 自动语言路由：根据浏览器语言偏好跳转到对应本地化首页
(function () {
  try {
    var scriptEl = document.currentScript;
    if (!scriptEl) return;
    var indexLang = (scriptEl.getAttribute('data-index-lang') || 'en').toLowerCase();
    var hasEn = (scriptEl.getAttribute('data-has-en') || 'true').toLowerCase() === 'true';
    var prefer = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    prefer = String(prefer).toLowerCase();
    var preferLang = 'en';
    if (prefer.startsWith('zh')) preferLang = 'zh';
    else if (prefer.startsWith('en')) preferLang = 'en';
    else preferLang = 'en';

    // 当前已是目标语言则不跳转
    if (preferLang === indexLang) return;

    var dir = window.location.pathname.replace(/\/?[^/]*$/, '/');
    var target = null;

    if (preferLang === 'en') {
      if (hasEn) {
        target = dir + 'index-en.html';
      } else if (indexLang !== 'en') {
        // 没有英文页则继续停留
        target = null;
      }
    } else if (preferLang === 'zh') {
      // 若当前 index.html 为中文则不用跳转；否则尝试 index-zh.html（可能不存在）
      if (indexLang !== 'zh') {
        // 轻量检测：发起 HEAD 请求，存在再跳转
        var zhUrl = dir + 'index-zh.html';
        try {
          fetch(zhUrl, { method: 'HEAD' }).then(function (res) {
            if (res && res.ok) {
              window.location.replace(zhUrl);
            } else if (hasEn) {
              // 没有中文则回退英文
              window.location.replace(dir + 'index-en.html');
            }
          }).catch(function () {
            if (hasEn) window.location.replace(dir + 'index-en.html');
          });
        } catch (e) {
          // 请求失败则回退英文（如存在）
          if (hasEn) window.location.replace(dir + 'index-en.html');
        }
      }
    }

    if (target) {
      window.location.replace(target);
    }
  } catch (e) {
    // 静默失败，保留当前页面
  }
})();