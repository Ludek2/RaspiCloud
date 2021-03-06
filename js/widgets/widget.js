var widgetTemplate =_.template($('#widgetTemplate').html());

var Widget = Class.extend({

	title: null,

	init: function (opts) {
		opts = opts || {};
		this.id = opts.id;
		this.title = opts.title || null;
		this.size = opts.size || null;

	},
	render: function () {
		
		return widgetTemplate({
			widgetId: this.id,
			widgetTitle: this.title,
			widgetSettings: this.appendSettings(), 
			widgetBody: this.appendBody()
		});
	},

	appendBody: function () {
		console.warn('append body method has not been implemented in sub class');
	},

	appendSettings: function(){
		console.warn('append settings method has not been implemented in sub class');
	},

	getTitle: function () {
		return this.title;
	},
	setTitle: function (title) {
		this.title = title;
	}
});