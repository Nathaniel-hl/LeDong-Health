interface MinePage_Params {
    message?: string;
    user_name?: string;
    user_signature?: string;
    user_fans_num?: number;
    user_concerns_num?: number;
    user_posts_num?: number;
    user_coin_num?: number;
}
import bottomChooser from "@bundle:com.example.wutsport/entry/ets/bottomChooser";
import interestCard from "@bundle:com.example.wutsport/entry/ets/view/MinePagePackage/interestCard";
import router from "@ohos:router";
class MinePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__user_name = new ObservedPropertySimplePU('李华', this, "user_name");
        this.__user_signature = new ObservedPropertySimplePU('健康生活每一天', this, "user_signature");
        this.__user_fans_num = new ObservedPropertySimplePU(20, this, "user_fans_num");
        this.__user_concerns_num = new ObservedPropertySimplePU(25, this, "user_concerns_num");
        this.__user_posts_num = new ObservedPropertySimplePU(15, this, "user_posts_num");
        this.__user_coin_num = new ObservedPropertySimplePU(18, this, "user_coin_num");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(a: MinePage_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
        if (a.user_name !== undefined) {
            this.user_name = a.user_name;
        }
        if (a.user_signature !== undefined) {
            this.user_signature = a.user_signature;
        }
        if (a.user_fans_num !== undefined) {
            this.user_fans_num = a.user_fans_num;
        }
        if (a.user_concerns_num !== undefined) {
            this.user_concerns_num = a.user_concerns_num;
        }
        if (a.user_posts_num !== undefined) {
            this.user_posts_num = a.user_posts_num;
        }
        if (a.user_coin_num !== undefined) {
            this.user_coin_num = a.user_coin_num;
        }
    }
    updateStateVars(a: MinePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__message.purgeDependencyOnElmtId(a);
        this.__user_name.purgeDependencyOnElmtId(a);
        this.__user_signature.purgeDependencyOnElmtId(a);
        this.__user_fans_num.purgeDependencyOnElmtId(a);
        this.__user_concerns_num.purgeDependencyOnElmtId(a);
        this.__user_posts_num.purgeDependencyOnElmtId(a);
        this.__user_coin_num.purgeDependencyOnElmtId(a);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__user_name.aboutToBeDeleted();
        this.__user_signature.aboutToBeDeleted();
        this.__user_fans_num.aboutToBeDeleted();
        this.__user_concerns_num.aboutToBeDeleted();
        this.__user_posts_num.aboutToBeDeleted();
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
    private __user_name: ObservedPropertySimplePU<string>;
    get user_name() {
        return this.__user_name.get();
    }
    set user_name(a: string) {
        this.__user_name.set(a);
    }
    private __user_signature: ObservedPropertySimplePU<string>;
    get user_signature() {
        return this.__user_signature.get();
    }
    set user_signature(a: string) {
        this.__user_signature.set(a);
    }
    private __user_fans_num: ObservedPropertySimplePU<number>;
    get user_fans_num() {
        return this.__user_fans_num.get();
    }
    set user_fans_num(a: number) {
        this.__user_fans_num.set(a);
    }
    private __user_concerns_num: ObservedPropertySimplePU<number>;
    get user_concerns_num() {
        return this.__user_concerns_num.get();
    }
    set user_concerns_num(a: number) {
        this.__user_concerns_num.set(a);
    }
    private __user_posts_num: ObservedPropertySimplePU<number>;
    get user_posts_num() {
        return this.__user_posts_num.get();
    }
    set user_posts_num(a: number) {
        this.__user_posts_num.set(a);
    }
    private __user_coin_num: ObservedPropertySimplePU<number>;
    get user_coin_num() {
        return this.__user_coin_num.get();
    }
    set user_coin_num(a: number) {
        this.__user_coin_num.set(a);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //顶部图案
            Stack.create();
            //顶部图案
            Stack.width('100%');
            //顶部图案
            Stack.height('20%');
        }, Stack);
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777265, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.layoutWeight(0);
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777266, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.position({ y: -30, x: 10 });
            Image.objectFit(ImageFit.Fill);
            Image.size({ height: '250%', width: '100%' });
        }, Image);
        //顶部图案
        Stack.pop();
        this.observeComponentCreation2((b, c) => {
            //中部内容
            Column.create();
            //中部内容
            Column.height('65%');
            //中部内容
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            //中部内容
            Column.width('100%');
            //中部内容
            Column.justifyContent(FlexAlign.SpaceBetween);
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //个人展示方块
            Column.create();
            //个人展示方块
            Column.backgroundColor(Color.White);
            //个人展示方块
            Column.borderRadius(20);
            //个人展示方块
            Column.height('30%');
            //个人展示方块
            Column.width('90%');
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((b, c) => {
            //头像
            Image.create({ "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            //头像
            Image.borderRadius(20);
            //头像
            Image.objectFit(ImageFit.Fill);
            //头像
            Image.size({ height: '80%', width: '30%' });
            //头像
            Image.position({ y: -40, x: -80 });
            //头像
            Image.interpolation(ImageInterpolation.Medium);
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Blank.create(30);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            //名称+个性签名
            Column.create();
        }, Column);
        this.observeComponentCreation2((b, c) => {
            Text.create(this.user_name);
            Text.fontSize(30);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create('20%');
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create(this.user_signature);
            Text.fontSize(20);
            Text.opacity(0.7);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //名称+个性签名
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create(`粉丝${this.user_fans_num}  关注${this.user_concerns_num}  发帖${this.user_posts_num}`);
            Text.padding({ top: '10%' });
            Text.fontSize(25);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //个人展示方块
        Column.pop();
        this.observeComponentCreation2((b, c) => {
            //兴趣栏
            Column.create();
            //兴趣栏
            Column.height('15%');
            //兴趣栏
            Column.width('90%');
            //兴趣栏
            Column.backgroundColor(Color.White);
            //兴趣栏
            Column.borderRadius(20);
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //兴趣栏文字
            Text.create('兴趣栏');
            //兴趣栏文字
            Text.fontColor(Color.Black);
        }, Text);
        //兴趣栏文字
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            //兴趣卡片
            Row.create();
            //兴趣卡片
            Row.justifyContent(FlexAlign.SpaceEvenly);
            //兴趣卡片
            Row.width('100%');
        }, Row);
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            index: 0,
                            name: '跑步'
                        };
                    };
                    ViewPU.create(new interestCard(this, { index: 0, name: '跑步' }, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
                }
            }, null);
        }
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            index: 1,
                            name: '骑行'
                        };
                    };
                    ViewPU.create(new interestCard(this, { index: 1, name: '骑行' }, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
                }
            }, null);
        }
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            index: 2,
                            name: '游泳'
                        };
                    };
                    ViewPU.create(new interestCard(this, { index: 2, name: '游泳' }, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
                }
            }, null);
        }
        //兴趣卡片
        Row.pop();
        //兴趣栏
        Column.pop();
        this.observeComponentCreation2((b, c) => {
            //其他页面选项
            List.create();
            //其他页面选项
            List.height('50%');
            //其他页面选项
            List.backgroundColor(Color.White);
            //其他页面选项
            List.width('90%');
            //其他页面选项
            List.borderRadius(20);
        }, List);
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //金币换奖品选项
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
                    Row.create();
                    Row.width('100%');
                    Row.height('30%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('金币换奖品');
                    Text.fontSize(25);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create(`累计金币${this.user_coin_num}`);
                    Text.opacity(0.5);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create('>');
                    Text.fontSize(50);
                    Text.fontColor(Color.Black);
                    Text.onClick(() => {
                        router.pushUrl({ url: "view/MinePagePackage/CoinExchangeAwardPage" });
                    });
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((h, i) => {
                    Divider.create();
                    Divider.width('100%');
                }, Divider);
                Column.pop();
                //金币换奖品选项
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //金币换奖品选项
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //运动周月年报告跳转页面
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
                    Row.create();
                    Row.width('100%');
                    Row.height('30%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('运动周月年报告');
                    Text.fontColor(Color.Black);
                    Text.fontSize(25);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create('>');
                    Text.fontSize(50);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((h, i) => {
                    Divider.create();
                    Divider.width('100%');
                }, Divider);
                Column.pop();
                //运动周月年报告跳转页面
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //运动周月年报告跳转页面
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //客服帮助跳转页面
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
                    Row.create();
                    Row.width('100%');
                    Row.height('30%');
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('客服帮助');
                    Text.fontSize(25);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create('>');
                    Text.fontSize(50);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((h, i) => {
                    Divider.create();
                    Divider.width('100%');
                }, Divider);
                Column.pop();
                //客服帮助跳转页面
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //客服帮助跳转页面
            ListItem.pop();
        }
        {
            const b = (e, f) => {
                ViewStackProcessor.StartGetAccessRecordingFor(e);
                ListItem.create(c, true);
                if (!f) {
                    //问卷调查页面
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
                    Row.create();
                    Row.width('100%');
                    Row.height('30%');
                    Row.onClick(() => {
                        router.pushUrl({
                            url: 'view/MinePagePackage/Survey'
                        });
                    });
                }, Row);
                this.observeComponentCreation2((h, i) => {
                    Text.create('问卷调查');
                    Text.fontSize(25);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((h, i) => {
                    Blank.create();
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((h, i) => {
                    Text.create('>');
                    Text.fontSize(50);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((h, i) => {
                    Divider.create();
                    Divider.width('100%');
                }, Divider);
                Column.pop();
                //问卷调查页面
                ListItem.pop();
            };
            this.observeComponentCreation(b);
            //问卷调查页面
            ListItem.pop();
        }
        //其他页面选项
        List.pop();
        //中部内容
        Column.pop();
        this.observeComponentCreation2((b, c) => {
            //底部切换页面选择
            Blank.create();
        }, Blank);
        //底部切换页面选择
        Blank.pop();
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            isMinePage: true
                        };
                    };
                    ViewPU.create(new bottomChooser(this, { isMinePage: true }, undefined, c, e));
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
loadDocument(new MinePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
