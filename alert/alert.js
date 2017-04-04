window.alertDanger = new metal.Alert({
  visible: true,
  body: '<b>Danger</b>',
  elementClasses: 'alert-danger'
});
window.alertWarning = new metal.Alert({
  visible: true,
  body: '<b>Warning</b>',
  closeButtonHtml: '<span class="icon-16-cancel"></span>',
  elementClasses: 'alert-warning'
});
window.alertSuccess = new metal.Alert({
  visible: true,
  body: '<b>Success</b>',
  closeButtonHtml: '<span class="icon-16-cancel"></span>',
  elementClasses: 'alert-success'
});
new metal.Alert({
  visible: true,
  body: 'Success',
  elementClasses: 'alert-success',
  hideDelay: 1000
});
new metal.Alert({
  visible: true,
  body: 'Danger',
  elementClasses: 'alert-danger',
  dismissible: false
});
