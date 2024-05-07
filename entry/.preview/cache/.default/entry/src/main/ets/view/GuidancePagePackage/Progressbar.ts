interface Progressbar_Params {
    value?: number;
}
export default class Progressbar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.value = 0;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: Progressbar_Params) {
        if (params.value !== undefined) {
            this.value = params.value;
        }
    }
    updateStateVars(params: Progressbar_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private value: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: this.value });
            Progress.debugLine("view/GuidancePagePackage/Progressbar.ets(5:5)");
            Progress.size({ width: '90%' });
            Progress.color({ "id": 16777223, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Progress.backgroundColor({ "id": 16777220, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Progress.style({ strokeWidth: 18 });
            Progress.padding({ top: 30 });
        }, Progress);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
