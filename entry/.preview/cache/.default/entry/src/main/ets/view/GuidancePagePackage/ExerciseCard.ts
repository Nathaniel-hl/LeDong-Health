interface ExerciseCard_Params {
    exercises?: exercise[];
    index?: number;
    backgroundPic?: Resource;
    textColor?: Color;
    isChoice?: Boolean;
}
export default class ExerciseCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.exercises = [
            new exercise('行走', { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('跑步', { "id": 16777234, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('游泳', { "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('骑行', { "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('舞蹈', { "id": 16777259, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('瑜伽', { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('冥想', { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('举重', { "id": 16777276, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" })
        ];
        this.index = 2;
        this.__backgroundPic = new ObservedPropertyObjectPU({ "id": 16777269, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }, this, "backgroundPic");
        this.__textColor = new ObservedPropertySimplePU(Color.Black, this, "textColor");
        this.__isChoice = new ObservedPropertyObjectPU(false, this, "isChoice");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: ExerciseCard_Params) {
        if (params.exercises !== undefined) {
            this.exercises = params.exercises;
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
    updateStateVars(params: ExerciseCard_Params) {
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
    private exercises: exercise[];
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
            Column.debugLine("view/GuidancePagePackage/ExerciseCard.ets(23:5)");
            Column.width('150');
            Column.height('150');
            Column.backgroundImage(ObservedObject.GetRawObject(this.backgroundPic));
            Column.backgroundImageSize({ height: '130%', width: '130%' });
            Column.backgroundImagePosition({ x: -50, y: -40 });
            Column.borderRadius(30);
            Column.onClick(() => {
                if (this.textColor == Color.Black) {
                    this.textColor = Color.White;
                    this.backgroundPic = { "id": 16777277, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" };
                    this.isChoice = true;
                }
                else {
                    this.isChoice = false;
                    this.backgroundPic = { "id": 16777269, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" };
                    this.textColor = Color.Black;
                }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/GuidancePagePackage/ExerciseCard.ets(24:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //运动图片
            Image.create(this.exercises[this.index].image);
            Image.debugLine("view/GuidancePagePackage/ExerciseCard.ets(26:7)");
            //运动图片
            Image.padding({ top: 30 });
            //运动图片
            Image.autoResize(true);
            //运动图片
            Image.size({ height: '65%' });
            //运动图片
            Image.padding({ left: 10, right: 10 });
            //运动图片
            Image.interpolation(ImageInterpolation.Medium);
            //运动图片
            Image.objectFit(ImageFit.Fill);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //描述
            Row.create();
            Row.debugLine("view/GuidancePagePackage/ExerciseCard.ets(36:7)");
            //描述
            Row.width('100%');
            //描述
            Row.padding({ bottom: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.exercises[this.index].name);
            Text.debugLine("view/GuidancePagePackage/ExerciseCard.ets(37:9)");
            Text.fontSize(23);
            Text.padding({ left: 10 });
            Text.fontColor(this.textColor);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/GuidancePagePackage/ExerciseCard.ets(41:9)");
        }, Blank);
        Blank.pop();
        //描述
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class exercise {
    name: string;
    image: Resource;
    constructor(name: string, image: Resource) {
        this.name = name;
        this.image = image;
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "ExerciseCard", new ExerciseCard(undefined, {}));
    previewComponent();
}
else {
}
