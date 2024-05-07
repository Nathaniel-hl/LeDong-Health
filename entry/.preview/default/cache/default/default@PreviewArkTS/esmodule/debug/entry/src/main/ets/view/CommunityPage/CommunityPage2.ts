interface CommunityPage2_Params {
    message?: string;
}
import bottomChooser from "@bundle:com.example.wutsport/entry/ets/bottomChooser";
import postCard from "@bundle:com.example.wutsport/entry/ets/view/CommunityPage/postCard";
import router from "@ohos:router";
//文字统一样式
function __Text__textPattern(): void {
    Text.fontSize(25);
    Text.fontWeight(400);
}
class CommunityPage2 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: CommunityPage2_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: CommunityPage2_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/CommunityPage/CommunityPage2.ets(17:5)");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //顶部title和返回按钮
            Row.create();
            Row.debugLine("view/CommunityPage/CommunityPage2.ets(19:7)");
            //顶部title和返回按钮
            Row.width('100%');
            //顶部title和返回按钮
            Row.backgroundColor(Color.White);
            //顶部title和返回按钮
            Row.height('10%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('<');
            Text.debugLine("view/CommunityPage/CommunityPage2.ets(20:9)");
            Text.fontSize(50);
            Text.fontColor(Color.Black);
            Text.onClick(() => {
                router.back();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/CommunityPage/CommunityPage2.ets(26:9)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('社区');
            Text.debugLine("view/CommunityPage/CommunityPage2.ets(27:9)");
            Text.fontSize(30);
            Text.fontWeight(400);
            Text.fontColor(Color.Black);
            Text.padding({ right: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/CommunityPage/CommunityPage2.ets(32:9)");
        }, Blank);
        Blank.pop();
        //顶部title和返回按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //中间帖子展示页面
            List.create({ space: 10 });
            List.debugLine("view/CommunityPage/CommunityPage2.ets(40:7)");
            //中间帖子展示页面
            List.width('90%');
            //中间帖子展示页面
            List.height('77%');
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage2.ets(43:9)");
                if (!isInitialRender) {
                    //社区圈子+去发帖文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/CommunityPage/CommunityPage2.ets(44:11)");
                    Row.width('100%');
                    Row.margin({ top: 10 });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('社区圈子');
                    Text.debugLine("view/CommunityPage/CommunityPage2.ets(45:13)");
                    __Text__textPattern();
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/CommunityPage/CommunityPage2.ets(49:13)");
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('去发帖');
                    Text.debugLine("view/CommunityPage/CommunityPage2.ets(51:13)");
                    __Text__textPattern();
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //社区圈子+去发帖文字
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //社区圈子+去发帖文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage2.ets(60:9)");
                if (!isInitialRender) {
                    //我的爱好群
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/CommunityPage/CommunityPage2.ets(61:11)");
                    Row.width('100%');
                    Row.backgroundColor(Color.White);
                    Row.borderRadius(20);
                    Row.height('10%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('/view/CommunityPage/group_PIc.png');
                    Image.debugLine("view/CommunityPage/CommunityPage2.ets(62:13)");
                    Image.objectFit(ImageFit.Fill);
                    Image.width(40);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('我的爱好群');
                    Text.debugLine("view/CommunityPage/CommunityPage2.ets(66:13)");
                    __Text__textPattern();
                    Text.margin({ left: 10 });
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/CommunityPage/CommunityPage2.ets(71:13)");
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('>');
                    Text.debugLine("view/CommunityPage/CommunityPage2.ets(73:13)");
                    Text.fontSize(40);
                    Text.fontWeight(600);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //我的爱好群
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //我的爱好群
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage2.ets(85:9)");
                if (!isInitialRender) {
                    //推文
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
                            ViewPU.create(new postCard(this, { index: 0 }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                //推文
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //推文
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage2.ets(89:9)");
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
                                    index: 1,
                                    isFollowed: false
                                };
                            };
                            ViewPU.create(new postCard(this, { index: 1, isFollowed: false }, undefined, elmtId, paramsLambda));
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
                ListItem.debugLine("view/CommunityPage/CommunityPage2.ets(93:9)");
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
                            ViewPU.create(new postCard(this, { index: 2 }, undefined, elmtId, paramsLambda));
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
        //中间帖子展示页面
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //底部页面跳转
            Blank.create();
            Blank.debugLine("view/CommunityPage/CommunityPage2.ets(100:7)");
        }, Blank);
        //底部页面跳转
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            isCommunityPage: true
                        };
                    };
                    ViewPU.create(new bottomChooser(this, { isCommunityPage: true }, undefined, elmtId, paramsLambda));
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
loadDocument(new CommunityPage2(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
