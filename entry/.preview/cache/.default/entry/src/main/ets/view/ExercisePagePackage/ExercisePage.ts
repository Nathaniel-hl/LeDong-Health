interface ExercisePage_Params {
    message?: string;
    user_coin_num?: number;
    items?: listItem[];
}
import bottomChooser from "@bundle:com.example.wutsport/entry/ets/bottomChooser";
import HealthDataCard from "@bundle:com.example.wutsport/entry/ets/view/ExercisePagePackage/HealthDataCard";
import router from "@ohos:router";
class ExercisePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__user_coin_num = new ObservedPropertySimplePU(18
        //每日打卡名称+时长数组
        , this, "user_coin_num");
        this.items = [
            new listItem('连续步行', 20, true),
            new listItem('平衡训练', 10, false),
            new listItem('全身拉伸', 10, false),
            new listItem('自由运动', 20, false),
            new listItem('眼睛保护', 5, false),
        ];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: ExercisePage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.user_coin_num !== undefined) {
            this.user_coin_num = params.user_coin_num;
        }
        if (params.items !== undefined) {
            this.items = params.items;
        }
    }
    updateStateVars(params: ExercisePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__user_coin_num.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__user_coin_num.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    private __user_coin_num: ObservedPropertySimplePU<number>;
    get user_coin_num() {
        return this.__user_coin_num.get();
    }
    set user_coin_num(newValue: number) {
        this.__user_coin_num.set(newValue);
    }
    //每日打卡名称+时长数组
    private items: listItem[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/ExercisePagePackage/ExercisePage.ets(22:5)");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //首页title
            Row.create();
            Row.debugLine("view/ExercisePagePackage/ExercisePage.ets(24:7)");
            //首页title
            Row.height('7%');
            //首页title
            Row.backgroundColor(Color.White);
            //首页title
            Row.width('100%');
            //首页title
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('首页');
            Text.debugLine("view/ExercisePagePackage/ExercisePage.ets(25:9)");
            Text.fontSize(30);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //首页title
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //每日打卡+编辑+金币数量显示+是否完成图标
            Row.create();
            Row.debugLine("view/ExercisePagePackage/ExercisePage.ets(35:7)");
            //每日打卡+编辑+金币数量显示+是否完成图标
            Row.height('5%');
            //每日打卡+编辑+金币数量显示+是否完成图标
            Row.width('100%');
            //每日打卡+编辑+金币数量显示+是否完成图标
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('每日打卡   ');
            Text.debugLine("view/ExercisePagePackage/ExercisePage.ets(36:9)");
            Text.fontSize(25);
            Text.padding({ left: '5%' });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('编辑');
            Text.debugLine("view/ExercisePagePackage/ExercisePage.ets(41:9)");
            Text.fontSize(20);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/ExercisePagePackage/ExercisePage.ets(45:9)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.user_coin_num + '');
            Text.debugLine("view/ExercisePagePackage/ExercisePage.ets(47:9)");
            Text.fontSize(20);
            Text.opacity(0.8);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/ExercisePagePackage/ExercisePage.ets(52:9)");
            Image.objectFit(ImageFit.Fill);
            Image.size({ height: 20, width: 30 });
            Image.padding({ right: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777242, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/ExercisePagePackage/ExercisePage.ets(58:9)");
            Image.objectFit(ImageFit.Fill);
            Image.size({ height: 20, width: 20 });
        }, Image);
        //每日打卡+编辑+金币数量显示+是否完成图标
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //打卡列表
            List.create({ space: 10 });
            List.debugLine("view/ExercisePagePackage/ExercisePage.ets(67:7)");
            //打卡列表
            List.width('100%');
            //打卡列表
            List.height('43%');
            //打卡列表
            List.alignListItem(ListItemAlign.Center);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("view/ExercisePagePackage/ExercisePage.ets(71:13)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("view/ExercisePagePackage/ExercisePage.ets(72:15)");
                            Row.justifyContent(FlexAlign.Start);
                            Row.width('90%');
                            Row.height('20%');
                            Row.backgroundColor(Color.White);
                            Row.borderRadius(20);
                            Row.backgroundColor(item.isFinished ? { "id": 16777223, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : null);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(`${item.name}${item.duration}分钟`);
                            Text.debugLine("view/ExercisePagePackage/ExercisePage.ets(73:17)");
                            Text.fontSize(25);
                            Text.padding({ left: 10 });
                            Text.fontColor(Color.Black);
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Blank.create();
                            Blank.debugLine("view/ExercisePagePackage/ExercisePage.ets(78:17)");
                        }, Blank);
                        Blank.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item.isFinished) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Button.createWithLabel('已完成');
                                        Button.debugLine("view/ExercisePagePackage/ExercisePage.ets(81:19)");
                                        Button.backgroundColor('#00000000');
                                        Button.borderColor(Color.White);
                                        Button.borderWidth(1);
                                    }, Button);
                                    Button.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Button.createWithLabel('去完成');
                                        Button.debugLine("view/ExercisePagePackage/ExercisePage.ets(86:19)");
                                        Button.onClick(() => {
                                            router.pushUrl({
                                                url: 'view/ExercisePagePackage/ExercisePage2'
                                            });
                                        });
                                    }, Button);
                                    Button.pop();
                                });
                            }
                        }, If);
                        If.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation(itemCreation);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.items, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        //打卡列表
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //健康数据+编辑
            Row.create();
            Row.debugLine("view/ExercisePagePackage/ExercisePage.ets(110:7)");
            //健康数据+编辑
            Row.height('5%');
            //健康数据+编辑
            Row.width('100%');
            //健康数据+编辑
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('健康数据   ');
            Text.debugLine("view/ExercisePagePackage/ExercisePage.ets(111:9)");
            Text.fontSize(25);
            Text.padding({ left: '5%' });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('编辑');
            Text.debugLine("view/ExercisePagePackage/ExercisePage.ets(116:9)");
            Text.fontSize(20);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //健康数据+编辑
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create(10);
            Blank.debugLine("view/ExercisePagePackage/ExercisePage.ets(124:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //健康数据图片
            List.create({ space: 10 });
            List.debugLine("view/ExercisePagePackage/ExercisePage.ets(127:7)");
            //健康数据图片
            List.width('100%');
            //健康数据图片
            List.listDirection(Axis.Horizontal);
            //健康数据图片
            List.height('20%');
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.padding({ left: 10 });
                ListItem.debugLine("view/ExercisePagePackage/ExercisePage.ets(128:9)");
                if (!isInitialRender) {
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
                                    index: 0
                                };
                            };
                            ViewPU.create(new HealthDataCard(this, { index: 0 }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/ExercisePagePackage/ExercisePage.ets(131:9)");
                if (!isInitialRender) {
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
                                    index: 1
                                };
                            };
                            ViewPU.create(new HealthDataCard(this, { index: 1 }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/ExercisePagePackage/ExercisePage.ets(134:9)");
                if (!isInitialRender) {
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
                                    index: 2
                                };
                            };
                            ViewPU.create(new HealthDataCard(this, { index: 2 }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            ListItem.pop();
        }
        //健康数据图片
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/ExercisePagePackage/ExercisePage.ets(141:7)");
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            isExercisePage: true
                        };
                    };
                    ViewPU.create(new 
                    //底部页面跳转
                    bottomChooser(this, { isExercisePage: true }, undefined, elmtId, paramsLambda));
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
class listItem {
    name: string;
    duration: number;
    isFinished: boolean;
    constructor(name: string, duration: number, isFinished: boolean) {
        this.name = name;
        this.duration = duration;
        this.isFinished = isFinished;
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ExercisePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
