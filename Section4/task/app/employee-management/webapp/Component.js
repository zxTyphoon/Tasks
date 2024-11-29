sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "task/employee/management/model/models"
  ], function (UIComponent, Device, models) {
    "use strict";
  
    return UIComponent.extend("task.employee.management.Component", {
  
      metadata: {
        manifest: "json"
      },
  
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
  
        // Set the device model
        this.setModel(models.createDeviceModel(), "device");
  
        // Initialize the router
        this.getRouter().initialize();
      }
    });
  });  