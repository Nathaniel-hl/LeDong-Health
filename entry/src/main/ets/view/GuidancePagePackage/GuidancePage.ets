import router from '@ohos.router'
import { BusinessError } from '@ohos.base';

// class routerParams {
//   data1:string
//
//   constructor(str:string) {
//     this.data1 = str
//   }
// }

@Entry
@Component
struct GuidancePage {
  @State message: string = 'Hello World'

  build() {
    Column() {
      Blank()

      Text('是否完善个人信息           ')
        .fontSize(30)
        .padding({ top: 20, bottom: 20, left: 20 })
        .opacity(0.9)
        .fontColor(Color.Black)

      Text('进行运动定制?')
        .fontSize(30)
        .padding({ bottom: 10 })
        .opacity(0.9)
        .fontColor(Color.Black)

      Image($r('app.media.guidancePic'))
        .width('90%')
        .height('45%')

      Button('开始定制')
        .size({ height: 50, width: 200 })
        .fontSize(25)
        .onClick(() => {
          router.clear()
          router.pushUrl({
            url: 'view/GuidancePagePackage/DataChoice_Gender_Age'
          })
        })

      Blank()

      Text('有丰富经验，跳过->')
        .fontSize(20)
        .opacity(0.7)
        .padding({ bottom: 20 })
        .fontColor('#ff7a7878')
        .onClick(() => {
          //router.clear()
          router.pushUrl({
            url: 'view/HomePagePackage/HomePage'
          })
          // try {
          //   router.replaceNamedRoute({
          //     name: "view/HomePagePackage/HomePage",
          //     params: new routerParams('view/HomePagePackage/HomePage')
          //   })
          // } catch (err) {
          //   console.error(`replaceNamedRoute failed, code is ${(err as BusinessError).code}, message is ${(err as BusinessError).message}`);
          // }
        })

    }
    .justifyContent(FlexAlign.Center)
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
  }
}