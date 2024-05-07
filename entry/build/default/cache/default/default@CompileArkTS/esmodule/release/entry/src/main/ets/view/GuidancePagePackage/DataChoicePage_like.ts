interface DataChoicePage_like_Params {
    items?: Array<listItem>;
}
import bottomNextStep from "@bundle:com.example.wutsport/entry/ets/view/GuidancePagePackage/bottomNextStep";
import ExerciseCard from "@bundle:com.example.wutsport/entry/ets/view/GuidancePagePackage/ExerciseCard";
import Progressbar from "@bundle:com.example.wutsport/entry/ets/view/GuidancePagePackage/Progressbar";
class DataChoicePage_like extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.items = [
            new listItem(0, 1),
            new listItem(2, 3),
            new listItem(4, 5),
            new listItem(6, 7)
        ];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(a: DataChoicePage_like_Params) {
        if (a.items !== undefined) {
            this.items = a.items;
        }
    }
    updateStateVars(a: DataChoicePage_like_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private items: Array<listItem>;
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            value: 100
                        };
                    };
                    ViewPU.create(new Progressbar(this, { value: 100 }, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
                }
            }, null);
        }
        this.observeComponentCreation2((b, c) => {
            Row.create();
            Row.width('100%');
            Row.padding({ top: 10, bottom: 10 });
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('您喜欢的运动类型 :');
            Text.fontSize(25);
            Text.padding({ left: 20 });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            List.create({ space: 10 });
            List.width('100%');
            List.height('65%');
        }, List);
        this.observeComponentCreation2((b, c) => {
            ForEach.create();
            const d = f => {
                const g = f;
                {
                    const h = (k, l) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(k);
                        ListItem.create(i, true);
                        if (!l) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const i = (k, l) => {
                        h(k, l);
                        this.updateFuncByElmtId.set(k, h);
                        this.showPic.bind(this)(g);
                        ListItem.pop();
                    };
                    this.observeComponentCreation(h);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(b, this.items, d);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            index: 4,
                            hasNext: false
                        };
                    };
                    ViewPU.create(new bottomNextStep(this, { index: 4, hasNext: false }, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
                }
            }, null);
        }
        Column.pop();
    }
    showPic(a: listItem, b = null) {
        this.observeComponentCreation2((d, e) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((d, e) => {
            __Common__.create();
            __Common__.padding({ right: 5 });
        }, __Common__);
        {
            this.observeComponentCreation2((e, f) => {
                if (f) {
                    let g = () => {
                        return {
                            index: a.index1
                        };
                    };
                    ViewPU.create(new ExerciseCard(this, { index: a.index1 }, undefined, e, g));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(e, {});
                }
            }, null);
        }
        __Common__.pop();
        this.observeComponentCreation2((d, e) => {
            __Common__.create();
            __Common__.padding({ left: 5 });
        }, __Common__);
        {
            this.observeComponentCreation2((e, f) => {
                if (f) {
                    let g = () => {
                        return {
                            index: a.index2
                        };
                    };
                    ViewPU.create(new 
                    // Blank(15)
                    ExerciseCard(this, { index: a.index2 }, undefined, e, g));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(e, {});
                }
            }, null);
        }
        __Common__.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class listItem {
    index1: number;
    index2: number;
    constructor(index1: number, index2: number) {
        this.index1 = index1;
        this.index2 = index2;
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new DataChoicePage_like(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
