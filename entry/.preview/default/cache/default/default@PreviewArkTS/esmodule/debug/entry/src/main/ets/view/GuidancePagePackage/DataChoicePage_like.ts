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
    setInitiallyProvidedValue(params: DataChoicePage_like_Params) {
        if (params.items !== undefined) {
            this.items = params.items;
        }
    }
    updateStateVars(params: DataChoicePage_like_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private items: Array<listItem>;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/GuidancePagePackage/DataChoicePage_like.ets(15:5)");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            value: 100
                        };
                    };
                    ViewPU.create(new Progressbar(this, { value: 100 }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("view/GuidancePagePackage/DataChoicePage_like.ets(18:7)");
            Row.width('100%');
            Row.padding({ top: 10, bottom: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('您喜欢的运动类型 :');
            Text.debugLine("view/GuidancePagePackage/DataChoicePage_like.ets(19:9)");
            Text.fontSize(25);
            Text.padding({ left: 20 });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 10 });
            List.debugLine("view/GuidancePagePackage/DataChoicePage_like.ets(26:7)");
            List.width('100%');
            List.height('65%');
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("view/GuidancePagePackage/DataChoicePage_like.ets(30:13)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.showPic.bind(this)(item);
                        ListItem.pop();
                    };
                    this.observeComponentCreation(itemCreation);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.items, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/GuidancePagePackage/DataChoicePage_like.ets(38:7)");
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            index: 4,
                            hasNext: false
                        };
                    };
                    ViewPU.create(new bottomNextStep(this, { index: 4, hasNext: false }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        Column.pop();
    }
    showPic(l: listItem, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("view/GuidancePagePackage/DataChoicePage_like.ets(47:5)");
            Row.width('100%');
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.padding({ right: 5 });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            index: l.index1
                        };
                    };
                    ViewPU.create(new ExerciseCard(this, { index: l.index1 }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.padding({ left: 5 });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            index: l.index2
                        };
                    };
                    ViewPU.create(new 
                    // Blank(15)
                    ExerciseCard(this, { index: l.index2 }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
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
