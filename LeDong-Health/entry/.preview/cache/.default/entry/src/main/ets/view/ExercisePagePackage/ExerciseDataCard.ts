interface ExerciseDataCard_Params {
    //单位
    units?: HashMap<string, string>;
    //运动数据索引号
    unit?: string;
    //运动数据
    num?: number;
    //运动名称
    name?: string;
}
import HashMap from "@ohos:util.HashMap";
export default class ExerciseDataCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.units = new HashMap();
        this.unit = '公里';
        this.num = 1.23;
        this.name = '步行';
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: ExerciseDataCard_Params) {
        if (params.units !== undefined) {
            this.units = params.units;
        }
        if (params.unit !== undefined) {
            this.unit = params.unit;
        }
        if (params.num !== undefined) {
            this.num = params.num;
        }
        if (params.name !== undefined) {
            this.name = params.name;
        }
    }
    updateStateVars(params: ExerciseDataCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    //单位
    private units: HashMap<string, string>;
    //运动数据索引号
    private unit: string;
    //运动数据
    private num: number;
    //运动名称
    private name: string;
    async aboutToAppear() {
        //在hashmap中添加名称和对应的单位
        await this.units.set('步行', '公里');
        await this.units.set('跑步', '公里');
        await this.units.set('舞蹈', '分钟');
        await this.units.set('游泳', '米');
        this.units.set('骑行', '公里');
        //通过名称得到对应的单位储存在unit中
        this.unit = this.units.get(this.name);
        console.log('aaa');
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(34:5)");
            Column.height('30%');
            Column.width('90%');
            Column.backgroundImage('view/ExercisePagePackage/exerciseCardBackgroundPic.png');
            Column.backgroundImageSize({ width: '100%', height: '150%' });
            Column.backgroundImagePosition({ y: -200 });
            Column.borderRadius(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //累计文字
            Row.create();
            Row.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(36:7)");
            //累计文字
            Row.width('100%');
            //累计文字
            Row.padding({ left: 10, top: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('累计' + this.name);
            Text.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(37:9)");
            Text.fontSize(20);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        //累计文字
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(44:7)");
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.num + '');
            Text.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(45:9)");
            Text.fontSize(100);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //显示单位
            Text.create(this.unit);
            Text.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(50:9)");
            //显示单位
            Text.fontSize(30);
            //显示单位
            Text.fontColor(Color.White);
        }, Text);
        //显示单位
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(55:7)");
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width('100%');
            Row.padding({ top: '5%' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //热身按钮
            Button.createWithLabel('热身');
            Button.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(58:9)");
            //热身按钮
            Button.width('30%');
            //热身按钮
            Button.fontSize(30);
            //热身按钮
            Button.fontColor(Color.Black);
            //热身按钮
            Button.backgroundColor(Color.White);
            //热身按钮
            Button.fontWeight(400);
            //热身按钮
            Button.height('20%');
        }, Button);
        //热身按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //开始按钮
            Button.createWithLabel('开始');
            Button.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(67:9)");
            //开始按钮
            Button.width('30%');
            //开始按钮
            Button.fontSize(30);
            //开始按钮
            Button.fontColor(Color.Black);
            //开始按钮
            Button.backgroundColor(Color.White);
            //开始按钮
            Button.fontWeight(400);
            //开始按钮
            Button.height('20%');
        }, Button);
        //开始按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //音乐按钮
            Button.createWithLabel('音乐');
            Button.debugLine("view/ExercisePagePackage/ExerciseDataCard.ets(76:9)");
            //音乐按钮
            Button.width('30%');
            //音乐按钮
            Button.fontSize(30);
            //音乐按钮
            Button.fontColor(Color.Black);
            //音乐按钮
            Button.backgroundColor(Color.White);
            //音乐按钮
            Button.fontWeight(400);
            //音乐按钮
            Button.height('20%');
        }, Button);
        //音乐按钮
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class exerciseData {
    name: string;
    unit: string;
    constructor(name: string, unit: string) {
        this.name = name;
        this.unit = unit;
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "ExerciseDataCard", new ExerciseDataCard(undefined, {}));
    previewComponent();
}
else {
}
