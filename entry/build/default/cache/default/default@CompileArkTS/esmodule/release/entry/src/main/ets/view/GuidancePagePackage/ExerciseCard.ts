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
            new exercise('行走', { "id": 16777278, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('跑步', { "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('游泳', { "id": 16777277, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('骑行', { "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('舞蹈', { "id": 16777241, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('瑜伽', { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('冥想', { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new exercise('举重', { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" })
        ];
        this.index = 2;
        this.__backgroundPic = new ObservedPropertyObjectPU({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }, this, "backgroundPic");
        this.__textColor = new ObservedPropertySimplePU(Color.Black, this, "textColor");
        this.__isChoice = new ObservedPropertyObjectPU(false, this, "isChoice");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(a: ExerciseCard_Params) {
        if (a.exercises !== undefined) {
            this.exercises = a.exercises;
        }
        if (a.index !== undefined) {
            this.index = a.index;
        }
        if (a.backgroundPic !== undefined) {
            this.backgroundPic = a.backgroundPic;
        }
        if (a.textColor !== undefined) {
            this.textColor = a.textColor;
        }
        if (a.isChoice !== undefined) {
            this.isChoice = a.isChoice;
        }
    }
    updateStateVars(a: ExerciseCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__backgroundPic.purgeDependencyOnElmtId(a);
        this.__textColor.purgeDependencyOnElmtId(a);
        this.__isChoice.purgeDependencyOnElmtId(a);
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
    set backgroundPic(a: Resource) {
        this.__backgroundPic.set(a);
    }
    private __textColor: ObservedPropertySimplePU<Color>;
    get textColor() {
        return this.__textColor.get();
    }
    set textColor(a: Color) {
        this.__textColor.set(a);
    }
    private __isChoice: ObservedPropertyObjectPU<Boolean>;
    get isChoice() {
        return this.__isChoice.get();
    }
    set isChoice(a: Boolean) {
        this.__isChoice.set(a);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
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
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            //运动图片
            Image.create(this.exercises[this.index].image);
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
        this.observeComponentCreation2((b, c) => {
            //描述
            Row.create();
            //描述
            Row.width('100%');
            //描述
            Row.padding({ bottom: 10 });
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create(this.exercises[this.index].name);
            Text.fontSize(23);
            Text.padding({ left: 10 });
            Text.fontColor(this.textColor);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
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
