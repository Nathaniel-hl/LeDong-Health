interface CommunityServiceCard_Params {
    colors?: string[];
    index?: number;
    datas?: serviceType[];
}
export default class CommunityServiceCard extends ViewPU {
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
            new serviceType('运动指导', '/view/CommunityPage/service_guidance.png'),
            new serviceType('紧急求助', '/view/CommunityPage/service_urgency.png'),
            new serviceType('建议', '/view/CommunityPage/service_advice.png')
        ];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: CommunityServiceCard_Params) {
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
    updateStateVars(params: CommunityServiceCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private colors: string[];
    private index: number;
    private datas: serviceType[];
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
            Text.fontSize(25);
            Text.padding({ left: 10, top: 20 });
            Text.fontWeight(500);
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
            Image.height('50%');
            Image.padding({ right: 10 });
            Image.interpolation(ImageInterpolation.Medium);
        }, Image);
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class serviceType {
    name: string;
    image: string;
    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }
}
