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
    setInitiallyProvidedValue(params: CommunityPage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.user_community_name !== undefined) {
            this.user_community_name = params.user_community_name;
        }
    }
    updateStateVars(params: CommunityPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__user_community_name.purgeDependencyOnElmtId(rmElmtId);
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
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    private __user_community_name: ObservedPropertySimplePU<string>;
    get user_community_name() {
        return this.__user_community_name.get();
    }
    set user_community_name(newValue: string) {
        this.__user_community_name.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/CommunityPage/CommunityPage.ets(11:5)");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //list容器用于页面滑动
            List.create({ space: 10 });
            List.debugLine("view/CommunityPage/CommunityPage.ets(13:7)");
            //list容器用于页面滑动
            List.width('100%');
            //list容器用于页面滑动
            List.height('85%');
            //list容器用于页面滑动
            List.alignListItem(ListItemAlign.Center);
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage.ets(15:9)");
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("view/CommunityPage/CommunityPage.ets(16:11)");
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create(30);
                    Blank.debugLine("view/CommunityPage/CommunityPage.ets(17:13)");
                }, Blank);
                Blank.pop();
                Column.pop();
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage.ets(22:9)");
                if (!isInitialRender) {
                    //显示社区名称
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("view/CommunityPage/CommunityPage.ets(23:11)");
                    Column.width('90%');
                    Column.padding({ left: '5%' });
                    Column.backgroundColor(Color.White);
                    Column.borderRadius(20);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/CommunityPage/CommunityPage.ets(24:13)");
                    Row.alignItems(VerticalAlign.Bottom);
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('社区  ');
                    Text.debugLine("view/CommunityPage/CommunityPage.ets(25:15)");
                    Text.fontSize(30);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('/view/CommunityPage/GPS_Pic.png');
                    Image.debugLine("view/CommunityPage/CommunityPage.ets(29:15)");
                    Image.objectFit(ImageFit.Fill);
                    Image.size({ width: 20, height: 25 });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(' 切换');
                    Text.debugLine("view/CommunityPage/CommunityPage.ets(32:15)");
                    Text.fontSize(20);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/CommunityPage/CommunityPage.ets(39:13)");
                    Row.alignItems(VerticalAlign.Bottom);
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('我的社区');
                    Text.debugLine("view/CommunityPage/CommunityPage.ets(40:15)");
                    Text.fontSize(20);
                    Text.margin({ right: '10%' });
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.user_community_name);
                    Text.debugLine("view/CommunityPage/CommunityPage.ets(44:15)");
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
            this.observeComponentCreation(itemCreation);
            //显示社区名称
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage.ets(59:9)");
                if (!isInitialRender) {
                    //社区活动预告文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/CommunityPage/CommunityPage.ets(60:11)");
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('社区活动预告');
                    Text.debugLine("view/CommunityPage/CommunityPage.ets(61:13)");
                    Text.fontSize(25);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //社区活动预告文字
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //社区活动预告文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage.ets(69:9)");
                if (!isInitialRender) {
                    //社区活动预告图片
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('/view/CommunityPage/temp_activity.png');
                    Image.debugLine("view/CommunityPage/CommunityPage.ets(70:11)");
                    Image.interpolation(ImageInterpolation.High);
                    Image.onClick(() => {
                        router.pushUrl({ url: "view/CommunityPage/CommunityPage2" });
                    });
                }, Image);
                //社区活动预告图片
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //社区活动预告图片
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage.ets(78:9)");
                if (!isInitialRender) {
                    //我的预约文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/CommunityPage/CommunityPage.ets(79:11)");
                    Row.width('90%');
                    Row.backgroundColor(Color.White);
                    Row.borderRadius(20);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    //喇叭图标
                    Image.create('/view/ExercisePagePackage/trumpetPic.png');
                    Image.debugLine("view/CommunityPage/CommunityPage.ets(81:13)");
                    //喇叭图标
                    Image.objectFit(ImageFit.Fill);
                    //喇叭图标
                    Image.height('30');
                    //喇叭图标
                    Image.interpolation(ImageInterpolation.Medium);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    //我的预约文字
                    Text.create('   我的预约');
                    Text.debugLine("view/CommunityPage/CommunityPage.ets(87:13)");
                    //我的预约文字
                    Text.fontSize(20);
                    //我的预约文字
                    Text.fontColor(Color.Black);
                }, Text);
                //我的预约文字
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/CommunityPage/CommunityPage.ets(91:13)");
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    //跳转文字
                    Text.create('>');
                    Text.debugLine("view/CommunityPage/CommunityPage.ets(94:13)");
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
            this.observeComponentCreation(itemCreation);
            //我的预约文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage.ets(106:9)");
                if (!isInitialRender) {
                    //社区服务文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/CommunityPage/CommunityPage.ets(107:11)");
                    Row.width('90%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('社区服务');
                    Text.debugLine("view/CommunityPage/CommunityPage.ets(108:13)");
                    Text.fontSize(25);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                //社区服务文字
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //社区服务文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/CommunityPage/CommunityPage.ets(116:9)");
                if (!isInitialRender) {
                    //社区服务图标
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    List.create({ space: 15 });
                    List.debugLine("view/CommunityPage/CommunityPage.ets(117:11)");
                    List.listDirection(Axis.Horizontal);
                }, List);
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("view/CommunityPage/CommunityPage.ets(118:13)");
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
                                    ViewPU.create(new CommunityServiceCard(this, { index: 0 }, undefined, elmtId, paramsLambda));
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
                        ListItem.debugLine("view/CommunityPage/CommunityPage.ets(121:13)");
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
                                    ViewPU.create(new CommunityServiceCard(this, { index: 1 }, undefined, elmtId, paramsLambda));
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
                        ListItem.debugLine("view/CommunityPage/CommunityPage.ets(124:13)");
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
                                    ViewPU.create(new CommunityServiceCard(this, { index: 2 }, undefined, elmtId, paramsLambda));
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
                List.pop();
                //社区服务图标
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //社区服务图标
            ListItem.pop();
        }
        //list容器用于页面滑动
        List.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            isCommunityPage: true
                        };
                    };
                    ViewPU.create(new 
                    //底部页面跳转
                    bottomChooser(this, { isCommunityPage: true }, undefined, elmtId, paramsLambda));
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
loadDocument(new CommunityPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
