interface searchHeader_Params {
}
export default class searchHeader extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(a: searchHeader_Params) {
    }
    updateStateVars(a: searchHeader_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Row.create();
            Row.width('65%');
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Search.create({ placeholder: '24式太极拳' });
            Search.textFont({ size: 18 });
            Search.searchButton('搜索');
            Search.placeholderColor(Color.White);
            Search.backgroundColor(Color.Black);
        }, Search);
        Search.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
