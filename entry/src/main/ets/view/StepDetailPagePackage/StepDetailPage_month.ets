import bottomChooser from '../../bottomChooser'
import router from '@ohos.router'
import TimeChooser from './TimeChooser'

@Entry
@Component
struct StepDetailPage_month {

  build() {
    Column() {
      //顶部title和返回按钮
      Row(){
        Text('<')
          .fontSize(50)
          .fontColor(Color.Black)
          .onClick(()=>{
            router.back()
          })
        Blank()
        Text('步行详情')
          .fontSize(30)
          .fontWeight(400)
          .padding({right:20})
          .fontColor(Color.Black)
        Blank()
      }
      .width('90%')
      .backgroundColor(Color.White)
      .height('10%')

      //中间滑动图案
      List({space:15}){
        //按钮选择
        ListItem(){
          TimeChooser({time:2})

        }
        .width('100%')
        .margin({top:10})

        //今日步数统计文字
        ListItem(){
          Text('今日步数总计')
            .fontSize(15)
            .opacity(0.5)
            .fontColor(Color.Black)
        }

        //步数显示+步数占比
        ListItem(){
          Row(){
            Text('15680')
              .fontSize(35)
              .fontWeight(600)
              .fontColor(Color.Black)

            Text('步')
              .fontSize(20)
              .fontColor(Color.Black)

            Blank()

            Text('日均连续步行时间占比')
              .fontSize(15)
              .fontColor(Color.Black)
            Text(28+'')
              .fontSize(30)
              .fontWeight(600)
              .fontColor(Color.Black)
            Text('%')
              .fontSize(15)
              .fontColor(Color.Black)
          }
          .width('100%')
          .alignItems(VerticalAlign.Bottom)
        }

        //图表1
        ListItem(){
          Image('/view/StepDetailPagePackage/graph_pic_1.png')
        }

        //连续步行时间分析文字
        ListItem(){
          Row(){
            Text('连续步行时间分析')
              .fontSize(20)
              .fontWeight(500)
              .fontColor(Color.Black)
          }
          .width('100%')
        }

        //图表2
        ListItem(){
          Column(){
            Image('/view/StepDetailPagePackage/graph_pic_2.png')
          }.width('100%')

        }

        //运动量分析文字
        ListItem(){
          Row(){
            Text('运动量分析')
              .fontSize(20)
              .fontWeight(500)
              .fontColor(Color.Black)
          }
          .width('100%')
        }

        //图表3
        ListItem(){
          Column(){
            Image('/view/StepDetailPagePackage/graph_pic_4.png')
          }.width('100%')
        }

        //步行速度分析文字
        ListItem(){
          Row(){
            Text('步行速度分析')
              .fontSize(20)
              .fontWeight(500)
              .fontColor(Color.Black)
          }
          .width('100%')
        }

        //图表4
        ListItem(){
          Column(){
            Image('/view/StepDetailPagePackage/graph_pic_5.png')
          }.width('100%')

        }
      }
      .width('90%')

      //底部页面选择
      Blank()
      bottomChooser({isExercisePage:true })
    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
  }
}
