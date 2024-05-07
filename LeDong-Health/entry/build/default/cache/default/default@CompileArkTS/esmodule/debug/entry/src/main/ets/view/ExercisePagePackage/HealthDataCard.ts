interface HealthDataCard_Params {
    colors?: string[];
    index?: number;
    datas?: healthyData[];
}
export default class HealthDataCard extends ViewPU {
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
            new healthyData('心率', '90次/分钟', { "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new healthyData('深度睡眠', '6小时', { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
            new healthyData('血压', '128mmHg', { "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" }),
        ];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: HealthDataCard_Params) {
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
    updateStateVars(params: HealthDataCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private colors: string[];
    private index: number;
    private datas: healthyData[];
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
            Text.padding({ left: 10, top: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.datas[this.index].data);
            Text.fontSize(20);
            Text.padding({ left: 10 });
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
class healthyData {
    name: string;
    data: string;
    image: Resource;
    constructor(name: string, data: string, image: Resource) {
        this.data = data;
        this.name = name;
        this.image = image;
    }
}
