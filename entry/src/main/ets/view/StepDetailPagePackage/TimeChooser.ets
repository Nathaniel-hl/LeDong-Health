import router from '@ohos.router';
@Extend(Text)function textPattern(){
  .fontSize(35)
  .fontColor(Color.White)
  .opacity(0.6)
}
@Preview
@Component
export default struct TimeChooser{
  time:timeChooser=timeChooser.Week
  imagePosition:Length=0;

  aboutToAppear(){
    switch (this.time){
      case timeChooser.Day:
      this.imagePosition=0
      break
      case timeChooser.Week:
      this.imagePosition='25%'
      break
      case  timeChooser.Month:
      this.imagePosition='50%'
      break
      case  timeChooser.Year:
      this.imagePosition='75%'
      break
    }
  }
  build(){
    Stack(){
      Row(){
        Image('/view/StepDetailPagePackage/timeChooser_pic.png')
          .width('25%')
          .height('105%')
          .position({x:this.imagePosition,y:-20})
          .objectFit(ImageFit.Fill)
      }
      .width('100%')


      Row(){
        Row(){
          Text('日')
            .textPattern()
        }
        .width('25%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .onClick(()=>{
          if(this.time!=timeChooser.Day){
            router.pushUrl({url:"view/StepDetailPagePackage/StepDetailPage_day"})
          }
        })

        Row(){
          Text('周')
            .textPattern()
        }
        .width('25%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .onClick(()=>{
          if(this.time!=timeChooser.Week){
            router.pushUrl({url:"view/StepDetailPagePackage/StepDetailPage_week"})
          }
        })

        Row(){
          Text('月')
            .textPattern()
        }
        .width('25%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .onClick(()=>{
          if(this.time!=timeChooser.Month){
            router.pushUrl({url:"view/StepDetailPagePackage/StepDetailPage_month"})
          }
        })
        Row(){
          Text('年')
            .textPattern()
        }
        .width('25%')
        .height('100%')
        .justifyContent(FlexAlign.Center)
        .onClick(()=>{
          if(this.time!=timeChooser.Year){
            router.pushUrl({url:"view/StepDetailPagePackage/StepDetailPage_year"})
          }
        })
      }
      .width('100%')


    }
    .borderRadius(22)
    .height('5%')
    //.width('90%')
    .backgroundColor(Color.Black)



  }
}
enum timeChooser{
  Day,
  Week,
  Month,
  Year
}