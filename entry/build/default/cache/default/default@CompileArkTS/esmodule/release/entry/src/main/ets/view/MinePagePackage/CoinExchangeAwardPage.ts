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
    setInitiallyProvidedValue(a: CoinExchangeAwardPage_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
        if (a.user_coin_num !== undefined) {
            this.user_coin_num = a.user_coin_num;
        }
        if (a.user_choose_sum !== undefined) {
            this.user_choose_sum = a.user_choose_sum;
        }
    }
    updateStateVars(a: CoinExchangeAwardPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__message.purgeDependencyOnElmtId(a);
        this.__user_coin_num.purgeDependencyOnElmtId(a);
        this.__user_choose_sum.purgeDependencyOnElmtId(a);
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
    set message(a: string) {
        this.__message.set(a);
    }
    //用户当前金币数量
    private __user_coin_num: ObservedPropertySimplePU<number>;
    get user_coin_num() {
        return this.__user_coin_num.get();
    }
    set user_coin_num(a: number) {
        this.__user_coin_num.set(a);
    }
    //用户选择商品金币
    private __user_choose_sum: ObservedPropertySimplePU<number>;
    get user_choose_sum() {
        return this.__user_choose_sum.get();
    }
    set user_choose_sum(a: number) {
        this.__user_choose_sum.set(a);
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
            Text.create('金币换奖品');
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
            //我的金币 商品列表
            List.create({ space: 15 });
            //我的金币 商品列表
            List.width('90%');
            //我的金币 商品列表
            List.height('75%');
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
                    //我的金币文字
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
                    Row.height('10%');
                    Row.backgroundColor({ "id": 16777226, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
                    Row.borderRadius(20);
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('我的金币');
                    Text.fontSize(25);
                    Text.fontWeight(500);
                    Text.fontColor(Color.Black);
                    Text.margin({ left: '5%' });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create(this.user_coin_num + '');
                    Text.fontSize(40);
                    Text.fontWeight(500);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
                    Image.objectFit(ImageFit.Fill);
                    Image.height('40%');
                    Image.margin({ right: '5%' });
                }, Image);
                Row.pop();
                //我的金币文字
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //我的金币文字
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //商品列表
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
                }, Row);
                {
                    this.observeComponentCreation2((i, j) => {
                        if (j) {
                            let k = () => {
                                return {
                                    index: 0,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 0, user_choose_sum: this.__user_choose_sum }, undefined, i, k));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(i, {});
                        }
                    }, null);
                }
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((i, j) => {
                        if (j) {
                            let k = () => {
                                return {
                                    index: 1,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 1, user_choose_sum: this.__user_choose_sum }, undefined, i, k));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(i, {});
                        }
                    }, null);
                }
                Row.pop();
                //商品列表
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //商品列表
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //商品列表
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
                }, Row);
                {
                    this.observeComponentCreation2((i, j) => {
                        if (j) {
                            let k = () => {
                                return {
                                    index: 2,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 2, user_choose_sum: this.__user_choose_sum }, undefined, i, k));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(i, {});
                        }
                    }, null);
                }
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((i, j) => {
                        if (j) {
                            let k = () => {
                                return {
                                    index: 3,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 3, user_choose_sum: this.__user_choose_sum }, undefined, i, k));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(i, {});
                        }
                    }, null);
                }
                Row.pop();
                //商品列表
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //商品列表
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //商品列表
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
                }, Row);
                {
                    this.observeComponentCreation2((i, j) => {
                        if (j) {
                            let k = () => {
                                return {
                                    index: 4,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 4, user_choose_sum: this.__user_choose_sum }, undefined, i, k));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(i, {});
                        }
                    }, null);
                }
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((i, j) => {
                        if (j) {
                            let k = () => {
                                return {
                                    index: 5,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 5, user_choose_sum: this.__user_choose_sum }, undefined, i, k));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(i, {});
                        }
                    }, null);
                }
                Row.pop();
                //商品列表
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //商品列表
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //商品列表
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
                }, Row);
                {
                    this.observeComponentCreation2((i, j) => {
                        if (j) {
                            let k = () => {
                                return {
                                    index: 6,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 6, user_choose_sum: this.__user_choose_sum }, undefined, i, k));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(i, {});
                        }
                    }, null);
                }
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((i, j) => {
                        if (j) {
                            let k = () => {
                                return {
                                    index: 7,
                                    user_choose_sum: this.user_choose_sum
                                };
                            };
                            ViewPU.create(new AwardCard(this, { index: 7, user_choose_sum: this.__user_choose_sum }, undefined, i, k));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(i, {});
                        }
                    }, null);
                }
                Row.pop();
                //商品列表
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //商品列表
            ListItem.pop();
        }
        //我的金币 商品列表
        List.pop();
        this.observeComponentCreation2((b, c) => {
            //底部总计页面
            Column.create();
            //底部总计页面
            Column.backgroundImage('/view/MinePagePackage/background_tol_pic.png');
            //底部总计页面
            Column.backgroundImageSize({ width: '100%', height: '100%' });
            //底部总计页面
            Column.width('100%');
            //底部总计页面
            Column.height('15%');
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Row.create();
            Row.width('90%');
            Row.margin({ top: '4%' });
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create(`总计   ${this.user_choose_sum}`);
            Text.fontSize(30);
            Text.fontWeight(500);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.objectFit(ImageFit.Fill);
            Image.height('20%');
            Image.margin({ left: '5%' });
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            Button.createWithLabel('兑换');
            Button.backgroundColor({ "id": 16777226, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
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
