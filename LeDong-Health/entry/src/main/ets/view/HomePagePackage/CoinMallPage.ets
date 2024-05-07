import router from '@ohos.router'
@Entry
@Component
struct CoinMallPage {
  @State message: string = 'Hello World'
  //用户当前金币数量
  @State user_coin_num:number=118
  //用户选择商品金币
  @State user_choose_sum:number=0
  build() {
    Column() {
      //顶部title和返回按钮
      Row(){
        Text('<')
          .fontSize(50)
          .onClick(()=>{
            router.back()
          })
        Blank()
        Text('金币换奖品')
          .fontSize(30)
          .fontWeight(400)
          .padding({right:20})
        Blank()

      }
      .width('100%')
      .backgroundColor(Color.White)
      .height('10%')

      //我的金币 商品列表
      List({space:15}) {
        ListItem() {}

        //我的金币文字
        ListItem() {
          Row() {
            Text('我的金币')
              .fontSize(25)
              .fontWeight(500)
              .margin({left:'5%'})

            Blank()

            Text(this.user_coin_num+'')
              .fontSize(40)
              .fontWeight(500)

            Image($r('app.media.coinPic'))
              .objectFit(ImageFit.Fill)
              .height('40%')
              .margin({right:'5%'})
          }
          .width('100%')
          .height('10%')
          .backgroundColor($r('app.color.my_Coins_color'))
          .borderRadius(20)
        }

        //商品列表
        ListItem(){
          Row(){

          }
        }
      }
      .width('90%')
      .height('75%')

      //底部总计页面
      Column(){
        Row(){
          Text(`总计`)
        }
      }
    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
  }
}