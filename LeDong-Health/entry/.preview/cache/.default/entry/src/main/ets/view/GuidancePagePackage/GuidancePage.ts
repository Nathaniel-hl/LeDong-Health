interface GuidancePage_Params {
    message?: string;
}
import router from "@ohos:router";
class GuidancePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: GuidancePage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: GuidancePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/GuidancePagePackage/GuidancePage.ets(18:5)");
            Column.justifyContent(FlexAlign.Center);
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/GuidancePagePackage/GuidancePage.ets(19:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('是否完善个人信息           ');
            Text.debugLine("view/GuidancePagePackage/GuidancePage.ets(21:7)");
            Text.fontSize(30);
            Text.padding({ top: 20, bottom: 20, left: 20 });
            Text.opacity(0.9);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('进行运动定制?');
            Text.debugLine("view/GuidancePagePackage/GuidancePage.ets(27:7)");
            Text.fontSize(30);
            Text.padding({ bottom: 10 });
            Text.opacity(0.9);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777262, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/GuidancePagePackage/GuidancePage.ets(33:7)");
            Image.width('90%');
            Image.height('45%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('开始定制');
            Button.debugLine("view/GuidancePagePackage/GuidancePage.ets(37:7)");
            Button.size({ height: 50, width: 200 });
            Button.fontSize(25);
            Button.onClick(() => {
                router.clear();
                router.pushUrl({
                    url: 'view/GuidancePagePackage/DataChoice_Gender_Age'
                });
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/GuidancePagePackage/GuidancePage.ets(47:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('有丰富经验，跳过->');
            Text.debugLine("view/GuidancePagePackage/GuidancePage.ets(49:7)");
            Text.fontSize(20);
            Text.opacity(0.7);
            Text.padding({ bottom: 20 });
            Text.fontColor('#ff7a7878');
            Text.onClick(() => {
                //router.clear()
                router.pushUrl({
                    url: 'view/HomePagePackage/HomePage'
                });
                // try {
                //   router.replaceNamedRoute({
                //     name: "view/HomePagePackage/HomePage",
                //     params: new routerParams('view/HomePagePackage/HomePage')
                //   })
                // } catch (err) {
                //   console.error(`replaceNamedRoute failed, code is ${(err as BusinessError).code}, message is ${(err as BusinessError).message}`);
                // }
            });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new GuidancePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
