interface ExercisePage2_Params {
    message?: string;
    //提示消息(默认为第一个)
    remindMessages?: string[];
    remindMessage?: string;
    messageNum?: number;
    messageIndex?: number;
    //运动选择数组与运动选择(默认为第一个)
    exerciseChoices?: string[];
    curExerciseChoice?: string;
}
import searchHeader from "@bundle:com.example.wutsport/entry/ets/view/HomePagePackage/searchHeader";
import bottomChooser from "@bundle:com.example.wutsport/entry/ets/bottomChooser";
import ExerciseDataCard from "@bundle:com.example.wutsport/entry/ets/view/ExercisePagePackage/ExerciseDataCard";
import exerciseRecommendCard from "@bundle:com.example.wutsport/entry/ets/view/ExercisePagePackage/exerciseRecommendCard";
class ExercisePage2 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World'
        //提示消息(默认为第一个)
        , this, "message");
        this.remindMessages = ['运动前热身非常重要！',
            '运动后拉伸非常重要!',
            '运动时小心周围的人，防止撞伤！'
        ];
        this.__remindMessage = new ObservedPropertySimplePU(this.remindMessages[0], this, "remindMessage");
        this.__messageNum = new ObservedPropertySimplePU(this.remindMessage.length, this, "messageNum");
        this.__messageIndex = new ObservedPropertySimplePU(0
        //运动选择数组与运动选择(默认为第一个)
        , this, "messageIndex");
        this.exerciseChoices = ['步行', '跑步', '舞蹈', '游泳', '骑行'];
        this.__curExerciseChoice = new ObservedPropertySimplePU(this.exerciseChoices[0], this, "curExerciseChoice");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(a: ExercisePage2_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
        if (a.remindMessages !== undefined) {
            this.remindMessages = a.remindMessages;
        }
        if (a.remindMessage !== undefined) {
            this.remindMessage = a.remindMessage;
        }
        if (a.messageNum !== undefined) {
            this.messageNum = a.messageNum;
        }
        if (a.messageIndex !== undefined) {
            this.messageIndex = a.messageIndex;
        }
        if (a.exerciseChoices !== undefined) {
            this.exerciseChoices = a.exerciseChoices;
        }
        if (a.curExerciseChoice !== undefined) {
            this.curExerciseChoice = a.curExerciseChoice;
        }
    }
    updateStateVars(a: ExercisePage2_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__message.purgeDependencyOnElmtId(a);
        this.__remindMessage.purgeDependencyOnElmtId(a);
        this.__messageNum.purgeDependencyOnElmtId(a);
        this.__messageIndex.purgeDependencyOnElmtId(a);
        this.__curExerciseChoice.purgeDependencyOnElmtId(a);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__remindMessage.aboutToBeDeleted();
        this.__messageNum.aboutToBeDeleted();
        this.__messageIndex.aboutToBeDeleted();
        this.__curExerciseChoice.aboutToBeDeleted();
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
    //提示消息(默认为第一个)
    private remindMessages: string[];
    private __remindMessage: ObservedPropertySimplePU<string>;
    get remindMessage() {
        return this.__remindMessage.get();
    }
    set remindMessage(a: string) {
        this.__remindMessage.set(a);
    }
    private __messageNum: ObservedPropertySimplePU<number>;
    get messageNum() {
        return this.__messageNum.get();
    }
    set messageNum(a: number) {
        this.__messageNum.set(a);
    }
    private __messageIndex: ObservedPropertySimplePU<number>;
    get messageIndex() {
        return this.__messageIndex.get();
    }
    set messageIndex(a: number) {
        this.__messageIndex.set(a);
    }
    //运动选择数组与运动选择(默认为第一个)
    private exerciseChoices: string[];
    private __curExerciseChoice: ObservedPropertySimplePU<string>;
    get curExerciseChoice() {
        return this.__curExerciseChoice.get();
    }
    set curExerciseChoice(a: string) {
        this.__curExerciseChoice.set(a);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //首页，搜索栏
            Row.create({ space: 20 });
            //首页，搜索栏
            Row.height('10%');
            //首页，搜索栏
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('运动');
            Text.fontSize(40);
            Text.padding({ left: 10 });
            Text.opacity(0.9);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {};
                    };
                    ViewPU.create(new searchHeader(this, {}, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
                }
            }, null);
        }
        //首页，搜索栏
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //运动选择按钮
            List.create({ space: 20 });
            //运动选择按钮
            List.height('5%');
            //运动选择按钮
            List.width('90%');
            //运动选择按钮
            List.listDirection(Axis.Horizontal);
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
                            Button.createWithLabel(g);
                            Button.size({ width: 80 });
                            Button.fontColor(Color.Black);
                            Button.fontSize(20);
                            Button.opacity(0.7);
                            Button.fontWeight(600);
                            Button.backgroundColor(this.curExerciseChoice == g ? { "id": 16777227, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : Color.White);
                            Button.onClick(() => {
                                this.curExerciseChoice = g;
                            });
                        }, Button);
                        Button.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation(h);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(b, this.exerciseChoices, d);
        }, ForEach);
        ForEach.pop();
        //运动选择按钮
        List.pop();
        this.observeComponentCreation2((b, c) => {
            __Common__.create();
            __Common__.padding({ top: 10 });
        }, __Common__);
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            name: this.curExerciseChoice,
                            num: 23
                        };
                    };
                    ViewPU.create(new 
                    //运动数据卡片
                    ExerciseDataCard(this, { name: this.curExerciseChoice, num: 23 }, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
                }
            }, null);
        }
        __Common__.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            //消息提示
            Row.create();
            //消息提示
            Row.width('90%');
            //消息提示
            Row.height('5%');
            //消息提示
            Row.borderRadius(20);
            //消息提示
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Image.create('/view/ExercisePagePackage/trumpetPic.png');
            Image.objectFit(ImageFit.Fill);
            Image.height('60%');
            Image.interpolation(ImageInterpolation.Medium);
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Text.create(this.remindMessage);
            Text.fontSize(20);
            Text.padding({ left: 10 });
            Text.opacity(0.9);
            Text.onClick(() => {
                this.messageIndex = this.messageIndex % this.messageNum;
                this.remindMessage = this.remindMessages[this.messageIndex];
                this.messageIndex++;
            });
        }, Text);
        Text.pop();
        //消息提示
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //打卡计划推荐+每日打卡领金币
            Row.create();
            //打卡计划推荐+每日打卡领金币
            Row.height('5%');
            //打卡计划推荐+每日打卡领金币
            Row.width('100%');
            //打卡计划推荐+每日打卡领金币
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('打卡计划推荐   ');
            Text.fontSize(25);
            Text.padding({ left: '5%' });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create('每日打卡领金币');
            Text.fontSize(20);
            Text.opacity(0.6);
        }, Text);
        Text.pop();
        //打卡计划推荐+每日打卡领金币
        Row.pop();
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
                            ViewPU.create(new exerciseRecommendCard(this, { index: 0 }, undefined, h, j));
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
                            ViewPU.create(new exerciseRecommendCard(this, { index: 1 }, undefined, h, j));
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
                            ViewPU.create(new exerciseRecommendCard(this, { index: 2 }, undefined, h, j));
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
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ExercisePage2(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
