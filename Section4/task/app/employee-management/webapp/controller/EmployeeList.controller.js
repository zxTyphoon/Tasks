sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
  ], function (Controller, History) {
    "use strict";
  
    return Controller.extend("task.employee.management.controller.EmployeeList", {
  
      onInit: function () {
        // Initialize any logic if necessary
      },
  
      onItemPress: function (oEvent) {
        var oContext = oEvent.getSource().getBindingContext();
        var sPath = oContext.getPath().substr(1);  // Remove leading '/'
        this.getOwnerComponent().getRouter().navTo("employeeObject", {
          employeeID: sPath
        });
      }
    });
  });
  