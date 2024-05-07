interface Survey_Params {
    webviewController?: web_webview.WebviewController;
}
import web_webview from "@ohos:web.webview";
class Survey extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.webviewController = new web_webview.WebviewController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: Survey_Params) {
        if (params.webviewController !== undefined) {
            this.webviewController = params.webviewController;
        }
    }
    updateStateVars(params: Survey_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private webviewController: web_webview.WebviewController;
    aboutToAppear() {
        this.webviewController.loadUrl('https://www.wjx.cn/vm/rci65xr.aspx#');
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.height('200%');
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Web.create({ src: 'https://www.wjx.cn/vm/rci65xr.aspx#', controller: this.webviewController });
                }, Web);
                Column.pop();
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Web.create({ src: 'https://www.wjx.cn/vm/rci65xr.aspx#', controller: this.webviewController });
                }, Web);
                Row.pop();
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            ListItem.pop();
        }
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Survey(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
