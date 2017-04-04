new metal.List({
  element: '#list1',
  events: {
    itemSelected: function(event) {
      console.log(event);
    }
  },
  items: [
    {
      textPrimary: 'Maira Bello',
      textSecondary: 'maira.bello@liferay.com',
      avatar: {
        content: '<img src="https://avatars0.githubusercontent.com/u/5216049?v=3&s=96"/>',
        link: 'https://github.com/mairatma'
      },
      label: {
        class: 'label-primary',
        content: 'Owner'
      },
      icons: ['glyphicon glyphicon-option-horizontal']
    },
    {
      textPrimary: 'Eduardo Lundgren',
      textSecondary: 'eduardo.lundgren@liferay.com',
      avatar: {
        content: '<img src="http://www.gravatar.com/avatar/42327de520e674a6d1686845b30778d0?d=blank&s=100"/>',
        link: 'https://github.com/eduardolundgren'
      },
      label: {
        class: 'label-default',
        content: 'Pending'
      },
      icons: ['glyphicon glyphicon-option-horizontal']
    }
  ]
});
new metal.List({
  element: '#list2',
  itemsHtml: '<li>Item1</li><li>Item2</li>'
});
new metal.List({
  element: '#list3',
  items: [
    {
      textPrimary: 'Icons HTML',
      iconsHtml: [
        '<span class="btn-icon glyphicon glyphicon-star"></span>',
        '<span class="btn-icon glyphicon glyphicon-heart"></span>'
      ]
    }
  ]
});
