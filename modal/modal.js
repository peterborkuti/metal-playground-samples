window.modal = new metal.Modal({
  element: '.modal',
  header: '<h4 class="modal-title">Modal header</h4>',
  body: 'One fine body...',
  footer: '<button type="button" class="btn btn-primary">OK</button>'
});
document.querySelector('.openModal').addEventListener('click', function() {
  modal.show();
});
