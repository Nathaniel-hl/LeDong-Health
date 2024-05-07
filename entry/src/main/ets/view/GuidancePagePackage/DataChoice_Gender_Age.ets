import bottomNextStep from './bottomNextStep'
import Progressbar from './Progressbar'
import progressbar from './progressbar'

@Entry
@Component
struct DataChoice_Gender_Age {
  @State message: string = 'Hello World'
  isBoy: Boolean = true
  @State boyPic: Resource = $r('app.media.boyPic_true')
  @State girlPic: Resource = $r('app.media.girlPic_false')

  //选择器开始的的日期
  selectDate: Date = new Date('2000-1-1')

  //用户选择的日期，默认为选择器开始的日期
  birthday_year: Number = this.selectDate.getFullYear()
  birthday_month: Number = this.selectDate.getMonth()
  birthday_day: Number = this.selectDate.getDay()
  colors: Array<Color> = new Array(Color.White, Color.Black)

  aboutToAppear() {
    this.isBoy = true
  }

  build() {
    Column() {

      //进度条
      Progressbar({value:25})


      //性别文字
      Row() {
        Text('性别:')
          .fontSize(25)
          .opacity(0.9)
          .padding({ left: 20 })
          .fontColor(Color.Black)
      }.justifyContent(FlexAlign.Start)
      .width('100%')


      //图片男女选择
      Row() {
        //男生图片
        Image(this.boyPic)
          .width('45%')
          .onClick(() => {
            this.isBoy = true
            this.boyPic = $r('app.media.boyPic_true')
            this.girlPic = $r('app.media.girlPic_false')
            /*if(this.isBoy){
              return
            }else{
              this.isBoy=true
              this.boyPic=$r('app.media.boyPic_true')
              this.girlPic=$r('app.media.girlPic_false')
            }*/
          })

        Image(this.girlPic)
          .width('45%')
          .onClick(() => {
            this.boyPic = $r('app.media.boyPic_false')
            this.girlPic = $r('app.media.girlPic_true')
            this.isBoy = false
          })
      }
      .width('100%')
      .height('20%')
      .justifyContent(FlexAlign.Center)

      //生日文字
      Row() {
        Text('生日:')
          .fontSize(25)
          .opacity(0.9)
          .padding({ left: 20 })
          .fontColor(Color.Black)
      }.justifyContent(FlexAlign.Start)
      .width('100%')

      //日期选择器
      //可设定选择器范围
      DatePicker({
        selected: this.selectDate,
      })
        .size({ width: '90%', height: '30%' })
        .textStyle({ color:'#ff182431' })
        .disappearTextStyle({color:'#ff182431'})

/*        .onChange((value: DatePickerResult) => {
          this.birthday_year = value.year
          //选择器月份范围为0-11 这里需要+1
          this.birthday_month = value.month + 1
          this.birthday_day = value.day
          //  console.log(this.birthday_year+' '+this.birthday_month+' '+this.birthday_day)
        })*/
        .onDateChange((value:Date)=>{
          this.selectDate=value
        })

      Blank()

      bottomNextStep({index:1})

    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
    .justifyContent(FlexAlign.Start)

  }
}