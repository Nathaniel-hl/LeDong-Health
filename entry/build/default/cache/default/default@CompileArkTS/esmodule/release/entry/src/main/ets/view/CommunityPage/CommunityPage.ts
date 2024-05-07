interface CommunityPage_Params {
    message?: string;
    user_community_name?: string;
}
import bottomChooser from "@bundle:com.example.wutsport/entry/ets/bottomChooser";
import CommunityServiceCard from "@bundle:com.example.wutsport/entry/ets/view/CommunityPage/CommunityServiceCard";
import router from "@ohos:router";
class CommunityPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__user_community_name = new ObservedPropertySimplePU('智慧社区', this, "user_community_name");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(a: CommunityPage_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
        if (a.user_community_name !== undefined) {
            this.user_community_name = a.user_community_name;
        }
    }
    updateStateVars(a: CommunityPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__message.purgeDependencyOnElmtId(a);
        this.__user_community_name.purgeDependencyOnElmtId(a);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__user_community_name.aboutToBeDeleted();
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
    private __user_community_name: ObservedPropertySimplePU<string>;
    get user_community_name() {
        return this.__user_community_name.get();
    }
    set user_community_name(a: string) {
        this.__user_community_name.set(a);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //list容器用于页面滑动
            List.create({ space: 10 });
            //list容器用于页面滑动
            List.width('100%');
            //list容器用于页面滑动
            List.height('85%');
            //list容器用于页面滑动
            List.alignListItem(ListItemAlign.Center);
        }, List);
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
                this.observeComponentCreation2((h, i) => {
                    Column.create();
                }, Column);
                this.observeComponentCreation2((h, i) => {
                    Blank.create(30);
                }, Blank);
                Blank.pop();
                Column.pop();
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
                    //显示社区名称
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Column.create();
                    Column.width('90%');
                    Column.padding({ left: '5%' });
                    Column.backgroundColor(Color.White);
                    Column.borderRadius(20);
                }, Column);
                this.observeComponentCreation2((h, i) => {
                    Row.create();
                    Row.alignItems(VerticalAlign.Bottom);
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('社区  ');
                    Text.fontSize(30);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Image.create('/view/CommunityPage/GPS_Pic.png');
                    Image.objectFit(ImageFit.Fill);
                    Image.size({ width: 20, height: 25 });
                }, Image);
                this.observeComponentCreation2((h, i) => {
                    Text.create(' 切换');
                    Text.fontSize(20);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((h, i) => {
                    Row.create();
                    Row.alignItems(VerticalAlign.Bottom);
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('我的社区');
                    Text.fontSize(20);
                    Text.margin({ right: '10%' });
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create(this.user_community_name);
                    Text.fontSize(40);
                    Text.fontWeight(600);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                Column.pop();
                //显示社区名称
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //显示社区名称
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //社区活动预告文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Row.create();
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('社区活动预告');
                    Text.fontSize(25);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //社区活动预告文字
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //社区活动预告文字
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //社区活动预告图片
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Image.create('/view/CommunityPage/temp_activity.png');
                    Image.interpolation(ImageInterpolation.High);
                    Image.onClick(() => {
                        router.pushUrl({ url: "view/CommunityPage/CommunityPage2" });
                    });
                }, Image);
                //社区活动预告图片
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //社区活动预告图片
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //我的预约文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Row.create();
                    Row.width('90%');
                    Row.backgroundColor(Color.White);
                    Row.borderRadius(20);
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    //喇叭图标
                    Image.create('/view/ExercisePagePackage/trumpetPic.png');
                    //喇叭图标
                    Image.objectFit(ImageFit.Fill);
                    //喇叭图标
                    Image.height('30');
                    //喇叭图标
                    Image.interpolation(ImageInterpolation.Medium);
                }, Image);
                this.observeComponentCreation2((h, i) => {
                    //我的预约文字
                    Text.create('   我的预约');
                    //我的预约文字
                    Text.fontSize(20);
                    //我的预约文字
                    Text.fontColor(Color.Black);
                }, Text);
                //我的预约文字
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((h, i) => {
                    //跳转文字
                    Text.create('>');
                    //跳转文字
                    Text.fontSize(30);
                    //跳转文字
                    Text.opacity(0.7);
                    //跳转文字
                    Text.fontColor(Color.Black);
                }, Text);
                //跳转文字
                Text.pop();
                Row.pop();
                //我的预约文字
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //我的预约文字
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //社区服务文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    Row.create();
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('社区服务');
                    Text.fontSize(25);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //社区服务文字
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //社区服务文字
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //社区服务图标
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const c = (e, f) => {
                b(e, f);
                this.updateFuncByElmtId.set(e, b);
                this.observeComponentCreation2((h, i) => {
                    List.create({ space: 15 });
                    List.listDirection(Axis.Horizontal);
                }, List);
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
                        {
                            this.observeComponentCreation2((n, o) => {
                                if (o) {
                                    let p = () => {
                                        return {
                                            index: 0
                                        };
                                    };
                                    ViewPU.create(new CommunityServiceCard(this, { index: 0 }, undefined, n, p));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(n, {});
                                }
                            }, null);
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation(h);
                    ListItem.pop();
                }
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
                        {
                            this.observeComponentCreation2((n, o) => {
                                if (o) {
                                    let p = () => {
                                        return {
                                            index: 1
                                        };
                                    };
                                    ViewPU.create(new CommunityServiceCard(this, { index: 1 }, undefined, n, p));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(n, {});
                                }
                            }, null);
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation(h);
                    ListItem.pop();
                }
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
                        {
                            this.observeComponentCreation2((n, o) => {
                                if (o) {
                                    let p = () => {
                                        return {
                                            index: 2
                                        };
                                    };
                                    ViewPU.create(new CommunityServiceCard(this, { index: 2 }, undefined, n, p));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(n, {});
                                }
                            }, null);
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation(h);
                    ListItem.pop();
                }
                List.pop();
                //社区服务图标
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //社区服务图标
            ListItem.pop();
        }
        //list容器用于页面滑动
        List.pop();
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            isCommunityPage: true
                        };
                    };
                    ViewPU.create(new 
                    //底部页面跳转
                    bottomChooser(this, { isCommunityPage: true }, undefined, c, e));
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
loadDocument(new CommunityPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
