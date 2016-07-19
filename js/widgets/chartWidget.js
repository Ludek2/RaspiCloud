var chartWidgetSettingsTemplate = _.template($('#chartWidgetSettingsTemplate').html());
var chartWidgetBodyTemplate = _.template($('#chartWidgetBodyTemplate').html());
//var chartEditor = null;

function getChartWrapper(){
	return chartEditor.getChartWrapper();
}

var ChartWidget = Widget.extend({
	
	init: function (opts) {
		//console.log('DisplayTextWidget > init > opts', opts);
		this._super(opts);
		this.chartEditor = null;
		this.type="chart";
		this.printed=false;
		this.width = 420;
		this.heigth= 371;
	},

	setChartWrapper: function(chartWrapper) {
		this.chartWrapper = chartWrapper;
	},

	appendBody: function () {
		return chartWidgetBodyTemplate({
			widgetId: this.id
		});
	},

	appendSettings: function () {
		return chartWidgetSettingsTemplate({
			widgetId: this.id
		});
	},

	changeSize: function (value){
		this.width+=value;
		this.heigth+=value;
		this.wrapper.setOption('width',this.width);
		this.wrapper.setOption('height',this.heigth);
	},

	drawChart: function () {
		this.wrapper.draw(document.getElementById("chart"+this.id));
	},

	loadEditor: function () {
	  divName = "chart"+this.id;
      // Create the chart to edit.
      var wrapper = new google.visualization.ChartWrapper({
         'chartType':'LineChart',
         'dataSourceUrl':'http://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1',
         'query':'SELECT A,D WHERE D > 100 ORDER BY D',
         'options': { title:'Population Density (people/km^2)', legend:'none'}
      });

      this.chartEditor = new google.visualization.ChartEditor();
      _.bindAll(this, 'redrawChart');
      google.visualization.events.addListener(this.chartEditor, 'ok', this.redrawChart);
      this.chartEditor.openDialog(wrapper, {});

    },


    // On "OK" save the chart to a <div> on the page.
    redrawChart: function (){
      this.wrapper=this.chartEditor.getChartWrapper();
      this.wrapper.setOption('width',this.width);
      //this.wrapper.setOption('height',00);
      this.wrapper.draw(document.getElementById("chart"+this.id));
      this.printed=true;
    }

});

