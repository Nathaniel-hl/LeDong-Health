interface DataChoice_height_weight_Params {
    message?: string;
    userData_height?: number;
    userData_weight?: number;
}
import bottomNextStep from "@bundle:com.example.wutsport/entry/ets/view/GuidancePagePackage/bottomNextStep";
import Progressbar from "@bundle:com.example.wutsport/entry/ets/view/GuidancePagePackage/Progressbar";
class DataChoice_height_weight extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World'
        //用户选择身高，默认为170
        , this, "message");
        this.__userData_height = new ObservedPropertySimplePU(170
        //用户选择体重，默认为60kg
        , this, "userData_height");
        this.__userData_weight = new ObservedPropertySimplePU(60, this, "userData_weight");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: DataChoice_height_weight_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.userData_height !== undefined) {
            this.userData_height = params.userData_height;
        }
        if (params.userData_weight !== undefined) {
            this.userData_weight = params.userData_weight;
        }
    }
    updateStateVars(params: DataChoice_height_weight_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__userData_height.purgeDependencyOnElmtId(rmElmtId);
        this.__userData_weight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__userData_height.aboutToBeDeleted();
        this.__userData_weight.aboutToBeDeleted();
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
    //用户选择身高，默认为170
    private __userData_height: ObservedPropertySimplePU<number>;
    get userData_height() {
        return this.__userData_height.get();
    }
    set userData_height(newValue: number) {
        this.__userData_height.set(newValue);
    }
    //用户选择体重，默认为60kg
    private __userData_weight: ObservedPropertySimplePU<number>;
    get userData_weight() {
        return this.__userData_weight.get();
    }
    set userData_weight(newValue: number) {
        this.__userData_weight.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            value: 50
                        };
                    };
                    ViewPU.create(new 
                    //进度条
                    Progressbar(this, { value: 50 }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //身高文字
            Row.create();
            //身高文字
            Row.width('100%');
            //身高文字
            Row.justifyContent(FlexAlign.Start);
            //身高文字
            Row.padding({ top: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('身高(厘米) :');
            Text.fontSize(25);
            Text.padding({ left: 20 });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        //身高文字
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.userData_height + '');
            Text.fontSize(25);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //身高滑块
            Slider.create({
                min: 100,
                max: 200,
                value: this.userData_height,
                step: 1,
            });
            //身高滑块
            Slider.blockColor({ "id": 16777227, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            //身高滑块
            Slider.width('90%');
            //身高滑块
            Slider.trackThickness(10);
            //身高滑块
            Slider.showTips(false);
            //身高滑块
            Slider.onChange((value: number) => {
                this.userData_height = value;
            });
        }, Slider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //体重文字
            Row.create();
            //体重文字
            Row.width('100%');
            //体重文字
            Row.justifyContent(FlexAlign.Start);
            //体重文字
            Row.padding({ top: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('体重(千克) :');
            Text.fontSize(25);
            Text.padding({ left: 20 });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        //体重文字
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.userData_weight + '');
            Text.fontSize(25);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //身高滑块
            Slider.create({
                min: 40,
                max: 100,
                value: this.userData_weight,
                step: 1,
            });
            //身高滑块
            Slider.blockColor({ "id": 16777227, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            //身高滑块
            Slider.width('90%');
            //身高滑块
            Slider.trackThickness(10);
            //身高滑块
            Slider.showTips(false);
            //身高滑块
            Slider.onChange((value: number) => {
                this.userData_weight = value;
            });
        }, Slider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //底部页面切换
            Blank.create();
        }, Blank);
        //底部页面切换
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            index: 2
                        };
                    };
                    ViewPU.create(new bottomNextStep(this, { index: 2 }, undefined, elmtId, paramsLambda));
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
loadDocument(new DataChoice_height_weight(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
