interface AwardCard_Params {
    isChecked?: boolean;
    //奖品序号
    index?: number;
    //奖品列表
    datas?: awardInfo[];
    user_choose_sum?: number;
    background_image?: string;
}
export default class AwardCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isChecked = new ObservedPropertySimplePU(false
        //奖品序号
        , this, "isChecked");
        this.index = 2;
        this.datas = [
            new awardInfo('武理帆布袋', 100, '/view/MinePagePackage/award_bag_pic.png'),
            new awardInfo('武理雪糕', 100, '/view/MinePagePackage/award_icecream_pic.png'),
            new awardInfo('武理笔记本', 200, '/view/MinePagePackage/award_book_pic.png'),
            new awardInfo('乐事薯片', 90, '/view/MinePagePackage/award_lays_pic.png'),
            new awardInfo('哇哈哈', 80, '/view/MinePagePackage/award_wahaha_pic.png'),
            new awardInfo('牙膏', 150, '/view/MinePagePackage/award_toothpaste_pic.png'),
            new awardInfo('小推车', 1000, '/view/MinePagePackage/award_car_pic.png'),
            new awardInfo('洁厕灵', 300, '/view/MinePagePackage/award_84_pic.png'),
        ];
        this.__user_choose_sum = new SynchedPropertySimpleTwoWayPU(params.user_choose_sum, this, "user_choose_sum");
        this.__background_image = new ObservedPropertySimplePU('/view/MinePagePackage/award_background_false.png', this, "background_image");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params: AwardCard_Params) {
        if (params.isChecked !== undefined) {
            this.isChecked = params.isChecked;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.datas !== undefined) {
            this.datas = params.datas;
        }
        if (params.background_image !== undefined) {
            this.background_image = params.background_image;
        }
    }
    updateStateVars(params: AwardCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isChecked.purgeDependencyOnElmtId(rmElmtId);
        this.__user_choose_sum.purgeDependencyOnElmtId(rmElmtId);
        this.__background_image.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isChecked.aboutToBeDeleted();
        this.__user_choose_sum.aboutToBeDeleted();
        this.__background_image.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    //是否选择
    private __isChecked: ObservedPropertySimplePU<boolean>;
    get isChecked() {
        return this.__isChecked.get();
    }
    set isChecked(newValue: boolean) {
        this.__isChecked.set(newValue);
    }
    //奖品序号
    private index: number;
    //奖品列表
    private datas: awardInfo[];
    //用户选择总金额
    private __user_choose_sum: SynchedPropertySimpleTwoWayPU<number>;
    get user_choose_sum() {
        return this.__user_choose_sum.get();
    }
    set user_choose_sum(newValue: number) {
        this.__user_choose_sum.set(newValue);
    }
    private __background_image: ObservedPropertySimplePU<string>;
    get background_image() {
        return this.__background_image.get();
    }
    set background_image(newValue: string) {
        this.__background_image.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("view/MinePagePackage/AwardCard.ets(25:5)");
            Column.size({ height: 150, width: 150 });
            Column.alignItems(HorizontalAlign.Start);
            Column.borderRadius(20);
            Column.backgroundImage(this.background_image);
            Column.backgroundImageSize({ width: '100%', height: '100%' });
            Column.onClick(() => {
                if (this.isChecked) {
                    this.user_choose_sum -= this.datas[this.index].price;
                    this.isChecked = false;
                    this.background_image = '/view/MinePagePackage/award_background_false.png';
                }
                else {
                    this.isChecked = true;
                    this.user_choose_sum += this.datas[this.index].price;
                    this.background_image = '/view/MinePagePackage/award_background_true.png';
                }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("view/MinePagePackage/AwardCard.ets(26:7)");
            Row.width('90%');
            Row.justifyContent(FlexAlign.Center);
            Row.margin({ top: '5%', bottom: '5%' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.datas[this.index].image);
            Image.debugLine("view/MinePagePackage/AwardCard.ets(27:9)");
            Image.height('80%');
            Image.objectFit(ImageFit.Fill);
            Image.interpolation(ImageInterpolation.Medium);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("view/MinePagePackage/AwardCard.ets(37:7)");
            Row.width('90%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.datas[this.index].name);
            Text.debugLine("view/MinePagePackage/AwardCard.ets(38:9)");
            Text.fontSize(20);
            Text.fontWeight(500);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/MinePagePackage/AwardCard.ets(42:9)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.datas[this.index].price + '');
            Text.debugLine("view/MinePagePackage/AwardCard.ets(44:9)");
            Text.fontSize(25);
            Text.fontWeight(500);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class awardInfo {
    name: string;
    price: number;
    image: string;
    constructor(name: string, price: number, image: string) {
        this.price = price;
        this.name = name;
        this.image = image;
    }
}
