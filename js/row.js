var rowTemplate = _.template($('#rowTemplate').html());

var Row = Class.extend({

	init: function (opts) {
		opts = opts || {};
		this.widgets = opts.widgets || null;
		this.id = opts.id;
	},

	formHtml: function(){
		console.log(this.id);
		var widgetHtml = [];
		var widgetSize = [];
		for (var i=0; i< this.widgets.length; i++){
        	widgetHtml[i] = this.widgets[i].render(); 
        	widgetSize[i] = this.widgets[i].size;
        }
		return rowTemplate({
			rowId: this.id,
			numberOfWidgets: this.widgets.length,
			widgetSize: widgetSize,
			widgetHtml: widgetHtml
		});
	},

	render: function(){
		var html = this.formHtml() ;
		$(".widget-place").append(html);
	},

	renderAgain: function () {
		var html = this.formHtml();
		document.getElementById("row"+this.id).outerHTML = html;
	},

	getWidgetsSizeSum: function(){
		var sum=0;
		for(var i=0; i < this.widgets.length; i++){
			sum+=this.widgets[i].size;
		}

		return sum;
	}
});