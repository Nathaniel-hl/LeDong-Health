interface exerciseRecommendCard_Params {
    colors?: string[];
    index?: number;
    datas?: recommend[];
}
export default class exerciseRecommendCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.colors = ['#FFAA02', '#FD600E',
            '#00968A', '#A79884',
            '#FD4D12', '#FFAA02'];
        this.index = 0;
        this.datas = [
            new recommend('预防腰椎突出', '/view/ExercisePagePackage/recommendPic1.png'),
            new recommend('强肌肉防干眼', '/view/ExercisePagePackage/recommendPic1.png'),
            new recommend('太极', '/view/ExercisePagePackage/recommendPic1.png')
        ];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: exerciseRecommendCard_Params) {
        if (params.colors !== undefined) {
            this.colors = params.colors;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
    }
    updateStateVars(params: exerciseRecommendCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private colors: string[];
    private index: number;
    private datas: recommend[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(this.colors[this.index]);
            Column.size({ height: 150, width: 150 });
            Column.alignItems(HorizontalAlign.Start);
            Column.borderRadius(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.datas[this.index].name);
            Text.fontSize(20);
            Text.padding({ left: 10, top: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.datas[this.index].image);
            Image.objectFit(ImageFit.Fill);
            Image.width('60%');
            Image.padding({ right: 10 });
        }, Image);
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class recommend {
    name: string;
    image: string;
    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }
}
