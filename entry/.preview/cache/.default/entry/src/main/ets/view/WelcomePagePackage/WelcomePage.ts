interface WelcomePage_Params {
    message?: string;
}
import router from "@ohos:router";
class WelcomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: WelcomePage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: WelcomePage_Params) {
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
    aboutToAppear() {
        setTimeout(() => {
            router.pushNamedRoute({
                name: 'myPage'
            });
            router.pushUrl({ url: "view/HomePagePackage/HomePage" });
        }, 1000);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/WelcomePagePackage/WelcomePage.ets(21:5)");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create('30%');
            Blank.debugLine("view/WelcomePagePackage/WelcomePage.ets(22:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //中央slogan
            Column.create();
            Column.debugLine("view/WelcomePagePackage/WelcomePage.ets(24:7)");
            //中央slogan
            Column.height('30%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777248, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/WelcomePagePackage/WelcomePage.ets(25:9)");
            Image.size({ width: '150' });
            Image.interpolation(ImageInterpolation.High);
            Image.objectFit(ImageFit.Fill);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/WelcomePagePackage/WelcomePage.ets(30:9)");
            Image.height('15%');
            Image.padding({ left: '35' });
        }, Image);
        //中央slogan
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create('30%');
            Blank.debugLine("view/WelcomePagePackage/WelcomePage.ets(36:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //文字描述
            Text.create('基于情感化设计理论 大学生运动app');
            Text.debugLine("view/WelcomePagePackage/WelcomePage.ets(39:7)");
            //文字描述
            Text.fontSize(15);
            //文字描述
            Text.opacity(0.5);
        }, Text);
        //文字描述
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new WelcomePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
