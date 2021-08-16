# CanvasJS Inputfields Type Changer

This is a plugin for CanvasJS StockCharts that lets you add HTML5 datepicker to inputfields of StockChart just by adding a line of code.
![HTML5 DatePicker in CanvasJS StockChart](https://raw.githubusercontent.com/vishwas-r/CanvasJS-Inputfields-Type-Changer/main/screenshots/inputfield%20-%20endvalue.jpg)

### How to Use?
- Create and Render CanvasJS StockChart
- Call ChangeInputFieldsType method
```
var stockChart = new CanvasJS.StockChart("stockChartContainer", {
    .
    .
    .
    //StockChart Options
    .
    .
    .
});
stockChart.render();

stockChart.ChangeInputFieldsType();
/* or
CanvasJS.ChangeInputFieldsType(); //If you like to change type of inputfields across all the StockCharts in the page
*/
```


##### Note: 
- Plugin was last tested with **CanvasJS StockChart v1.4 Beta 1**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.
