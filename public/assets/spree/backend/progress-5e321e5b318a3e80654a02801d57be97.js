(function() {
  $(document).ready(function() {
    var opts, spinner, target;
    opts = {
      lines: 11,
      length: 2,
      width: 3,
      radius: 9,
      corners: 1,
      rotate: 0,
      color: '#fff',
      speed: 0.8,
      trail: 48,
      shadow: false,
      hwaccel: true,
      className: 'spinner',
      zIndex: 2e9,
      top: 'auto',
      left: 'auto'
    };
    target = document.getElementById("spinner");
    spinner = new Spinner(opts).spin(target);
    $(document).ajaxStart(function() {
      return $("#progress").stop(true, true).fadeIn();
    });
    return $(document).ajaxStop(function() {
      return $("#progress").fadeOut();
    });
  });

}).call(this);
