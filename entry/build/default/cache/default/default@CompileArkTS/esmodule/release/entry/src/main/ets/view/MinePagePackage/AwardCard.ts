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
    setInitiallyProvidedValue(a: AwardCard_Params) {
        if (a.isChecked !== undefined) {
            this.isChecked = a.isChecked;
        }
        if (a.index !== undefined) {
            this.index = a.index;
        }
        if (a.datas !== undefined) {
            this.datas = a.datas;
        }
        if (a.background_image !== undefined) {
            this.background_image = a.background_image;
        }
    }
    updateStateVars(a: AwardCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__isChecked.purgeDependencyOnElmtId(a);
        this.__user_choose_sum.purgeDependencyOnElmtId(a);
        this.__background_image.purgeDependencyOnElmtId(a);
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
    set isChecked(a: boolean) {
        this.__isChecked.set(a);
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
    set user_choose_sum(a: number) {
        this.__user_choose_sum.set(a);
    }
    private __background_image: ObservedPropertySimplePU<string>;
    get background_image() {
        return this.__background_image.get();
    }
    set background_image(a: string) {
        this.__background_image.set(a);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create();
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
        this.observeComponentCreation2((b, c) => {
            Row.create();
            Row.width('90%');
            Row.justifyContent(FlexAlign.Center);
            Row.margin({ top: '5%', bottom: '5%' });
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Image.create(this.datas[this.index].image);
            Image.height('80%');
            Image.objectFit(ImageFit.Fill);
            Image.interpolation(ImageInterpolation.Medium);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            Row.create();
            Row.width('90%');
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create(this.datas[this.index].name);
            Text.fontSize(20);
            Text.fontWeight(500);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            Text.create(this.datas[this.index].price + '');
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
