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
    setInitiallyProvidedValue(params: postCard_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.posts !== undefined) {
            this.posts = params.posts;
        }
        if (params.activityImage !== undefined) {
            this.activityImage = params.activityImage;
        }
        if (params.isFollowed !== undefined) {
            this.isFollowed = params.isFollowed;
        }
    }
    updateStateVars(params: postCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isFollowed.purgeDependencyOnElmtId(rmElmtId);
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
    set isFollowed(newValue: boolean) {
        this.__isFollowed.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.debugLine("view/CommunityPage/postCard.ets(16:5)");
            Column.width('100%');
            Column.height('40%');
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //头像+姓名+关注按钮
            Row.create();
            Row.debugLine("view/CommunityPage/postCard.ets(18:7)");
            //头像+姓名+关注按钮
            Row.height('25%');
            //头像+姓名+关注按钮
            Row.width('90%');
            //头像+姓名+关注按钮
            Row.margin({ top: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.posts[this.index].posterPic);
            Image.debugLine("view/CommunityPage/postCard.ets(19:9)");
            Image.objectFit(ImageFit.Fill);
            Image.width('15%');
            Image.borderRadius(10);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.posts[this.index].posterName);
            Text.debugLine("view/CommunityPage/postCard.ets(24:9)");
            Text.fontSize(25);
            Text.margin({ left: 10 });
            Text.fontWeight(500);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/CommunityPage/postCard.ets(30:9)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isFollowed) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('已关注');
                        Button.debugLine("view/CommunityPage/postCard.ets(33:11)");
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
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('关注');
                        Button.debugLine("view/CommunityPage/postCard.ets(40:11)");
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //推文描述
            Row.create();
            Row.debugLine("view/CommunityPage/postCard.ets(54:7)");
            //推文描述
            Row.width('90%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.posts[this.index].postText);
            Text.debugLine("view/CommunityPage/postCard.ets(55:9)");
            Text.fontSize(20);
        }, Text);
        Text.pop();
        //推文描述
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //推文图片
            Row.create();
            Row.debugLine("view/CommunityPage/postCard.ets(60:7)");
            //推文图片
            Row.width('90%');
            //推文图片
            Row.height('40%');
            //推文图片
            Row.backgroundImage('/view/CommunityPage/post_background_pIc.png');
            //推文图片
            Row.backgroundImageSize({ width: '100%', height: '100%' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/view/CommunityPage/activityImage_Pic.png');
            Image.debugLine("view/CommunityPage/postCard.ets(61:9)");
            Image.objectFit(ImageFit.Fill);
            Image.height('80%');
            Image.margin({ left: '5%' });
            Image.width('30%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //活动描述
            Text.create('#智慧社区健步走');
            Text.debugLine("view/CommunityPage/postCard.ets(68:9)");
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/CommunityPage/postCard.ets(78:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //一键三连
            Row.create();
            Row.debugLine("view/CommunityPage/postCard.ets(81:7)");
            //一键三连
            Row.width('90%');
            //一键三连
            Row.height('7%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("view/CommunityPage/postCard.ets(82:9)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/view/CommunityPage/collect_icon_pic.png');
            Image.debugLine("view/CommunityPage/postCard.ets(83:9)");
            Image.height('100%');
            Image.objectFit(ImageFit.Fill);
            Image.margin({ right: 10 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('/view/CommunityPage/discussion_icon_pic.png');
            Image.debugLine("view/CommunityPage/postCard.ets(87:9)");
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
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "postCard", new postCard(undefined, {}));
    previewComponent();
}
else {
}
