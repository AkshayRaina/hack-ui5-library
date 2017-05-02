sap.ui.define(
		['jquery.sap.global','sap/ui/core/Core','sap/ui/core/library'],
		function(jQuery) {
			"use strict";
			(function(){
				jQuery.sap.require("my.own.Ellipse");
				sap.ui.getCore().initLibrary({
					name: "my.own",
					dependencies: ["sap.ui.core"],
					interfaces: [],
					controls: ["my.own.Ellipse"],
					elements: [],
					version: "0.0.1"
				})
			})();
			return true;
		},
		true
);