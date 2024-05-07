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
    setInitiallyProvidedValue(a: Survey_Params) {
        if (a.webviewController !== undefined) {
            this.webviewController = a.webviewController;
        }
    }
    updateStateVars(a: Survey_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
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
        this.observeComponentCreation2((b, c) => {
            List.create();
            List.height('200%');
        }, List);
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Column.create();
                }, Column);
                this.observeComponentCreation2((h, i) => {
                    Web.create({ src: 'https://www.wjx.cn/vm/rci65xr.aspx#', controller: this.webviewController });
                }, Web);
                Column.pop();
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Row.create();
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Web.create({ src: 'https://www.wjx.cn/vm/rci65xr.aspx#', controller: this.webviewController });
                }, Web);
                Row.pop();
                ListItem.pop();
            };
            this.observeComponentCreation(b);
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
