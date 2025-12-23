(function() {
  'use strict';

  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', function() {
      disableConsoleInProduction();
      preventRightClick();
      detectDevTools();
    });
  }

  function disableConsoleInProduction() {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      const noop = function() {};
      const methods = ['log', 'debug', 'info', 'warn', 'error', 'trace', 'dir', 'group', 'groupCollapsed', 'groupEnd', 'time', 'timeEnd', 'profile', 'profileEnd', 'dirxml', 'assert', 'count', 'markTimeline', 'timeStamp', 'clear'];
      
      for (let i = 0; i < methods.length; i++) {
        console[methods[i]] = noop;
      }
    }
  }

  function preventRightClick() {
    document.addEventListener('contextmenu', function(e) {
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        e.preventDefault();
        return false;
      }
    });
  }

  function detectDevTools() {
    const threshold = 160;
    let devtoolsOpen = false;

    setInterval(function() {
      if (window.outerWidth - window.innerWidth > threshold || 
          window.outerHeight - window.innerHeight > threshold) {
        if (!devtoolsOpen) {
          devtoolsOpen = true;
        }
      } else {
        devtoolsOpen = false;
      }
    }, 1000);
  }

  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || 
        (e.ctrlKey && e.keyCode === 85)) {
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        e.preventDefault();
        return false;
      }
    }
  });

  if (typeof Object.freeze === 'function') {
    Object.freeze(console);
  }

})();
