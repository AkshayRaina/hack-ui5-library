sap.ui.jsview("custom_ellipse.ellipse", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf custom_ellipse.ellipse
	*/ 
	getControllerName : function() {
		return "custom_ellipse.ellipse";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf custom_ellipse.ellipse
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Ellipse	",
			content: [
				new my.own.Ellipse()
			]
		});
	}

});