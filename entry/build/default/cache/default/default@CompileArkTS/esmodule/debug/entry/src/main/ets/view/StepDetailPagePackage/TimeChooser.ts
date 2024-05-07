interface TimeChooser_Params {
    time?: timeChooser;
    imagePosition?: Length;
}
import router from "@ohos:router";
function __Text__textPattern(): void {
    Text.fontSize(35);
    Text.fontColor(Color.White);
    Text.opacity(0.6);
}
export default class TimeChooser extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.time = timeChooser.Week;
        this.imagePosition = 0;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: TimeChooser_Params) {
        if (params.time !== undefined) {
            this.time = params.time;
        }
        if (params.imagePosition !== undefined) {
            this.imagePosition = params.imagePosition;
        }
    }
    updateStateVars(params: TimeChooser_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private time: timeChooser;
    private imagePosition: Length;
    aboutToAppear() {
        switch (this.time) {
            case timeChooser.Day:
                this.imagePosition = 0;
                break;
            case timeChooser.Week:
                this.imagePosition = '25%';
                break;
            case timeChooser.Month:
                this.imagePosition = '50%';
                break;
            case timeChooser.Year:
                this.imagePosition = '75%';
                break;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.borderRadius(22);
            Stack.height('5%');
            Stack.backgroundColor(Color.Black);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/view/StepDetailPagePackage/timeChooser_pic.png');
            Image.width('25%');
            Image.height('105%');
            Image.position({ x: this.imagePosition, y: -20 });
            Image.objectFit(ImageFit.Fill);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('25%');
            Row.height('100%');
            Row.justifyContent(FlexAlign.Center);
            Row.onClick(() => {
                if (this.time != timeChooser.Day) {
                    router.pushUrl({ url: "view/StepDetailPagePackage/StepDetailPage_day" });
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('日');
            __Text__textPattern();
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('25%');
            Row.height('100%');
            Row.justifyContent(FlexAlign.Center);
            Row.onClick(() => {
                if (this.time != timeChooser.Week) {
                    router.pushUrl({ url: "view/StepDetailPagePackage/StepDetailPage_week" });
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('周');
            __Text__textPattern();
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('25%');
            Row.height('100%');
            Row.justifyContent(FlexAlign.Center);
            Row.onClick(() => {
                if (this.time != timeChooser.Month) {
                    router.pushUrl({ url: "view/StepDetailPagePackage/StepDetailPage_month" });
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('月');
            __Text__textPattern();
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('25%');
            Row.height('100%');
            Row.justifyContent(FlexAlign.Center);
            Row.onClick(() => {
                if (this.time != timeChooser.Year) {
                    router.pushUrl({ url: "view/StepDetailPagePackage/StepDetailPage_year" });
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('年');
            __Text__textPattern();
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
enum timeChooser {
    Day = 0,
    Week = 1,
    Month = 2,
    Year = 3
}
