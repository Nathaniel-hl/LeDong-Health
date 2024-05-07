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
    setInitiallyProvidedValue(a: ExercisePage_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
        if (a.user_coin_num !== undefined) {
            this.user_coin_num = a.user_coin_num;
        }
        if (a.items !== undefined) {
            this.items = a.items;
        }
    }
    updateStateVars(a: ExercisePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__message.purgeDependencyOnElmtId(a);
        this.__user_coin_num.purgeDependencyOnElmtId(a);
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
    set message(a: string) {
        this.__message.set(a);
    }
    private __user_coin_num: ObservedPropertySimplePU<number>;
    get user_coin_num() {
        return this.__user_coin_num.get();
    }
    set user_coin_num(a: number) {
        this.__user_coin_num.set(a);
    }
    //每日打卡名称+时长数组
    private items: listItem[];
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //首页title
            Row.create();
            //首页title
            Row.height('7%');
            //首页title
            Row.backgroundColor(Color.White);
            //首页title
            Row.width('100%');
            //首页title
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('首页');
            Text.fontSize(30);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //首页title
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //每日打卡+编辑+金币数量显示+是否完成图标
            Row.create();
            //每日打卡+编辑+金币数量显示+是否完成图标
            Row.height('5%');
            //每日打卡+编辑+金币数量显示+是否完成图标
            Row.width('100%');
            //每日打卡+编辑+金币数量显示+是否完成图标
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('每日打卡   ');
            Text.fontSize(25);
            Text.padding({ left: '5%' });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create('编辑');
            Text.fontSize(20);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create(this.user_coin_num + '');
            Text.fontSize(20);
            Text.opacity(0.8);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.objectFit(ImageFit.Fill);
            Image.size({ height: 20, width: 30 });
            Image.padding({ right: 10 });
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.objectFit(ImageFit.Fill);
            Image.size({ height: 20, width: 20 });
        }, Image);
        //每日打卡+编辑+金币数量显示+是否完成图标
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //打卡列表
            List.create({ space: 10 });
            //打卡列表
            List.width('100%');
            //打卡列表
            List.height('43%');
            //打卡列表
            List.alignListItem(ListItemAlign.Center);
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
                        this.observeComponentCreation2((n, o) => {
                            Row.create();
                            Row.justifyContent(FlexAlign.Start);
                            Row.width('90%');
                            Row.height('20%');
                            Row.backgroundColor(Color.White);
                            Row.borderRadius(20);
                            Row.backgroundColor(g.isFinished ? { "id": 16777227, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : null);
                        }, Row);
                        this.observeComponentCreation2((n, o) => {
                            Text.create(`${g.name}${g.duration}分钟`);
                            Text.fontSize(25);
                            Text.padding({ left: 10 });
                            Text.fontColor(Color.Black);
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((n, o) => {
                            Blank.create();
                        }, Blank);
                        Blank.pop();
                        this.observeComponentCreation2((n, o) => {
                            If.create();
                            if (g.isFinished) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((r, s) => {
                                        Button.createWithLabel('已完成');
                                        Button.backgroundColor('#00000000');
                                        Button.borderColor(Color.White);
                                        Button.borderWidth(1);
                                    }, Button);
                                    Button.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation2((r, s) => {
                                        Button.createWithLabel('去完成');
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
                    this.observeComponentCreation(h);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(b, this.items, d);
        }, ForEach);
        ForEach.pop();
        //打卡列表
        List.pop();
        this.observeComponentCreation2((b, c) => {
            //健康数据+编辑
            Row.create();
            //健康数据+编辑
            Row.height('5%');
            //健康数据+编辑
            Row.width('100%');
            //健康数据+编辑
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('健康数据   ');
            Text.fontSize(25);
            Text.padding({ left: '5%' });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create('编辑');
            Text.fontSize(20);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //健康数据+编辑
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create(10);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            //健康数据图片
            List.create({ space: 10 });
            //健康数据图片
            List.width('100%');
            //健康数据图片
            List.listDirection(Axis.Horizontal);
            //健康数据图片
            List.height('20%');
        }, List);
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                ListItem.padding({ left: 10 });
                if (!f) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                {
                    this.observeComponentCreation2((h, i) => {
                        if (i) {
                            let j = () => {
                                return {
                                    index: 0
                                };
                            };
                            ViewPU.create(new HealthDataCard(this, { index: 0 }, undefined, h, j));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(h, {});
                        }
                    }, null);
                }
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                {
                    this.observeComponentCreation2((h, i) => {
                        if (i) {
                            let j = () => {
                                return {
                                    index: 1
                                };
                            };
                            ViewPU.create(new HealthDataCard(this, { index: 1 }, undefined, h, j));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(h, {});
                        }
                    }, null);
                }
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                {
                    this.observeComponentCreation2((h, i) => {
                        if (i) {
                            let j = () => {
                                return {
                                    index: 2
                                };
                            };
                            ViewPU.create(new HealthDataCard(this, { index: 2 }, undefined, h, j));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(h, {});
                        }
                    }, null);
                }
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            ListItem.pop();
        }
        //健康数据图片
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
                            isExercisePage: true
                        };
                    };
                    ViewPU.create(new 
                    //底部页面跳转
                    bottomChooser(this, { isExercisePage: true }, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
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
