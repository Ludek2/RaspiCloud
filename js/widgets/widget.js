var Widget = Class.extend({
	init: function (opts) {

	},
	render: function (opts) {

		this.opts = opts;
		

		$(".widget-place").append('<div class="panel panel-default">');

		$(".widget-place").append('<div class="panel-body">');


		$(".widget-place").append('<div class="panel-heading"><h3 class="panel-title">'+opts.title+'</h3></div>');

		this.appendBody();

		$(".widget-place").append('</div>');
		$(".widget-place").append('</div>');
	
	},

	appendBody: function () {
		console.warn('append body method has not been implemented in sub class');
	}
});