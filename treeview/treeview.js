	new metal.Treeview({
	    nodes: [
		{
		    name: 'Movies',
		    children: [
			{
			    name: 'The Hunt',
			    children: [
				{name: 'year: 2012'},
				{name: 'director: Thomas Vinterberg'}
			    ]
			},
			{
			    name: 'Wild Tales',
			    children: [
				{name: 'year: 2015'},
				{name: 'director: Damián Szifron'}
			    ],
			    expanded: true
			}
		    ],
		    expanded: true
		}
	    ]
	});