interface HomePage_Params {
    message?: string;
}
import bottomChooser from "@bundle:com.example.wutsport/entry/ets/bottomChooser";
import router from "@ohos:router";
class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World'
        //date: Date = new Date() //当前日期
        , this, "message");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: HomePage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: HomePage_Params) {
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
    //date: Date = new Date() //当前日期
    aboutToAppear() {
        this.getCurTime();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.debugLine("view/HomePagePackage/HomePage.ets(16:5)");
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.Start);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //首页，搜索栏
            Row.create({ space: 20 });
            Row.debugLine("view/HomePagePackage/HomePage.ets(18:7)");
            //首页，搜索栏
            Row.height('10%');
            //首页，搜索栏
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('首页');
            Text.debugLine("view/HomePagePackage/HomePage.ets(19:9)");
            Text.fontSize(40);
            Text.padding({ left: 10 });
            Text.opacity(0.9);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //searchHeader()
            Search.create({ placeholder: '24式太极拳' });
            Search.debugLine("view/HomePagePackage/HomePage.ets(25:9)");
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
            //我的步行+日期
            Text.create(' 我的步行 ' + this.getCurTime());
            Text.debugLine("view/HomePagePackage/HomePage.ets(40:7)");
            //我的步行+日期
            Text.fontSize(25);
            //我的步行+日期
            Text.fontWeight(4);
            //我的步行+日期
            Text.opacity(0.9);
            //我的步行+日期
            Text.fontColor(Color.Black);
        }, Text);
        //我的步行+日期
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //步数图案
            Image.create({ "id": 16777274, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/HomePagePackage/HomePage.ets(47:7)");
            //步数图案
            Image.width('100%');
            //步数图案
            Image.height('30%');
            //步数图案
            Image.padding({ left: 15, right: 15 });
            //步数图案
            Image.opacity(0.8);
            //步数图案
            Image.onClick(() => {
                router.pushUrl({
                    url: "view/StepDetailPagePackage/StepDetailPage_day"
                });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //活动数据+编辑按钮
            Row.create();
            Row.debugLine("view/HomePagePackage/HomePage.ets(59:7)");
            //活动数据+编辑按钮
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('活动数据');
            Text.debugLine("view/HomePagePackage/HomePage.ets(60:9)");
            Text.fontSize(25);
            Text.fontWeight(4);
            Text.padding({ left: 10, right: 10 });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('编辑');
            Text.debugLine("view/HomePagePackage/HomePage.ets(66:9)");
            Text.fontSize(20);
            Text.fontWeight(5);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //活动数据+编辑按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //活动数据图片
            Row.create();
            Row.debugLine("view/HomePagePackage/HomePage.ets(74:7)");
            //活动数据图片
            Row.height('20%');
            //活动数据图片
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/HomePagePackage/HomePage.ets(75:9)");
            Image.padding({ left: 10, right: 10 });
            Image.width('50%');
            Image.height('100%');
            Image.autoResize(true);
            Image.interpolation(ImageInterpolation.Medium);
            Image.borderRadius(20);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777265, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.debugLine("view/HomePagePackage/HomePage.ets(84:9)");
            Image.height('100%');
            Image.width('50%');
            Image.autoResize(true);
            Image.padding({ left: 10, right: 10 });
            Image.interpolation(ImageInterpolation.Medium);
            Image.borderRadius(20);
        }, Image);
        //活动数据图片
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //底端选择栏
            Blank.create();
            Blank.debugLine("view/HomePagePackage/HomePage.ets(95:7)");
        }, Blank);
        //底端选择栏
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let paramsLambda = () => {
                        return {
                            isHomePage: true
                        };
                    };
                    ViewPU.create(new bottomChooser(this, { isHomePage: true }, undefined, elmtId, paramsLambda));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, null);
        }
        Column.pop();
    }
    //获取当前日期//未实现
    getCurTime() {
        return '4月26日';
        /*    try {
              systemDateTime.getCurrentTime(false, (error: Error, time: number) => {
                if (error) {
                  console.info(`Failed to get currentTime. message: ${error.message}, code: ${error}`);
                  return;
                }
        
                console.log(`Succeeded in getting currentTime : ${time}`);
              });
            } catch (e) {
              let error = e as Error;
              console.info(`Failed to get currentTime. message: ${error.message}, code: ${error}`);
            }*/
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new HomePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
