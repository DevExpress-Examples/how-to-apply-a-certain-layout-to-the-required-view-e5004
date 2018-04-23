window.Application3 = window.Application3 || {};

function findController(name, controllers) {
    var result = $.grep(controllers, function (item, index) {
        return item.navigationType == name;
    });
    return result.length ? result[0].controller : null;
}
$(function() {
    Application3.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application3,
        navigationType: Application3.config.navigationType,
        navigation: Application3.config.navigation
    });
    Application3.app.router.register(":view/:id", { view: "home", id: undefined });
    Application3.app.resolveLayoutController.add(function (args) {       
        if (args.viewInfo.viewName == 'about') {            
            args.layoutController = findController('empty', args.availableLayoutControllers);
        }
    });
    Application3.app.navigate();
});
