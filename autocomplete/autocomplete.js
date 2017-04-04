new metal.Autocomplete({
  inputElement: document.querySelector('input'),
  data: function(query) {
    return ['Alabama', 'Alaska'].filter(function(item) {
      return query && item.toLowerCase().indexOf(query.toLowerCase()) === 0;
    });
  }
});
