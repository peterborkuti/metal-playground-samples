window.tooltip = new metal.Tooltip({
    delay: [300, 150],
    elementClasses: 'fade',
    position: metal.Tooltip.Align.Right,
    selector: '#TooltipButton',
    title: 'My cool <b>tooltip</b>',
    visible: false
});

new metal.Tooltip({
    delay: [300, 150],
    elementClasses: 'fade',
    selector: '[data-title]',
    visible: false
});