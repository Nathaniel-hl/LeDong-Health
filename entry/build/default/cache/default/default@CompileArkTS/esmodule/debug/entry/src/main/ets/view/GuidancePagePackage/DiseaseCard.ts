interface DiseaseCard_Params {
    diseases?: disease[];
    index?: number;
    backgroundPic?: Resource;
    textColor?: Color;
    isChoice?: Boolean;
}
export default class DiseaseCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.diseases = [
            new disease("过往病史", { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new disease("抑郁", { "id": 16777242, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new disease("肥胖", { "id": 16777269, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new disease("糖尿病", { "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new disease("偏头痛", { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new disease("心脏病", { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new disease("骨质疏松", { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new disease("消化不良", { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" })
        ];
        this.index = 2;
        this.__backgroundPic = new ObservedPropertyObjectPU({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }, this, "backgroundPic");
        this.__textColor = new ObservedPropertySimplePU(Color.Black, this, "textColor");
        this.__isChoice = new ObservedPropertyObjectPU(false, this, "isChoice");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: DiseaseCard_Params) {
        if (params.diseases !== undefined) {
            this.diseases = params.diseases;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.backgroundPic !== undefined) {
            this.backgroundPic = params.backgroundPic;
        }
        if (params.textColor !== undefined) {
            this.textColor = params.textColor;
        }
        if (params.isChoice !== undefined) {
            this.isChoice = params.isChoice;
        }
    }
    updateStateVars(params: DiseaseCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__backgroundPic.purgeDependencyOnElmtId(rmElmtId);
        this.__textColor.purgeDependencyOnElmtId(rmElmtId);
        this.__isChoice.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__backgroundPic.aboutToBeDeleted();
        this.__textColor.aboutToBeDeleted();
        this.__isChoice.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private diseases: disease[];
    private index: number;
    private __backgroundPic: ObservedPropertyObjectPU<Resource>;
    get backgroundPic() {
        return this.__backgroundPic.get();
    }
    set backgroundPic(newValue: Resource) {
        this.__backgroundPic.set(newValue);
    }
    private __textColor: ObservedPropertySimplePU<Color>;
    get textColor() {
        return this.__textColor.get();
    }
    set textColor(newValue: Color) {
        this.__textColor.set(newValue);
    }
    private __isChoice: ObservedPropertyObjectPU<Boolean>;
    get isChoice() {
        return this.__isChoice.get();
    }
    set isChoice(newValue: Boolean) {
        this.__isChoice.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('150');
            Column.height('150');
            Column.backgroundImage(ObservedObject.GetRawObject(this.backgroundPic));
            Column.backgroundImageSize({ height: '130%', width: '130%' });
            Column.backgroundImagePosition({ x: -50, y: -40 });
            Column.borderRadius(30);
            Column.onClick(() => {
                if (this.textColor == Color.Black) {
                    this.textColor = Color.White;
                    this.backgroundPic = { "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" };
                    this.isChoice = true;
                }
                else {
                    this.isChoice = false;
                    this.backgroundPic = { "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" };
                    this.textColor = Color.Black;
                }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.diseases[this.index].image);
            Image.padding({ top: 30 });
            Image.autoResize(true);
            Image.size({ height: '65%' });
            Image.padding({ left: 10, right: 10 });
            Image.objectFit(ImageFit.Fill);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding({ bottom: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.diseases[this.index].name);
            Text.fontSize(23);
            Text.padding({ left: 10 });
            Text.fontColor(this.textColor);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class disease {
    name: string;
    image: Resource;
    constructor(name: string, image: Resource) {
        this.name = name;
        this.image = image;
    }
}
