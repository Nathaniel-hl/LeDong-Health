interface StepDetailPage_year_Params {
}
import bottomChooser from "@bundle:com.example.wutsport/entry/ets/bottomChooser";
import router from "@ohos:router";
import TimeChooser from "@bundle:com.example.wutsport/entry/ets/view/StepDetailPagePackage/TimeChooser";
class StepDetailPage_year extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: StepDetailPage_year_Params) {
    }
    updateStateVars(params: StepDetailPage_year_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(10:5)");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //顶部title和返回按钮
            Row.create();
            Row.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(12:7)");
            //顶部title和返回按钮
            Row.width('90%');
            //顶部title和返回按钮
            Row.backgroundColor(Color.White);
            //顶部title和返回按钮
            Row.height('10%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('<');
            Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(13:9)");
            Text.fontSize(50);
            Text.fontColor(Color.Black);
            Text.onClick(() => {
                router.back();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(19:9)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('步行详情');
            Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(20:9)");
            Text.fontSize(30);
            Text.fontColor(Color.Black);
            Text.fontWeight(400);
            Text.padding({ right: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(25:9)");
        }, Blank);
        Blank.pop();
        //顶部title和返回按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //中间滑动图案
            List.create({ space: 15 });
            List.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(32:7)");
            //中间滑动图案
            List.width('90%');
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                //按钮选择
                ListItem.width('100%');
                //按钮选择
                ListItem.margin({ top: 10 });
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(34:9)");
                if (!isInitialRender) {
                    //按钮选择
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    time: 3
                                };
                            };
                            ViewPU.create(new TimeChooser(this, { time: 3 }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                //按钮选择
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //按钮选择
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(42:9)");
                if (!isInitialRender) {
                    //今日步数统计文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('今日步数总计');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(43:11)");
                    Text.fontSize(15);
                    Text.fontColor(Color.Black);
                    Text.opacity(0.5);
                }, Text);
                Text.pop();
                //今日步数统计文字
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //今日步数统计文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(50:9)");
                if (!isInitialRender) {
                    //步数显示+步数占比
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(51:11)");
                    Row.width('100%');
                    Row.alignItems(VerticalAlign.Bottom);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('15680');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(52:13)");
                    Text.fontSize(35);
                    Text.fontWeight(600);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('步');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(57:13)");
                    Text.fontSize(20);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(61:13)");
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('日均连续步行时间占比');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(63:13)");
                    Text.fontSize(15);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(28 + '');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(66:13)");
                    Text.fontSize(30);
                    Text.fontWeight(600);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('%');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(70:13)");
                    Text.fontSize(15);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //步数显示+步数占比
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //步数显示+步数占比
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(79:9)");
                if (!isInitialRender) {
                    //图表1
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('/view/StepDetailPagePackage/graph_pic_1.png');
                    Image.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(80:11)");
                }, Image);
                //图表1
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //图表1
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(84:9)");
                if (!isInitialRender) {
                    //连续步行时间分析文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(85:11)");
                    Row.width('100%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('连续步行时间分析');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(86:13)");
                    Text.fontSize(20);
                    Text.fontWeight(500);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //连续步行时间分析文字
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //连续步行时间分析文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(95:9)");
                if (!isInitialRender) {
                    //图表2
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(96:11)");
                    Column.width('100%');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('/view/StepDetailPagePackage/graph_pic_2.png');
                    Image.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(97:13)");
                }, Image);
                Column.pop();
                //图表2
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //图表2
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(103:9)");
                if (!isInitialRender) {
                    //运动量分析文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(104:11)");
                    Row.width('100%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('运动量分析');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(105:13)");
                    Text.fontSize(20);
                    Text.fontWeight(500);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //运动量分析文字
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //运动量分析文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(114:9)");
                if (!isInitialRender) {
                    //图表3
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(115:11)");
                    Column.width('100%');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('/view/StepDetailPagePackage/graph_pic_4.png');
                    Image.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(116:13)");
                }, Image);
                Column.pop();
                //图表3
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //图表3
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(121:9)");
                if (!isInitialRender) {
                    //步行速度分析文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(122:11)");
                    Row.width('100%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('步行速度分析');
                    Text.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(123:13)");
                    Text.fontSize(20);
                    Text.fontWeight(500);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //步行速度分析文字
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //步行速度分析文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(132:9)");
                if (!isInitialRender) {
                    //图表4
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(133:11)");
                    Column.width('100%');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('/view/StepDetailPagePackage/graph_pic_5.png');
                    Image.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(134:13)");
                }, Image);
                Column.pop();
                //图表4
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //图表4
            ListItem.pop();
        }
        //中间滑动图案
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //底部页面选择
            Blank.create();
            Blank.debugLine("view/StepDetailPagePackage/StepDetailPage_year.ets(142:7)");
        }, Blank);
        //底部页面选择
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            isExercisePage: true
                        };
                    };
                    ViewPU.create(new bottomChooser(this, { isExercisePage: true }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new StepDetailPage_year(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
