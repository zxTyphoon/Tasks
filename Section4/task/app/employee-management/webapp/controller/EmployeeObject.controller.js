sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
  ], function (Controller, JSONModel, History) {
    "use strict";
  
    return Controller.extend("task.employee.management.controller.EmployeeObject", {
  
      onInit: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute("employeeObject").attachPatternMatched(this._onObjectMatched, this);
      },
  
      _onObjectMatched: function (oEvent) {
        var sEmployeeID = oEvent.getParameter("arguments").employeeID;
        var oModel = this.getView().getModel();
        var sPath = "/Employees(ID=guid'" + sEmployeeID + "')";
        this.getView().bindElement(sPath);
      },
  
      onSave: function () {
        var oModel = this.getView().getModel();
        var oContext = this.getView().getBindingContext();
        var oEmployee = oContext.getObject();
  
        // Save the employee data (assuming the OData model supports it)
        oModel.update(oContext.getPath(), oEmployee, {
          success: function () {
            sap.m.MessageToast.show("Employee data saved successfully");
          },
          error: function () {
            sap.m.MessageToast.show("Error saving employee data");
          }
        });
      }
    });
  });
  