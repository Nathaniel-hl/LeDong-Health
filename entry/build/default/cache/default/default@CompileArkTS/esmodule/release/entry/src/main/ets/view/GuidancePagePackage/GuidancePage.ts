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
    setInitiallyProvidedValue(a: GuidancePage_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
    }
    updateStateVars(a: GuidancePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__message.purgeDependencyOnElmtId(a);
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
    set message(a: string) {
        this.__message.set(a);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create('是否完善个人信息           ');
            Text.fontSize(30);
            Text.padding({ top: 20, bottom: 20, left: 20 });
            Text.opacity(0.9);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create('进行运动定制?');
            Text.fontSize(30);
            Text.padding({ bottom: 10 });
            Text.opacity(0.9);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.width('90%');
            Image.height('45%');
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Button.createWithLabel('开始定制');
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
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create('有丰富经验，跳过->');
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
