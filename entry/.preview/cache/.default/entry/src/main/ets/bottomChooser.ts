interface bottomChooser_Params {
    //判断当前页面选择
    isHomePage?: Boolean;
    isExercisePage?: Boolean;
    isCommunityPage?: Boolean;
    isMinePage?: Boolean;
}
import router from "@ohos:router";
export default class bottomChooser extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.isHomePage = false;
        this.isExercisePage = false;
        this.isCommunityPage = false;
        this.isMinePage = false;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: bottomChooser_Params) {
        if (params.isHomePage !== undefined) {
            this.isHomePage = params.isHomePage;
        }
        if (params.isExercisePage !== undefined) {
            this.isExercisePage = params.isExercisePage;
        }
        if (params.isCommunityPage !== undefined) {
            this.isCommunityPage = params.isCommunityPage;
        }
        if (params.isMinePage !== undefined) {
            this.isMinePage = params.isMinePage;
        }
    }
    updateStateVars(params: bottomChooser_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    //判断当前页面选择
    private isHomePage: Boolean;
    private isExercisePage: Boolean;
    private isCommunityPage: Boolean;
    private isMinePage: Boolean;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.debugLine("bottomChooser.ets(15:5)");
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width('100%');
            Row.height('15%');
            Row.backgroundColor({ "id": 16777220, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //首页图标
            Column.create();
            Column.debugLine("bottomChooser.ets(17:7)");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isHomePage ? { "id": 16777268, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : { "id": 16777228, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("bottomChooser.ets(18:9)");
            Image.width('10%');
            Image.autoResize(true);
            Image.onClick(() => {
                if (this.isHomePage) {
                    return;
                }
                else {
                    router.clear();
                    router.pushUrl({
                        url: 'view/HomePagePackage/HomePage'
                    });
                }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('首页');
            Text.debugLine("bottomChooser.ets(33:9)");
        }, Text);
        Text.pop();
        //首页图标
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //运动图标
            Column.create();
            Column.debugLine("bottomChooser.ets(37:7)");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isExercisePage ? { "id": 16777261, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : { "id": 16777227, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("bottomChooser.ets(38:9)");
            Image.width('10%');
            Image.autoResize(true);
            Image.onClick(() => {
                if (this.isExercisePage) {
                    return;
                }
                else {
                    router.clear();
                    router.pushUrl({
                        url: 'view/ExercisePagePackage/ExercisePage'
                    });
                }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('运动');
            Text.debugLine("bottomChooser.ets(53:9)");
        }, Text);
        Text.pop();
        //运动图标
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //语音输入图标
            Image.create({ "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("bottomChooser.ets(57:7)");
            //语音输入图标
            Image.width('31%');
            //语音输入图标
            Image.height('72%');
            //语音输入图标
            Image.padding({ bottom: 10 });
            //语音输入图标
            Image.objectFit(ImageFit.Contain);
            //语音输入图标
            Image.interpolation(ImageInterpolation.Medium);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //社区图标
            Column.create();
            Column.debugLine("bottomChooser.ets(65:7)");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isCommunityPage ? { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : { "id": 16777266, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("bottomChooser.ets(66:9)");
            Image.width('10%');
            Image.autoResize(true);
            Image.onClick(() => {
                if (this.isCommunityPage) {
                    return;
                }
                else {
                    router.pushUrl({
                        url: "view/CommunityPage/CommunityPage"
                    });
                }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('社区');
            Text.debugLine("bottomChooser.ets(80:9)");
        }, Text);
        Text.pop();
        //社区图标
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //我的图标
            Column.create();
            Column.debugLine("bottomChooser.ets(84:7)");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isMinePage ? { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : { "id": 16777278, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("bottomChooser.ets(85:9)");
            Image.width('6%');
            Image.height('35%');
            Image.onClick(() => {
                if (this.isMinePage) {
                    return;
                }
                else {
                    router.clear();
                    router.pushUrl({
                        url: 'view/MinePagePackage/MinePage'
                    });
                }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('mine');
            Text.debugLine("bottomChooser.ets(98:9)");
        }, Text);
        Text.pop();
        //我的图标
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//底部选择页面样式
export declare enum BotIconPattern {
    Home,
    Exercise,
    Community,
    Mine //选择我的
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "bottomChooser", new bottomChooser(undefined, {}));
    previewComponent();
}
else {
}
