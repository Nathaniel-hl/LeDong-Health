interface interestCard_Params {
    index?: number;
    name?: string;
    colors?: string[];
}
export default class interestCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.index = 0;
        this.name = '跑步';
        this.colors = ['#FFAA02', '#FD600E',
            '#00968A', '#A79884',
            '#FD4D12', '#FFAA02'];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: interestCard_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.colors !== undefined) {
            this.colors = params.colors;
        }
    }
    updateStateVars(params: interestCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private index: number;
    private name: string;
    private colors: string[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.backgroundColor(this.colors[this.index]);
            Row.size({ width: 80, height: 30 });
            Row.justifyContent(FlexAlign.Center);
            Row.padding({ left: 10, right: 10 });
            Row.borderRadius(20);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.name);
            Text.fontSize(20);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
