jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "my.own.library-preload",
	"modules": {
		"my/own/Ellipse.js": "sap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Control\"],function(e,i,r){\"use strict\";sap.ui.core.Control.extend(\"my.own.Ellipse\",{metadata:{properties:{cx:{type:\"sap.ui.core.CSSSize\",group:\"Dimension\",defaultValue:\"4rem\"},cy:{type:\"sap.ui.core.CSSSize\",group:\"Dimension\",defaultValue:\"4rem\"},rx:{type:\"sap.ui.core.CSSSize\",group:\"Dimension\",defaultValue:\"2rem\"},ry:{type:\"sap.ui.core.CSSSize\",group:\"Dimension\",defaultValue:\"1rem\"},fill:{type:\"sap.ui.core.CSSColor\",defaultValue:\"#000\"}}},renderer:function(e,i){i.getVisible()&&(e.write(\"<div>\"),e.write(\"<svg>\"),e.write(\"<ellipse \"),e.write(\"cx='\"+i.getCx()+\"' \"),e.write(\"cy='\"+i.getCy()+\"' \"),e.write(\"rx='\"+i.getRx()+\"' \"),e.write(\"ry='\"+i.getRy()+\"' \"),e.write(\"fill='\"+i.getFill()+\"' \"),e.write(\"</div>\"))}})},!0);",
		"my/own/library.js": "sap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Core\",\"sap/ui/core/library\"],function(e){\"use strict\";return function(){e.sap.require(\"my.own.Ellipse\"),sap.ui.getCore().initLibrary({name:\"my.own\",dependencies:[\"sap.ui.core\"],interfaces:[],controls:[\"my.own.Ellipse\"],elements:[],version:\"0.0.1\"})}(),!0},!0);"
	}
});