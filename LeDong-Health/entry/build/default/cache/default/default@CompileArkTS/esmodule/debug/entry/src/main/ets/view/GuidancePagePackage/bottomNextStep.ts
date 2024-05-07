interface bottomNextStep_Params {
    //是否含有上一步，默认为有
    hasBefore?: Boolean;
    //是否含有下一步，默认为有，如果没有则是最后一面
    hasNext?: Boolean;
    //当前页面索引号
    index?: number;
    //url数组，存储数据选择中的所有跳转页面
    urls?: string[];
}
import router from "@ohos:router";
export default class bottomNextStep extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.hasBefore = true;
        this.hasNext = true;
        this.index = 0;
        this.urls = [
            'view/GuidancePagePackage/GuidancePage',
            'view/GuidancePagePackage/DataChoice_Gender_Age',
            'view/GuidancePagePackage/DataChoice_height_weight',
            'view/GuidancePagePackage/DataChoicePage_condition',
            'view/GuidancePagePackage/DataChoicePage_like',
            'view/HomePagePackage/HomePage'
        ];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: bottomNextStep_Params) {
        if (params.hasBefore !== undefined) {
            this.hasBefore = params.hasBefore;
        }
        if (params.hasNext !== undefined) {
            this.hasNext = params.hasNext;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.urls !== undefined) {
            this.urls = params.urls;
        }
    }
    updateStateVars(params: bottomNextStep_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    //是否含有上一步，默认为有
    private hasBefore: Boolean;
    //是否含有下一步，默认为有，如果没有则是最后一面
    private hasNext: Boolean;
    //当前页面索引号
    private index: number;
    //url数组，存储数据选择中的所有跳转页面
    private urls: string[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height('20%');
            Row.backgroundColor({ "id": 16777225, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //上一页按钮
            Text.create(this.hasBefore ? '<     ' : '      ');
            //上一页按钮
            Text.fontSize(40);
            //上一页按钮
            Text.padding({ left: 15 });
            //上一页按钮
            Text.onClick(() => {
                if (this.hasBefore) {
                    router.clear();
                    router.pushUrl({ url: this.urls[this.index - 1] });
                }
            });
        }, Text);
        //上一页按钮
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //语音输入按钮
            Image.create({ "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            //语音输入按钮
            Image.width('31%');
            //语音输入按钮
            Image.height('72%');
            //语音输入按钮
            Image.objectFit(ImageFit.Contain);
            //语音输入按钮
            Image.padding({ bottom: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //下一页按钮
            Row.create();
            //下一页按钮
            Row.onClick(() => {
                router.clear();
                router.pushUrl({ url: this.urls[this.index + 1] });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.hasNext ? '下一步' : ' 完成 ');
            Text.fontSize(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('>');
            Text.fontSize(40);
            Text.padding({ right: 15 });
        }, Text);
        Text.pop();
        //下一页按钮
        Row.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
