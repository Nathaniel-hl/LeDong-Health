interface CoinExchangeAwardPage_Params {
    message?: string;
    user_coin_num?: number;
    user_choose_sum?: number;
}
import router from "@ohos:router";
import AwardCard from "@bundle:com.example.wutsport/entry/ets/view/MinePagePackage/AwardCard";
class CoinExchangeAwardPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World'
        //用户当前金币数量
        , this, "message");
        this.__user_coin_num = new ObservedPropertySimplePU(118
        //用户选择商品金币
        , this, "user_coin_num");
        this.__user_choose_sum = new ObservedPropertySimplePU(0, this, "user_choose_sum");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: CoinExchangeAwardPage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.user_coin_num !== undefined) {
            this.user_coin_num = params.user_coin_num;
        }
        if (params.user_choose_sum !== undefined) {
            this.user_choose_sum = params.user_choose_sum;
        }
    }
    updateStateVars(params: CoinExchangeAwardPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__user_coin_num.purgeDependencyOnElmtId(rmElmtId);
        this.__user_choose_sum.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__user_coin_num.aboutToBeDeleted();
        this.__user_choose_sum.aboutToBeDeleted();
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
    //用户当前金币数量
    private __user_coin_num: ObservedPropertySimplePU<number>;
    get user_coin_num() {
        return this.__user_coin_num.get();
    }
    set user_coin_num(newValue: number) {
        this.__user_coin_num.set(newValue);
    }
    //用户选择商品金币
    private __user_choose_sum: ObservedPropertySimplePU<number>;
    get user_choose_sum() {
        return this.__user_choose_sum.get();
    }
    set user_choose_sum(newValue: number) {
        this.__user_choose_sum.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(12:5)");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //顶部title和返回按钮
            Row.create();
            Row.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(14:7)");
            //顶部title和返回按钮
            Row.width('100%');
            //顶部title和返回按钮
            Row.backgroundColor(Color.White);
            //顶部title和返回按钮
            Row.height('10%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('<');
            Text.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(15:9)");
            Text.fontSize(50);
            Text.fontColor(Color.Black);
            Text.onClick(() => {
                router.back();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(21:9)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('金币换奖品');
            Text.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(22:9)");
            Text.fontSize(30);
            Text.fontWeight(400);
            Text.fontColor(Color.Black);
            Text.padding({ right: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(27:9)");
        }, Blank);
        Blank.pop();
        //顶部title和返回按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //我的金币 商品列表
            List.create({ space: 15 });
            List.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(35:7)");
            //我的金币 商品列表
            List.width('90%');
            //我的金币 商品列表
            List.height('75%');
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(36:9)");
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(39:9)");
                if (!isInitialRender) {
                    //我的金币文字
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(40:11)");
                    Row.width('100%');
                    Row.height('10%');
                    Row.backgroundColor({ "id": 16777221, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
                    Row.borderRadius(20);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('我的金币');
                    Text.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(41:13)");
                    Text.fontSize(25);
                    Text.fontWeight(500);
                    Text.fontColor(Color.Black);
                    Text.margin({ left: '5%' });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(47:13)");
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.user_coin_num + '');
                    Text.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(49:13)");
                    Text.fontSize(40);
                    Text.fontWeight(500);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
                    Image.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(54:13)");
                    Image.objectFit(ImageFit.Fill);
                    Image.height('40%');
                    Image.margin({ right: '5%' });
                }, Image);
                Row.pop();
                //我的金币文字
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //我的金币文字
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(66:9)");
                if (!isInitialRender) {
                    //商品列表
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(67:11)");
                    Row.width('100%');
                }, Row);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    index: 0,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 0, user_choose_sum: this.__user_choose_sum }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(70:13)");
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    index: 1,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 1, user_choose_sum: this.__user_choose_sum }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                Row.pop();
                //商品列表
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //商品列表
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(77:9)");
                if (!isInitialRender) {
                    //商品列表
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(78:11)");
                    Row.width('100%');
                }, Row);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    index: 2,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 2, user_choose_sum: this.__user_choose_sum }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(81:13)");
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    index: 3,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 3, user_choose_sum: this.__user_choose_sum }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                Row.pop();
                //商品列表
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //商品列表
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(88:9)");
                if (!isInitialRender) {
                    //商品列表
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(89:11)");
                    Row.width('100%');
                }, Row);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    index: 4,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 4, user_choose_sum: this.__user_choose_sum }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(92:13)");
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    index: 5,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 5, user_choose_sum: this.__user_choose_sum }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                Row.pop();
                //商品列表
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //商品列表
            ListItem.pop();
        }
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, true);
                ListItem.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(99:9)");
                if (!isInitialRender) {
                    //商品列表
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(100:11)");
                    Row.width('100%');
                }, Row);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    index: 6,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 6, user_choose_sum: this.__user_choose_sum }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(103:13)");
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let paramsLambda = () => {
                                return {
                                    index: 7,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 7, user_choose_sum: this.__user_choose_sum }, undefined, elmtId, paramsLambda));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, null);
                }
                Row.pop();
                //商品列表
                ListItem.pop();
            };
            this.observeComponentCreation(itemCreation);
            //商品列表
            ListItem.pop();
        }
        //我的金币 商品列表
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //底部总计页面
            Column.create();
            Column.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(114:7)");
            //底部总计页面
            Column.backgroundImage('/view/MinePagePackage/background_tol_pic.png');
            //底部总计页面
            Column.backgroundImageSize({ width: '100%', height: '100%' });
            //底部总计页面
            Column.width('100%');
            //底部总计页面
            Column.height('15%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(115:9)");
            Row.width('90%');
            Row.margin({ top: '4%' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`总计   ${this.user_choose_sum}`);
            Text.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(116:11)");
            Text.fontSize(30);
            Text.fontWeight(500);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(121:11)");
            Image.objectFit(ImageFit.Fill);
            Image.height('20%');
            Image.margin({ left: '5%' });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(126:11)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('兑换');
            Button.debugLine("view/MinePagePackage/CoinExchangeAwardPage.ets(128:11)");
            Button.backgroundColor({ "id": 16777221, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Button.fontColor(Color.Black);
        }, Button);
        Button.pop();
        Row.pop();
        //底部总计页面
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new CoinExchangeAwardPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
