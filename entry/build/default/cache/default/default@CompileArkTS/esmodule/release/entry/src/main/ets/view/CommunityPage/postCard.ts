interface postCard_Params {
    index?: number;
    posts?: post[];
    activityImage?: string;
    isFollowed?: boolean;
}
export default class postCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined) {
        super(parent, __localStorage, elmtId);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.index = 0;
        this.posts = [
            new post('陈洁', '/view/CommunityPage/chenjie_Pic.png', '社区活动很好，希望多多举办'),
            new post('李华', '/view/CommunityPage/lihua_Pic.png', '充实快乐的一天'),
            new post('张三', '/view/CommunityPage/chenjie_Pic.png', '意义丰富的活动，很有趣'),
        ];
        this.activityImage = '/view/CommunityPage/activityImage_Pic.png';
        this.__isFollowed = new ObservedPropertySimplePU(true, this, "isFollowed");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(a: postCard_Params) {
        if (a.index !== undefined) {
            this.index = a.index;
        }
        if (a.posts !== undefined) {
            this.posts = a.posts;
        }
        if (a.activityImage !== undefined) {
            this.activityImage = a.activityImage;
        }
        if (a.isFollowed !== undefined) {
            this.isFollowed = a.isFollowed;
        }
    }
    updateStateVars(a: postCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(a) {
        this.__isFollowed.purgeDependencyOnElmtId(a);
    }
    aboutToBeDeleted() {
        this.__isFollowed.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private index: number;
    private posts: post[];
    private activityImage: string;
    private __isFollowed: ObservedPropertySimplePU<boolean>;
    get isFollowed() {
        return this.__isFollowed.get();
    }
    set isFollowed(a: boolean) {
        this.__isFollowed.set(a);
    }
    initialRender() {
        this.observeComponentCreation2((b, c) => {
            Column.create({ space: 10 });
            Column.width('100%');
            Column.height('40%');
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((b, c) => {
            //头像+姓名+关注按钮
            Row.create();
            //头像+姓名+关注按钮
            Row.height('25%');
            //头像+姓名+关注按钮
            Row.width('90%');
            //头像+姓名+关注按钮
            Row.margin({ top: 10 });
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Image.create(this.posts[this.index].posterPic);
            Image.objectFit(ImageFit.Fill);
            Image.width('15%');
            Image.borderRadius(10);
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Text.create(this.posts[this.index].posterName);
            Text.fontSize(25);
            Text.margin({ left: 10 });
            Text.fontWeight(500);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            If.create();
            if (this.isFollowed) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((f, g) => {
                        Button.createWithLabel('已关注');
                        Button.fontColor(Color.White);
                        Button.backgroundColor('#00968A');
                        Button.fontSize(15);
                        Button.width('30%');
                        Button.onClick(() => { this.isFollowed = !this.isFollowed; });
                    }, Button);
                    Button.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((f, g) => {
                        Button.createWithLabel('关注');
                        Button.fontColor(Color.White);
                        Button.backgroundColor('#00968A');
                        Button.fontSize(15);
                        Button.width('30%');
                        Button.onClick(() => { this.isFollowed = !this.isFollowed; });
                    }, Button);
                    Button.pop();
                });
            }
        }, If);
        If.pop();
        //头像+姓名+关注按钮
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //推文描述
            Row.create();
            //推文描述
            Row.width('90%');
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Text.create(this.posts[this.index].postText);
            Text.fontSize(20);
        }, Text);
        Text.pop();
        //推文描述
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            //推文图片
            Row.create();
            //推文图片
            Row.width('90%');
            //推文图片
            Row.height('40%');
            //推文图片
            Row.backgroundImage('/view/CommunityPage/post_background_pIc.png');
            //推文图片
            Row.backgroundImageSize({ width: '100%', height: '100%' });
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Image.create('/view/CommunityPage/activityImage_Pic.png');
            Image.objectFit(ImageFit.Fill);
            Image.height('80%');
            Image.margin({ left: '5%' });
            Image.width('30%');
        }, Image);
        this.observeComponentCreation2((b, c) => {
            //活动描述
            Text.create('#智慧社区健步走');
            //活动描述
            Text.fontSize(20);
            //活动描述
            Text.fontWeight(500);
            //活动描述
            Text.margin({ left: '5%' });
        }, Text);
        //活动描述
        Text.pop();
        //推文图片
        Row.pop();
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            //一键三连
            Row.create();
            //一键三连
            Row.width('90%');
            //一键三连
            Row.height('7%');
        }, Row);
        this.observeComponentCreation2((b, c) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((b, c) => {
            Image.create('/view/CommunityPage/collect_icon_pic.png');
            Image.height('100%');
            Image.objectFit(ImageFit.Fill);
            Image.margin({ right: 10 });
        }, Image);
        this.observeComponentCreation2((b, c) => {
            Image.create('/view/CommunityPage/discussion_icon_pic.png');
            Image.height('100%');
            Image.objectFit(ImageFit.Fill);
        }, Image);
        //一键三连
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class post {
    posterName: string;
    posterPic: string;
    postText: string;
    constructor(posterName: string, posterPic: string, postText: string) {
        this.posterName = posterName;
        this.posterPic = posterPic;
        this.postText = postText;
    }
}
