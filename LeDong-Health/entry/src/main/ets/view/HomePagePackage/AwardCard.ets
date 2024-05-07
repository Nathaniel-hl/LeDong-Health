@Preview
@Component
export default struct HealthDataCard{
  //是否选择
  @State isChecked:boolean=false
  //奖品序号
  index:number=2
  //奖品列表
  datas:awardInfo[]=[
    new awardInfo('武理帆布袋',100,'/view/MinePagePackage/award_bag_pic.png'),
    new awardInfo('武理文创雪糕',100,'/view/MinePagePackage/award_icecream_pic.png'),
    new awardInfo('武理笔记本',200,'/view/MinePagePackage/award_book_pic.png'),
    new awardInfo('帆布袋',100,'/view/MinePagePackage/award_bag_pic.png'),
    new awardInfo('帆布袋',100,'/view/MinePagePackage/award_bag_pic.png'),
    new awardInfo('帆布袋',100,'/view/MinePagePackage/award_bag_pic.png'),
    new awardInfo('帆布袋',100,'/view/MinePagePackage/award_bag_pic.png'),
    new awardInfo('帆布袋',100,'/view/MinePagePackage/award_bag_pic.png'),
  ]
  //用户选择总金额
  @Link user_choose_sum:number

  build(){
    Column(){
      Row(){
        Image(this.datas[this.index].image)
          .height('80%')

          .objectFit(ImageFit.Fill)
          .interpolation(ImageInterpolation.Medium)
      }.width('90%')
      .justifyContent(FlexAlign.Center)
      .margin({top:'5%',bottom:'5%'})


      Row(){
        Text(this.datas[this.index].name)
          .fontSize(20)
          .fontWeight(500)
        Blank()

        Text(this.datas[this.index].price+'')
          .fontSize(25)
          .fontWeight(500)
      }
      .width('90%')
    }
    .size({height:180,width:180})
    .alignItems(HorizontalAlign.Start)
    .borderRadius(20)
    .backgroundImage(this.isChecked?'/view/MinePagePackage/award_background_true.png':null)
    .backgroundImageSize({width:'100%',height:'100%'})
    .onClick(()=>{
      if(this.isChecked) {
        this.user_choose_sum-=this.datas[this.index].price
        this.isChecked=false
      }else{
        this.isChecked=true
        this.user_choose_sum+=this.datas[this.index].price
      }
    })
  }
}
class awardInfo{
  name:string
  price:number
  image:string

  constructor(name:string,price:number, image:string) {
    this.price=price
    this.name=name
    this.image=image
  }
}