//@Preview
@Component
export default struct AwardCard {
  //是否选择
  @State isChecked: boolean = false
  //奖品序号
  index: number = 2
  //奖品列表
  datas: awardInfo[] = [
    new awardInfo('武理帆布袋', 100, '/view/MinePagePackage/award_bag_pic.png'),
    new awardInfo('武理雪糕', 100, '/view/MinePagePackage/award_icecream_pic.png'),
    new awardInfo('武理笔记本', 200, '/view/MinePagePackage/award_book_pic.png'),
    new awardInfo('乐事薯片', 90, '/view/MinePagePackage/award_lays_pic.png'),
    new awardInfo('哇哈哈', 80, '/view/MinePagePackage/award_wahaha_pic.png'),
    new awardInfo('牙膏', 150, '/view/MinePagePackage/award_toothpaste_pic.png'),
    new awardInfo('小推车', 1000, '/view/MinePagePackage/award_car_pic.png'),
    new awardInfo('洁厕灵', 300, '/view/MinePagePackage/award_84_pic.png'),
  ]
  //用户选择总金额
  @Link user_choose_sum: number

  @State background_image:string='/view/MinePagePackage/award_background_false.png'

  build() {
    Column() {
      Row() {
        Image(this.datas[this.index].image)
          .height('80%')

          .objectFit(ImageFit.Fill)
          .interpolation(ImageInterpolation.Medium)
      }.width('90%')
      .justifyContent(FlexAlign.Center)
      .margin({ top: '5%', bottom: '5%' })


      Row() {
        Text(this.datas[this.index].name)
          .fontSize(20)
          .fontWeight(500)
          .fontColor(Color.Black)
        Blank()

        Text(this.datas[this.index].price + '')
          .fontSize(25)
          .fontWeight(500)
          .fontColor(Color.Black)
      }
      .width('90%')
    }
    .size({ height: 150, width: 150 })
    .alignItems(HorizontalAlign.Start)
    .borderRadius(20)
    .backgroundImage(this.background_image)
    .backgroundImageSize({ width: '100%', height: '100%' })
    .onClick(() => {
      if (this.isChecked) {
        this.user_choose_sum -= this.datas[this.index].price
        this.isChecked = false
        this.background_image='/view/MinePagePackage/award_background_false.png'
      } else {
        this.isChecked = true
        this.user_choose_sum += this.datas[this.index].price
        this.background_image='/view/MinePagePackage/award_background_true.png'
      }
    })
  }
}

class awardInfo {
  name: string
  price: number
  image: string

  constructor(name: string, price: number, image: string) {
    this.price = price
    this.name = name
    this.image = image
  }
}