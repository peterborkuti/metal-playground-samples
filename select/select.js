window.select1 = new metal.Select({
	    label: '<i>Select</i>',
	    items: ['GET', 'HEAD', 'POST', 'PATCH', 'PUT', 'DELETE'],
	    hiddenFieldName: 'method'
	}, '#first');
	window.select2 = new metal.Select({
	    items: ['Number', 'String', 'Boolean', 'Array', '<i>Object</i>'],
	    values: ['Number', 'String', 'Boolean', 'Array', 'Object'],
	    label: 'Type',
	}, '#second');