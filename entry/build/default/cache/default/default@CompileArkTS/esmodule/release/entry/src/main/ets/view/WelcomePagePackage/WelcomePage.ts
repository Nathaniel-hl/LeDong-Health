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
    setInitiallyProvidedValue(a: WelcomePage_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
    }
    updateStateVars(a: WelcomePage_Params) {
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
    aboutToAppear() {
        setTimeout(() => {
            router.clear();
            router.pushUrl({
                url: 'view/GuidancePagePackage/GuidancePage'
            });
        }, 1000);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Blank.create('30%');
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            //中央slogan
            Column.create();
            //中央slogan
            Column.height('30%');
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777230, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.size({ width: '150' });
            Image.interpolation(ImageInterpolation.High);
            Image.objectFit(ImageFit.Fill);
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777231, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.height('15%');
            Image.padding({ left: '35' });
        }, Image);
        //中央slogan
        Column.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create('30%');
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            //文字描述
            Text.create('基于情感化设计理论 大学生运动app');
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
