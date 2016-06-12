var DisplayTextWidget = Widget.extend({
	render: function (opts) {
		this._super(opts);
	},
	appendBody: function () {
		$(".widget-place").append('<p>' + this.opts.text + '</p>')
	}
});	