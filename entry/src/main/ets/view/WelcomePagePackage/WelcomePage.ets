import router from '@ohos.router'
import { BusinessError } from '@ohos.base';
import url from '@ohos.url';


@Entry
@Component
struct WelcomePage {
  @State message: string = 'Hello World'

  aboutToAppear() {
    setTimeout(() => {
      router.pushNamedRoute({
        name:'myPage'
      })
      router.pushUrl({url:"view/HomePagePackage/HomePage"})
    }, 1000)
  }

  build() {
    Column() {
      Blank('30%')
      //中央slogan
      Column(){
        Image($r('app.media.appIconPic'))
          .size({width:'150'})
          .interpolation(ImageInterpolation.High)
          .objectFit(ImageFit.Fill)

        Image($r('app.media.appNamePic'))
          .height('15%')
          .padding({left:'35'})
      }
      .height('30%')

      Blank('30%')

      //文字描述
      Text('基于情感化设计理论 大学生运动app')
        .fontSize(15)
        .opacity(0.5)


      //logo


    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
    .justifyContent(FlexAlign.Center)
  }
}