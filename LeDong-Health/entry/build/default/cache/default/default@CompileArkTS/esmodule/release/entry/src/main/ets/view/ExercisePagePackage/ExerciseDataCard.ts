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
    setInitiallyProvidedValue(a: ExerciseDataCard_Params) {
        if (a.units !== undefined) {
            this.units = a.units;
        }
        if (a.unit !== undefined) {
            this.unit = a.unit;
        }
        if (a.num !== undefined) {
            this.num = a.num;
        }
        if (a.name !== undefined) {
            this.name = a.name;
        }
    }
    updateStateVars(a: ExerciseDataCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
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
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.height('30%');
            Column.width('90%');
            Column.backgroundImage('view/ExercisePagePackage/exerciseCardBackgroundPic.png');
            Column.backgroundImageSize({ width: '100%', height: '150%' });
            Column.backgroundImagePosition({ y: -200 });
            Column.borderRadius(20);
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //累计文字
            Row.create();
            //累计文字
            Row.width('100%');
            //累计文字
            Row.padding({ left: 10, top: 10 });
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('累计' + this.name);
            Text.fontSize(20);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        //累计文字
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            Row.create();
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create(this.num + '');
            Text.fontSize(100);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            //显示单位
            Text.create(this.unit);
            //显示单位
            Text.fontSize(30);
            //显示单位
            Text.fontColor(Color.White);
        }, Text);
        //显示单位
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width('100%');
            Row.padding({ top: '5%' });
        }, Row);
        this.observeComponentCreation2((b, c) => {
            //热身按钮
            Button.createWithLabel('热身');
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
        this.observeComponentCreation2((b, c) => {
            //开始按钮
            Button.createWithLabel('开始');
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
        this.observeComponentCreation2((b, c) => {
            //音乐按钮
            Button.createWithLabel('音乐');
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
