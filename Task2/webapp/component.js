sap.ui.define(
	["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
	function (UIComponent, JSONModel) {
		"use strict";
		return UIComponent.extend("webapp.Component", {
			metadata: {
				manifest: "json",
			},
			init: function () {
				UIComponent.prototype.init.apply(this, arguments);
				let oData = {
					recipient: {
						name: "UI5",
					},
				};
				let oModel = new JSONModel(oData);
				this.setModel(oModel);
			},
		});
	}
);
