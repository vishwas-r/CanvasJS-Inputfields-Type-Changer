(function () {
	function changeType(elements, type) {
		if (elements === null) {
			if (window.console)
				window.console.log("Error: Inputfields are not enabled. Please enable inputfields to add date-picker to it.");
			
			return;
		}
		
		for (var i = 0; i < elements.length; i++) {
			elements[i].type = type;
			elements[i].title = "DD/MM/YYYY";
		}
	}
	
	//Method to change inputfields' type across all the StockCharts
	CanvasJS.changeInputFieldsType = function(type) {
		type = type || "date";
		
		var elements = document.getElementsByClassName("canvasjs-input-field");
		changeType(elements, type);
	}
	
	//Method to change inputfields' type of particular StockChart
	CanvasJS.StockChart.prototype.ChangeInputFieldsType = function (type) {
		if (!this.isDateTime)
			return;

		type = type || "date";
		var elements = null;
		
		if (this.rangeSelector && this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled)
			elements = this.rangeSelector.inputFields.elements;
		
		changeType(elements, type);
	}
})();