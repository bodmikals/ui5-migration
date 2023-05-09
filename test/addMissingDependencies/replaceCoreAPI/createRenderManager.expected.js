/*!
 * ${copyright}
 */

// A module
sap.ui.define(["sap/ui/core/Core", "sap/ui/core/RenderManager"],
	function(Core, RenderManager) {
		"use strict";

		/**
		 *
		 * @type {{}}
		 */
		var A = {};

		A.x = function (oParam) {
			var oRm = new RenderManager();
			var oRm1 = new RenderManager();

			return [oRm, oRm1];
		};

		return A;
	}, /* bExport= */ true);