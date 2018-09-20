export const getBrowserName = () => {
  // Opera 8.0+
  switch(true) {
    case !!window.chrome && !!window.chrome.webstore:
      return 'Chrome'
    case typeof InstallTrigger !== 'undefined':
      return 'Firefox'
    case (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0:
      return 'Opera'
    case /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)):
      return 'Safari'
    case /*@cc_on!@*/false || !!document.documentMode:
      return 'Internet Explorer'
    case !isIE && !!window.StyleMedia:
      return 'Edge'
    default:
      return 'Other'
  }
}

export const getDeviceType = () => {
  switch(true) {
    case /Macintosh/i.test(navigator.userAgent):
      return 'Opera Mini'
    case /Windows/i.test(navigator.userAgent):
      return 'Opera Mini'
    case /Android/i.test(navigator.userAgent):
      return 'Android'
    case /webOS/i.test(navigator.userAgent):
      return 'webOS'
    case /iPhone/i.test(navigator.userAgent):
      return 'iPhone'
    case /iPad/i.test(navigator.userAgent):
      return 'iPad'
    case /iPod/i.test(navigator.userAgent):
      return 'iPod'
    case /BlackBerry/i.test(navigator.userAgent):
      return 'BlackBerry'
    case /IEMobile/i.test(navigator.userAgent):
      return 'IEMobile'
    case /Opera Mini/i.test(navigator.userAgent):
      return 'Opera Mini'
    default:
      return 'Other'
  }
}
