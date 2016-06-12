var PieChartWidget = Widget.extend({
	render: function (opts) {
		this._super(opts);
		
	},

	appendBody: function () {
		$(".widget-place").append('<img src="http://www.bbc.co.uk/staticarchive/d00d6ca860bc06b66d5dd54f774144b2484623cc.gif">')
	}
});