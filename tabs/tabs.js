	let tabs1 = new metal.Tabs({
	    element: '#tab1',
	    tabs: [
		{label: 'Turtles', disabled: true},
		{label: 'Elephants'},
		{label: 'Giraffes', disabled: true},
		{label: 'Dogs'},
		{label: 'Cats'},
		{label: 'Birds'},
		{label: 'Ewoks', disabled: true}
	    ],
	    type: 'pills'
	});
	tabs1.setTabDisabled(5, true);
	tabs1.addTabByName('Oisters', false, null);
	tabs1.addTabByName('Spiders', true, 2);
	tabs1.removeTab(7);
	new metal.Tabs({
	    element: '#tab2',
	    disabled: true,
	    tabs: [
		{label: 'Turtles'},
		{label: 'Elephants'},
		{label: 'Giraffes'},
		{label: 'Dogs'},
		{label: 'Cats'},
		{label: 'Birds'},
		{label: 'Ewoks'}
	    ],
	    type: 'pills'
	});
	new metal.Tabs({
	    element: '#tab3',
	    elementClasses: 'nav-tabs',
	    tabs: [
		{label: 'Turtles', disabled: true},
		{label: 'Elephants', disabled: true},
		{label: 'Giraffes', disabled: true},
		{label: 'Dogs'},
		{label: 'Cats', disabled: true},
		{label: 'Birds'},
		{label: 'Ewoks'}
	    ]
	});
	new metal.Tabs({
	    element: '#tab4',
	    disabled: true,
	    tabs: [
		{label: 'Turtles'},
		{label: 'Elephants'},
		{label: 'Giraffes'},
		{label: 'Dogs'},
		{label: 'Cats'},
		{label: 'Birds'},
		{label: 'Ewoks'}
	    ]
	});
	new metal.Tabs({
	    element: '#tab5',
	    elementClasses: 'nav-rectangle',
	    tabs: [
		{label: 'Turtles'},
		{label: 'Elephants', disabled: true},
		{label: 'Giraffes'},
		{label: 'Dogs'},
		{label: 'Cats', disabled: true},
		{label: 'Birds'},
		{label: 'Ewoks'}
	    ],
	    type: metal.Tabs.TYPES.NONE
	});
	function addMoreTabs() {
	    tabs1.addTabByName(randomtext(), false);
	}
	function randomtext() {
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    for(var i=0; i < 5; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
	    return text;
	}
	function toggleTabDisabled() {
	    tabs1.toggleTabDisabled(5);
	}