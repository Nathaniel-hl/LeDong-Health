import CommunityServiceCard from './CommunityServiceCard'
@Preview
@Component
export default struct postCard{
  index:number=0
  private posts:post[]=[
    new post('陈洁','/view/CommunityPage/chenjie_Pic.png','社区活动很好，希望多多举办'),
    new post('李华','/view/CommunityPage/lihua_Pic.png','充实快乐的一天'),
    new post('张三','/view/CommunityPage/chenjie_Pic.png','意义丰富的活动，很有趣'),
  ]
  activityImage:string='/view/CommunityPage/activityImage_Pic.png'

  @State isFollowed:boolean=true

  build(){
    Column({space:10}){
      //头像+姓名+关注按钮
      Row(){
        Image(this.posts[this.index].posterPic)
          .objectFit(ImageFit.Fill)
          .width('15%')
          .borderRadius(10)

        Text(this.posts[this.index].posterName)
          .fontSize(25)
          .margin({left:10})
          .fontWeight(500)
          .fontColor(Color.Black)

        Blank()

        if (this.isFollowed){
          Button('已关注')
            .fontColor(Color.White)
            .backgroundColor('#00968A')
            .fontSize(15)
            .width('30%')
            .onClick(()=>{this.isFollowed=!this.isFollowed})
        }else {
          Button('关注')
            .fontColor(Color.White)
            .backgroundColor('#00968A')
            .fontSize(15)
            .width('30%')
            .onClick(()=>{this.isFollowed=!this.isFollowed})
        }

      }
      .height('25%')
      .width('90%')
      .margin({top:10})

      //推文描述
      Row(){
        Text(this.posts[this.index].postText)
          .fontSize(20)
      }.width('90%')

      //推文图片
      Row(){
        Image('/view/CommunityPage/activityImage_Pic.png')
          .objectFit(ImageFit.Fill)
          .height('80%')
          .margin({left:'5%'})
          .width('30%')

        //活动描述
        Text('#智慧社区健步走')
          .fontSize(20)
          .fontWeight(500)
          .margin({left:'5%'})
      }
      .width('90%')
      .height('40%')
      .backgroundImage('/view/CommunityPage/post_background_pIc.png')
      .backgroundImageSize({width:'100%',height:'100%'})

      Blank()

      //一键三连
      Row(){
        Blank()
        Image('/view/CommunityPage/collect_icon_pic.png')
          .height('100%')
          .objectFit(ImageFit.Fill)
          .margin({right:10})
        Image('/view/CommunityPage/discussion_icon_pic.png')
          .height('100%')
          .objectFit(ImageFit.Fill)
      }.width('90%')
      .height('7%')


    }
    .width('100%')
    .height('40%')
    .backgroundColor(Color.White)
  }
}
class post{
  posterName:string
  posterPic:string
  postText:string

  constructor(  posterName:string, posterPic:string, postText:string) {
    this.posterName=posterName
    this.posterPic=posterPic
    this.postText=postText
  }
}