sap.ui.define(
	["sap/m/StandardListItem", "sap/ui/core/Control"],
	function (StandardListItem, Control) {
		"use strict";

		return StandardListItem.extend("webapp.control.StandardListItemEx", {
			metadata: {
				properties: {
					link: { type: "string", defaultValue: "" },
					title: { type: "string", defaultValue: "" },
				},
			},

			renderer: {},

			onAfterRendering: function () {
				if (StandardListItem.prototype.onAfterRendering) {
					StandardListItem.prototype.onAfterRendering.apply(
						this,
						arguments
					);
				}

				this.$().empty();

				let link = $('<a class="sapMLnk" target="_blank"></a>');
				link.prop("id", this.getId() + "-link");
				link.attr("href", this.getLink());
				link.text(this.getTitle());

				this.$().append(link);
			},
		});
	}
);
