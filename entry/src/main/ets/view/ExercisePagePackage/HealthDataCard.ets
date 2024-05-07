@Preview
@Component
export default struct HealthDataCard{
  colors:string[]=['#FFAA02','#FD600E',
    '#00968A','#A79884',
    '#FD4D12','#FFAA02']
  index:number=0
  datas:healthyData[]=[
    new healthyData('心率','90次/分钟',$r('app.media.exercise_healthdata_heart')),
    new healthyData('深度睡眠','6小时',$r('app.media.exercise_healthdata_sleep')),
    new healthyData('血压','128mmHg',$r('app.media.exercise_healthdata_heart')),
  ]

  build(){
    Column(){
      Text(this.datas[this.index].name)
        .fontSize(20)
        .padding({left:10,top:20})

      Text(this.datas[this.index].data)
      .fontSize(20)
      .padding({left:10})

      Row(){
        Blank()
        Image(this.datas[this.index].image)
          .objectFit(ImageFit.Fill)
          .width('60%')
          .padding({right:10})
      }
      .width('100%')
    }
    .backgroundColor(this.colors[this.index])
    .size({height:150,width:150})
    .alignItems(HorizontalAlign.Start)
    .borderRadius(20)
  }
}
class healthyData{
  name:string
  data:string
  image:Resource
  constructor(name:string, data:string,  image:Resource) {
    this.data=data
    this.name=name
    this.image=image
  }
}