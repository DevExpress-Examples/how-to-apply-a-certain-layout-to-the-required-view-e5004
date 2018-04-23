window.Application3 = window.Application3 || {};

function findController(name, controllers) {
    var result = $.grep(controllers, function (item, index) {
        return item.controller.name == name;
    });
    return result.length ? result[0].controller : null;
}
$(function () {
    var layoutSet = [];
    layoutSet.push.apply(layoutSet, DevExpress.framework.html.layoutSets["navbar"]);
    layoutSet.push.apply(layoutSet, DevExpress.framework.html.layoutSets["empty"]);
    Application3.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application3,
        layoutSet: layoutSet,
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
