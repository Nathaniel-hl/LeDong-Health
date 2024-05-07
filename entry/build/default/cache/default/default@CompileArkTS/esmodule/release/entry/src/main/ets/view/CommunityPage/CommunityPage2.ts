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
    setInitiallyProvidedValue(a: CommunityPage2_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
    }
    updateStateVars(a: CommunityPage2_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__message.purgeDependencyOnElmtId(a);
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
    set message(a: string) {
        this.__message.set(a);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //顶部title和返回按钮
            Row.create();
            //顶部title和返回按钮
            Row.width('100%');
            //顶部title和返回按钮
            Row.backgroundColor(Color.White);
            //顶部title和返回按钮
            Row.height('10%');
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('<');
            Text.fontSize(50);
            Text.fontColor(Color.Black);
            Text.onClick(() => {
                router.back();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create('社区');
            Text.fontSize(30);
            Text.fontWeight(400);
            Text.fontColor(Color.Black);
            Text.padding({ right: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        //顶部title和返回按钮
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //中间帖子展示页面
            List.create({ space: 10 });
            //中间帖子展示页面
            List.width('90%');
            //中间帖子展示页面
            List.height('77%');
        }, List);
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //社区圈子+去发帖文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Row.create();
                    Row.width('100%');
                    Row.margin({ top: 10 });
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('社区圈子');
                    __Text__textPattern();
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create('去发帖');
                    __Text__textPattern();
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //社区圈子+去发帖文字
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //社区圈子+去发帖文字
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //我的爱好群
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Row.create();
                    Row.width('100%');
                    Row.backgroundColor(Color.White);
                    Row.borderRadius(20);
                    Row.height('10%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Image.create('/view/CommunityPage/group_PIc.png');
                    Image.objectFit(ImageFit.Fill);
                    Image.width(40);
                }, Image);
                this.observeComponentCreation2((h, i) => {
                    Text.create('我的爱好群');
                    __Text__textPattern();
                    Text.margin({ left: 10 });
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create('>');
                    Text.fontSize(40);
                    Text.fontWeight(600);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //我的爱好群
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //我的爱好群
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //推文
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
                            ViewPU.create(new postCard(this, { index: 0 }, undefined, h, j));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(h, {});
                        }
                    }, null);
                }
                //推文
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //推文
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
                                    index: 1,
                                    isFollowed: false
                                };
                            };
                            ViewPU.create(new postCard(this, { index: 1, isFollowed: false }, undefined, h, j));
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
                            ViewPU.create(new postCard(this, { index: 2 }, undefined, h, j));
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
        //中间帖子展示页面
        List.pop();
        this.observeComponentCreation2((b, c) => {
            //底部页面跳转
            Blank.create();
        }, Blank);
        //底部页面跳转
        Blank.pop();
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            isCommunityPage: true
                        };
                    };
                    ViewPU.create(new bottomChooser(this, { isCommunityPage: true }, undefined, c, e));
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
loadDocument(new CommunityPage2(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
