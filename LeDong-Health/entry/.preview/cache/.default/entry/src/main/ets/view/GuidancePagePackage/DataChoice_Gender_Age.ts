interface DataChoice_Gender_Age_Params {
    message?: string;
    isBoy?: Boolean;
    boyPic?: Resource;
    girlPic?: Resource;
    //选择器开始的的日期
    selectDate?: Date;
    //用户选择的日期，默认为选择器开始的日期
    birthday_year?: Number;
    birthday_month?: Number;
    birthday_day?: Number;
    colors?: Array<Color>;
}
import bottomNextStep from "@bundle:com.example.wutsport/entry/ets/view/GuidancePagePackage/bottomNextStep";
import Progressbar from "@bundle:com.example.wutsport/entry/ets/view/GuidancePagePackage/Progressbar";
class DataChoice_Gender_Age extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.isBoy = true;
        this.__boyPic = new ObservedPropertyObjectPU({ "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }, this, "boyPic");
        this.__girlPic = new ObservedPropertyObjectPU({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }, this, "girlPic");
        this.selectDate = new Date('2000-1-1');
        this.birthday_year = this.selectDate.getFullYear();
        this.birthday_month = this.selectDate.getMonth();
        this.birthday_day = this.selectDate.getDay();
        this.colors = new Array(Color.White, Color.Black);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: DataChoice_Gender_Age_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.isBoy !== undefined) {
            this.isBoy = params.isBoy;
        }
        if (params.boyPic !== undefined) {
            this.boyPic = params.boyPic;
        }
        if (params.girlPic !== undefined) {
            this.girlPic = params.girlPic;
        }
        if (params.selectDate !== undefined) {
            this.selectDate = params.selectDate;
        }
        if (params.birthday_year !== undefined) {
            this.birthday_year = params.birthday_year;
        }
        if (params.birthday_month !== undefined) {
            this.birthday_month = params.birthday_month;
        }
        if (params.birthday_day !== undefined) {
            this.birthday_day = params.birthday_day;
        }
        if (params.colors !== undefined) {
            this.colors = params.colors;
        }
    }
    updateStateVars(params: DataChoice_Gender_Age_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__boyPic.purgeDependencyOnElmtId(rmElmtId);
        this.__girlPic.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__boyPic.aboutToBeDeleted();
        this.__girlPic.aboutToBeDeleted();
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
    private isBoy: Boolean;
    private __boyPic: ObservedPropertyObjectPU<Resource>;
    get boyPic() {
        return this.__boyPic.get();
    }
    set boyPic(newValue: Resource) {
        this.__boyPic.set(newValue);
    }
    private __girlPic: ObservedPropertyObjectPU<Resource>;
    get girlPic() {
        return this.__girlPic.get();
    }
    set girlPic(newValue: Resource) {
        this.__girlPic.set(newValue);
    }
    //选择器开始的的日期
    private selectDate: Date;
    //用户选择的日期，默认为选择器开始的日期
    private birthday_year: Number;
    private birthday_month: Number;
    private birthday_day: Number;
    private colors: Array<Color>;
    aboutToAppear() {
        this.isBoy = true;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(27:5)");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.Start);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            value: 25
                        };
                    };
                    ViewPU.create(new 
                    //进度条
                    Progressbar(this, { value: 25 }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //性别文字
            Row.create();
            Row.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(34:7)");
            //性别文字
            Row.justifyContent(FlexAlign.Start);
            //性别文字
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('性别:');
            Text.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(35:9)");
            Text.fontSize(25);
            Text.opacity(0.9);
            Text.padding({ left: 20 });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //性别文字
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //图片男女选择
            Row.create();
            Row.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(45:7)");
            //图片男女选择
            Row.width('100%');
            //图片男女选择
            Row.height('20%');
            //图片男女选择
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //男生图片
            Image.create(this.boyPic);
            Image.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(47:9)");
            //男生图片
            Image.width('45%');
            //男生图片
            Image.onClick(() => {
                this.isBoy = true;
                this.boyPic = { "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" };
                this.girlPic = { "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" };
                /*if(this.isBoy){
                  return
                }else{
                  this.isBoy=true
                  this.boyPic=$r('app.media.boyPic_true')
                  this.girlPic=$r('app.media.girlPic_false')
                }*/
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.girlPic);
            Image.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(62:9)");
            Image.width('45%');
            Image.onClick(() => {
                this.boyPic = { "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" };
                this.girlPic = { "id": 16777279, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" };
                this.isBoy = false;
            });
        }, Image);
        //图片男女选择
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //生日文字
            Row.create();
            Row.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(75:7)");
            //生日文字
            Row.justifyContent(FlexAlign.Start);
            //生日文字
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('生日:');
            Text.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(76:9)");
            Text.fontSize(25);
            Text.opacity(0.9);
            Text.padding({ left: 20 });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //生日文字
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //日期选择器
            //可设定选择器范围
            DatePicker.create({
                selected: this.selectDate,
            });
            DatePicker.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(86:7)");
            //日期选择器
            //可设定选择器范围
            DatePicker.size({ width: '90%', height: '30%' });
            //日期选择器
            //可设定选择器范围
            DatePicker.textStyle({ color: '#ff182431' });
            //日期选择器
            //可设定选择器范围
            DatePicker.disappearTextStyle({ color: '#ff182431' });
            //日期选择器
            //可设定选择器范围
            DatePicker.onDateChange((value: Date) => {
                this.selectDate = value;
            });
        }, DatePicker);
        //日期选择器
        //可设定选择器范围
        DatePicker.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/GuidancePagePackage/DataChoice_Gender_Age.ets(104:7)");
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            index: 1
                        };
                    };
                    ViewPU.create(new bottomNextStep(this, { index: 1 }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new DataChoice_Gender_Age(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
