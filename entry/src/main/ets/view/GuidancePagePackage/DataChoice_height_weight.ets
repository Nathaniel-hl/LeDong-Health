import bottomNextStep from './bottomNextStep'
import Progressbar from './progressbar'
@Entry
@Component
struct DataChoice_height_weight {
  @State message: string = 'Hello World'

  //用户选择身高，默认为170
  @State userData_height:number = 170
  //用户选择体重，默认为60kg
  @State userData_weight:number = 60

  build() {
    Column() {
      //进度条
      Progressbar({value:50})

      //身高文字
      Row(){
        Text('身高(厘米) :')
          .fontSize(25)
          .padding({left:20})
          .fontColor(Color.Black)
        Blank()
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)
      .padding({top:20})

      Text(this.userData_height+'')
        .fontSize(25)
        .fontColor(Color.Black)
      //身高滑块
      Slider(
        {
          min:100,
          max:200,
          value:this.userData_height,
          step:1,
        }
      ).blockColor($r('app.color.themes_color'))
        .width('90%')
        .trackThickness(10)
        .showTips(false)
        .onChange((value:number)=>{
          this.userData_height=value
        })

      //体重文字
      Row(){
        Text('体重(千克) :')
          .fontSize(25)
          .padding({left:20})
          .fontColor(Color.Black)
        Blank()
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)
      .padding({top:20})

      Text(this.userData_weight+'')
        .fontSize(25)
        .fontColor(Color.Black)
      //身高滑块
      Slider(
        {
          min:40,
          max:100,
          value:this.userData_weight,
          step:1,
        }
      ).blockColor($r('app.color.themes_color'))
        .width('90%')
        .trackThickness(10)
        .showTips(false)
        .onChange((value:number)=>{
          this.userData_weight=value
        })

      //底部页面切换
      Blank()
      bottomNextStep({index:2})
    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
  }
}