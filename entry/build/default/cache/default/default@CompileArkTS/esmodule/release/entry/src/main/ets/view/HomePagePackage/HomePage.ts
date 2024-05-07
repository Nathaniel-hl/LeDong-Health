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
    setInitiallyProvidedValue(a: HomePage_Params) {
        if (a.message !== undefined) {
            this.message = a.message;
        }
    }
    updateStateVars(a: HomePage_Params) {
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
    //date: Date = new Date() //当前日期
    aboutToAppear() {
        this.getCurTime();
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create({ space: 20 });
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.Start);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //首页，搜索栏
            Row.create({ space: 20 });
            //首页，搜索栏
            Row.height('10%');
            //首页，搜索栏
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('首页');
            Text.fontSize(40);
            Text.padding({ left: 10 });
            Text.opacity(0.9);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
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
        this.observeComponentCreation2((b, c) => {
            //我的步行+日期
            Text.create(' 我的步行 ' + this.getCurTime());
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
        this.observeComponentCreation2((b, c) => {
            //步数图案
            Image.create({ "id": 16777276, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
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
        this.observeComponentCreation2((b, c) => {
            //活动数据+编辑按钮
            Row.create();
            //活动数据+编辑按钮
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create('活动数据');
            Text.fontSize(25);
            Text.fontWeight(4);
            Text.padding({ left: 10, right: 10 });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create('编辑');
            Text.fontSize(20);
            Text.fontWeight(5);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        //活动数据+编辑按钮
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //活动数据图片
            Row.create();
            //活动数据图片
            Row.height('20%');
            //活动数据图片
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777228, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.padding({ left: 10, right: 10 });
            Image.width('50%');
            Image.height('100%');
            Image.autoResize(true);
            Image.interpolation(ImageInterpolation.Medium);
            Image.borderRadius(20);
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Image.create({ "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.wutsport", "moduleName": "entry" });
            Image.height('100%');
            Image.width('50%');
            Image.autoResize(true);
            Image.padding({ left: 10, right: 10 });
            Image.interpolation(ImageInterpolation.Medium);
            Image.borderRadius(20);
        }, Image);
        //活动数据图片
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //底端选择栏
            Blank.create();
        }, Blank);
        //底端选择栏
        Blank.pop();
        {
            this.observeComponentCreation2((c, d) => {
                if (d) {
                    let e = () => {
                        return {
                            isHomePage: true
                        };
                    };
                    ViewPU.create(new bottomChooser(this, { isHomePage: true }, undefined, c, e));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(c, {});
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
