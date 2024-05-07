interface LoginPage_register_Params {
    message?: string;
    countDown?: number;
    //定时器序号
    intervalId?: number;
    getCodeButtonText?: String;
    getCodeButtonEnabled?: boolean;
}
class LoginPage_register extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World'
        //倒计时初始值
        , this, "message");
        this.__countDown = new ObservedPropertySimplePU(10
        //定时器序号
        , this, "countDown");
        this.intervalId = 0;
        this.__getCodeButtonText = new ObservedPropertyObjectPU('获取验证码'
        //按钮是否可用状态
        , this, "getCodeButtonText");
        this.__getCodeButtonEnabled = new ObservedPropertySimplePU(true, this, "getCodeButtonEnabled");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: LoginPage_register_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.countDown !== undefined) {
            this.countDown = params.countDown;
        }
        if (params.intervalId !== undefined) {
            this.intervalId = params.intervalId;
        }
        if (params.getCodeButtonText !== undefined) {
            this.getCodeButtonText = params.getCodeButtonText;
        }
        if (params.getCodeButtonEnabled !== undefined) {
            this.getCodeButtonEnabled = params.getCodeButtonEnabled;
        }
    }
    updateStateVars(params: LoginPage_register_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__countDown.purgeDependencyOnElmtId(rmElmtId);
        this.__getCodeButtonText.purgeDependencyOnElmtId(rmElmtId);
        this.__getCodeButtonEnabled.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__countDown.aboutToBeDeleted();
        this.__getCodeButtonText.aboutToBeDeleted();
        this.__getCodeButtonEnabled.aboutToBeDeleted();
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
    //倒计时初始值
    private __countDown: ObservedPropertySimplePU<number>;
    get countDown() {
        return this.__countDown.get();
    }
    set countDown(newValue: number) {
        this.__countDown.set(newValue);
    }
    //定时器序号
    private intervalId: number;
    //获取按钮文字
    private __getCodeButtonText: ObservedPropertyObjectPU<String>;
    get getCodeButtonText() {
        return this.__getCodeButtonText.get();
    }
    set getCodeButtonText(newValue: String) {
        this.__getCodeButtonText.set(newValue);
    }
    //按钮是否可用状态
    private __getCodeButtonEnabled: ObservedPropertySimplePU<boolean>;
    get getCodeButtonEnabled() {
        return this.__getCodeButtonEnabled.get();
    }
    set getCodeButtonEnabled(newValue: boolean) {
        this.__getCodeButtonEnabled.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.debugLine("view/LoginPagePackage/LoginPage_register.ets(15:5)");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //登录文字
            Text.create('登录');
            Text.debugLine("view/LoginPagePackage/LoginPage_register.ets(17:7)");
            //登录文字
            Text.fontSize(50);
            //登录文字
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        //登录文字
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("view/LoginPagePackage/LoginPage_register.ets(20:7)");
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //输入手机号码
            TextInput.create({ placeholder: '请输入手机号码:' });
            TextInput.debugLine("view/LoginPagePackage/LoginPage_register.ets(23:7)");
            //输入手机号码
            TextInput.width('80%');
            //输入手机号码
            TextInput.type(InputType.Number);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //输入验证码和获取验证码
            Row.create({ space: 10 });
            Row.debugLine("view/LoginPagePackage/LoginPage_register.ets(28:7)");
            //输入验证码和获取验证码
            Row.width('80%');
            //输入验证码和获取验证码
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '请输入验证码:' });
            TextInput.debugLine("view/LoginPagePackage/LoginPage_register.ets(29:9)");
            TextInput.width('55%');
            TextInput.type(InputType.Number);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //获取验证码
            Button.createWithLabel(this.getCodeButtonText + '');
            Button.debugLine("view/LoginPagePackage/LoginPage_register.ets(34:9)");
            //获取验证码
            Button.onClick(() => {
                //验证码倒计时实现
                this.countDown--;
                this.intervalId = setInterval(() => {
                    this.getCodeButtonEnabled = false;
                    this.getCodeButtonText = this.countDown + 's';
                    if (this.countDown < 0) {
                        clearInterval(this.intervalId);
                        this.countDown = 10;
                        this.intervalId = 0;
                        this.getCodeButtonText = '获取验证码';
                        this.getCodeButtonEnabled = true;
                        return;
                    }
                    this.countDown--;
                    //发送验证码实现
                }, 1000);
            });
            //获取验证码
            Button.width('40%');
            //获取验证码
            Button.enabled(this.getCodeButtonEnabled);
        }, Button);
        //获取验证码
        Button.pop();
        //输入验证码和获取验证码
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //登录与注册按钮
            Row.create();
            Row.debugLine("view/LoginPagePackage/LoginPage_register.ets(62:7)");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('登录');
            Button.debugLine("view/LoginPagePackage/LoginPage_register.ets(63:9)");
            Button.margin({ right: '10%' });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('注册');
            Button.debugLine("view/LoginPagePackage/LoginPage_register.ets(66:9)");
            Button.margin({ left: '10%' });
        }, Button);
        Button.pop();
        //登录与注册按钮
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new LoginPage_register(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
