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
    setInitiallyProvidedValue(params: ExercisePage2_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.remindMessages !== undefined) {
            this.remindMessages = params.remindMessages;
        }
        if (params.remindMessage !== undefined) {
            this.remindMessage = params.remindMessage;
        }
        if (params.messageNum !== undefined) {
            this.messageNum = params.messageNum;
        }
        if (params.messageIndex !== undefined) {
            this.messageIndex = params.messageIndex;
        }
        if (params.exerciseChoices !== undefined) {
            this.exerciseChoices = params.exerciseChoices;
        }
        if (params.curExerciseChoice !== undefined) {
            this.curExerciseChoice = params.curExerciseChoice;
        }
    }
    updateStateVars(params: ExercisePage2_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__remindMessage.purgeDependencyOnElmtId(rmElmtId);
        this.__messageNum.purgeDependencyOnElmtId(rmElmtId);
        this.__messageIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__curExerciseChoice.purgeDependencyOnElmtId(rmElmtId);
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
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    //提示消息(默认为第一个)
    private remindMessages: string[];
    private __remindMessage: ObservedPropertySimplePU<string>;
    get remindMessage() {
        return this.__remindMessage.get();
    }
    set remindMessage(newValue: string) {
        this.__remindMessage.set(newValue);
    }
    private __messageNum: ObservedPropertySimplePU<number>;
    get messageNum() {
        return this.__messageNum.get();
    }
    set messageNum(newValue: number) {
        this.__messageNum.set(newValue);
    }
    private __messageIndex: ObservedPropertySimplePU<number>;
    get messageIndex() {
        return this.__messageIndex.get();
    }
    set messageIndex(newValue: number) {
        this.__messageIndex.set(newValue);
    }
    //运动选择数组与运动选择(默认为第一个)
    private exerciseChoices: string[];
    private __curExerciseChoice: ObservedPropertySimplePU<string>;
    get curExerciseChoice() {
        return this.__curExerciseChoice.get();
    }
    set curExerciseChoice(newValue: string) {
        this.__curExerciseChoice.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //首页，搜索栏
            Row.create({ space: 20 });
            //首页，搜索栏
            Row.height('10%');
            //首页，搜索栏
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('运动');
            Text.fontSize(40);
            Text.padding({ left: 10 });
            Text.opacity(0.9);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //searchHeader()
            Search.create({ placeholder: '24式太极拳' });
            //searchHeader()
            Search.textFont({ size: 18 });
            //searchHeader()
            Search.opacity(0.7);
            //searchHeader()
            Search.searchButton('搜索');
            //searchHeader()
            Search.placeholderColor(Color.Black);
            //searchHeader()
            Search.backgroundColor('#ffffff');
            //searchHeader()
            Search.width('60%');
            //searchHeader()
            Search.fontColor(Color.Black);
            //searchHeader()
            Search.enableKeyboardOnFocus(false);
            //searchHeader()
            Search.searchIcon({ color: '#000000' });
        }, Search);
        //searchHeader()
        Search.pop();
        //首页，搜索栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //运动选择按钮
            List.create({ space: 20 });
            //运动选择按钮
            List.height('5%');
            //运动选择按钮
            List.width('90%');
            //运动选择按钮
            List.listDirection(Axis.Horizontal);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const exerciseChoice = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Button.createWithLabel(exerciseChoice);
                            Button.size({ width: 80 });
                            Button.fontColor(Color.Black);
                            Button.fontSize(20);
                            Button.opacity(0.7);
                            Button.fontWeight(600);
                            Button.fontColor(Color.Black);
                            Button.backgroundColor(this.curExerciseChoice == exerciseChoice ? { "id": 16777227, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" } : Color.White);
                            Button.onClick(() => {
                                this.curExerciseChoice = exerciseChoice;
                            });
                        }, Button);
                        Button.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation(itemCreation);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.exerciseChoices, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        //运动选择按钮
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.padding({ top: 10 });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            name: this.curExerciseChoice,
                            num: 23
                        };
                    };
                    ViewPU.create(new 
                    //运动数据卡片
                    ExerciseDataCard(this, { name: this.curExerciseChoice, num: 23 }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/view/ExercisePagePackage/trumpetPic.png');
            Image.objectFit(ImageFit.Fill);
            Image.height('60%');
            Image.interpolation(ImageInterpolation.Medium);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.remindMessage);
            Text.fontSize(20);
            Text.padding({ left: 10 });
            Text.opacity(0.9);
            Text.fontColor(Color.Black);
            Text.onClick(() => {
                this.messageIndex = this.messageIndex % this.messageNum;
                this.remindMessage = this.remindMessages[this.messageIndex];
                this.messageIndex++;
            });
        }, Text);
        Text.pop();
        //消息提示
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //打卡计划推荐+每日打卡领金币
            Row.create();
            //打卡计划推荐+每日打卡领金币
            Row.height('5%');
            //打卡计划推荐+每日打卡领金币
            Row.width('100%');
            //打卡计划推荐+每日打卡领金币
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('打卡计划推荐   ');
            Text.fontSize(25);
            Text.padding({ left: '5%' });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('每日打卡领金币');
            Text.fontSize(20);
            Text.opacity(0.6);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //打卡计划推荐+每日打卡领金币
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
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
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.padding({ left: 10 });
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
                            ViewPU.create(new exerciseRecommendCard(this, { index: 0 }, undefined, elmtId, paramsLambda));
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
                            ViewPU.create(new exerciseRecommendCard(this, { index: 1 }, undefined, elmtId, paramsLambda));
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
                            ViewPU.create(new exerciseRecommendCard(this, { index: 2 }, undefined, elmtId, paramsLambda));
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
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ExercisePage2(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
