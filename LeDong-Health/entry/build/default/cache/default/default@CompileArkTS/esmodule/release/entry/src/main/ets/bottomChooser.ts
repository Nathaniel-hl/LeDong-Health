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
    setInitiallyProvidedValue(a: bottomChooser_Params) {
        if (a.isHomePage !== undefined) {
            this.isHomePage = a.isHomePage;
        }
        if (a.isExercisePage !== undefined) {
            this.isExercisePage = a.isExercisePage;
        }
        if (a.isCommunityPage !== undefined) {
            this.isCommunityPage = a.isCommunityPage;
        }
        if (a.isMinePage !== undefined) {
            this.isMinePage = a.isMinePage;
        }
    }
    updateStateVars(a: bottomChooser_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
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
        this.observeComponentCreation2((b, c) => {
            Row.create({ space: 10 });
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width('100%');
            Row.height('15%');
            Row.backgroundColor({ "id": 16777225, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            //首页图标
            Column.create();
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Image.create(this.isHomePage ? { "id": 16777262, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : { "id": 16777261, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
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
        this.observeComponentCreation2((b, c) => {
            Text.create('首页');
        }, Text);
        Text.pop();
        //首页图标
        Column.pop();
        this.observeComponentCreation2((b, c) => {
            //运动图标
            Column.create();
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Image.create(this.isExercisePage ? { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
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
        this.observeComponentCreation2((b, c) => {
            Text.create('运动');
        }, Text);
        Text.pop();
        //运动图标
        Column.pop();
        this.observeComponentCreation2((b, c) => {
            //语音输入图标
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
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
        this.observeComponentCreation2((b, c) => {
            //社区图标
            Column.create();
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Image.create(this.isCommunityPage ? { "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : { "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
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
        this.observeComponentCreation2((b, c) => {
            Text.create('社区');
        }, Text);
        Text.pop();
        //社区图标
        Column.pop();
        this.observeComponentCreation2((b, c) => {
            //我的图标
            Column.create();
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Image.create(this.isMinePage ? { "id": 16777268, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.width('5%');
            Image.height('30%');
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
        this.observeComponentCreation2((b, c) => {
            Text.create('我的');
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
