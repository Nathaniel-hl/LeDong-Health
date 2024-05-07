@Preview
@Component
export default struct exerciseRecommendCard{
  colors:string[]=['#FFAA02','#FD600E',
    '#00968A','#A79884',
    '#FD4D12','#FFAA02']
  index:number=0
  datas:recommend[]=[
    new recommend('预防腰椎突出','/view/ExercisePagePackage/recommendPic1.png'),
    new recommend('强肌肉防干眼','/view/ExercisePagePackage/recommendPic1.png'),
    new recommend('太极','/view/ExercisePagePackage/recommendPic1.png')
  ]

  build(){
    Column(){
      Text(this.datas[this.index].name)
        .fontSize(20)
        .padding({left:10,top:10})

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
class recommend{
  name:string
  image:string
  constructor(name:string, image:string) {
    this.name=name
    this.image=image
  }
}