import bottomChooser, { BotIconPattern } from '../../bottomChooser'
import searchHeader from './searchHeader'
//import systemDateTime from '@ohos.systemDateTime';
import router from '@ohos.router'

@Entry
@Component
struct HomePage {
  @State message: string = 'Hello World'
  //date: Date = new Date() //当前日期

  aboutToAppear() {
    this.getCurTime()
  }

  build() {
    Column({ space: 20 }) {
      //首页，搜索栏
      Row({ space: 20 }) {
        Text('首页')
          .fontSize(40)
          .padding({ left: 10 })
          .opacity(0.9)
        searchHeader()
      }
      .height('10%')
      .alignItems(VerticalAlign.Bottom)

      //我的步行+日期
      Text(' 我的步行 ' + this.getCurTime())
        .fontSize(25)
        .fontWeight(4)
        .opacity(0.9) //设置透明度

      //步数图案
      Image($r('app.media.stepNumPic'))
        .width('100%')
        .height('30%')
        .padding({ left: 15, right: 15 })
        .opacity(0.8)
        .onClick(()=>{
          router.pushUrl({
            url:"view/StepDetailPagePackage/StepDetailPage_day"
          })
        })

      //活动数据+编辑按钮
      Row() {
        Text('活动数据')
          .fontSize(25)
          .fontWeight(4)
          .padding({ left: 10, right: 10 })

        Text('编辑')
          .fontSize(20)
          .fontWeight(5)
      }
      .alignItems(VerticalAlign.Bottom)

      //活动数据图片
      Row() {
        Image($r("app.media.activeDataPic1"))
          .padding({ left: 10, right: 10 })
          .width('50%')
          .height('100%')
          .autoResize(true)
          .interpolation(ImageInterpolation.Medium)
          .borderRadius(20)


        Image($r('app.media.activeDataPic2'))
          .height('100%')
          .width('50%')
          .autoResize(true)
          .padding({ left: 10, right: 10 })
          .interpolation(ImageInterpolation.Medium)
          .borderRadius(20)
      }.height('20%')
      .width('100%')

      //底端选择栏
      Blank()
      bottomChooser({ isHomePage: true });

    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
    .justifyContent(FlexAlign.Start)
    .alignItems(HorizontalAlign.Start)
  }
  //获取当前日期//未实现
  getCurTime() {
    return '4月26日'
    /*    try {
          systemDateTime.getCurrentTime(false, (error: Error, time: number) => {
            if (error) {
              console.info(`Failed to get currentTime. message: ${error.message}, code: ${error}`);
              return;
            }

            console.log(`Succeeded in getting currentTime : ${time}`);
          });
        } catch (e) {
          let error = e as Error;
          console.info(`Failed to get currentTime. message: ${error.message}, code: ${error}`);
        }*/
  }
}
