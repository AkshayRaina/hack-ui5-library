sap.ui.define(
		['jquery.sap.global','sap/ui/core/Control'],
		function(jQuery, renderer, Control) {
			"use strict";
			var Ellipse = sap.ui.core.Control.extend("my.own.Ellipse", {
				metadata: {
					properties: {
						'cx': {
							type: 'sap.ui.core.CSSSize',
							group: 'Dimension',
							defaultValue: '4rem'
						},
						'cy': {
							type: 'sap.ui.core.CSSSize',
							group: 'Dimension',
							defaultValue: '4rem'
						},
						'rx': {
							type: 'sap.ui.core.CSSSize',
							group: 'Dimension',
							defaultValue: '2rem'
						},
						'ry': {
							type: 'sap.ui.core.CSSSize',
							group: 'Dimension',
							defaultValue: '1rem'
						},
						'fill': {
							type: 'sap.ui.core.CSSColor',
							defaultValue: '#000'
						}
					}
				},
				renderer: function(oRm, oControl) {
					if(!oControl.getVisible()) {
						return;
					}
					oRm.write("<div>");
					oRm.write("<svg>");
					oRm.write("<ellipse ");
					oRm.write("cx='" + oControl.getCx() + "' ");
					oRm.write("cy='" + oControl.getCy() + "' ");
					oRm.write("rx='" + oControl.getRx() + "' ");
					oRm.write("ry='" + oControl.getRy() + "' ");
					oRm.write("fill='" + oControl.getFill() + "' ");
					oRm.write("</div>");
				}
			});
		},
		true
);