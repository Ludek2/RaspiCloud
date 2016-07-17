var textWidgetSettingsTemplate = _.template($('#textWidgetSettingsTemplate').html());
var textWidgetBodyTemplate = _.template($('#textWidgetBodyTemplate').html());

var DisplayTextWidget = Widget.extend({
	init: function (opts) {
		//console.log('DisplayTextWidget > init > opts', opts);
		this._super(opts);
		this.text = opts.text || null;
	},

	appendBody: function () {
		return textWidgetBodyTemplate({
			text: this.text
		})
	},

	appendSettings: function () {
		return textWidgetSettingsTemplate({
			widgetId: this.id
		});
	}
});	

