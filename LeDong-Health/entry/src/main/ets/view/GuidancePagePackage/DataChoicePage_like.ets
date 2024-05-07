import bottomNextStep from './bottomNextStep'
import DiseaseCard from './DiseaseCard'
import ExerciseCard from './exerciseCard'
import Progressbar from './Progressbar'
@Entry
@Component
struct DataChoicePage_like {
  private items:Array<listItem>=[
    new listItem(0,1),
    new listItem(2,3),
    new listItem(4,5),
    new listItem(6,7)
  ]
  build() {
    Column() {
      Progressbar({value:100})

      Row(){
        Text('您喜欢的运动类型 :')
          .fontSize(25)
          .padding({left:20})
          .fontColor(Color.Black)
      }.width('100%')
      .padding({top:10,bottom:10})

      List({space: 10}){
        ForEach(
          this.items,
          (item:listItem)=>{
            ListItem(){
              this.showPic(item)
            }
          }
        )
      }.width('100%')
      .height('65%')

      Blank()
      bottomNextStep({index:4,hasNext:false})
    }
    .width('100%')
    .height('100%')
    .backgroundColor($r('app.color.background_color'))
  }
  @Builder
  showPic(l:listItem){
    Row(){
      ExerciseCard({index:l.index1})
        .padding({right:5})

      // Blank(15)
      ExerciseCard({index:l.index2})
        .padding({left:5})

    }
    .width('100%')
    .justifyContent(FlexAlign.Center)
  }
}
class listItem{
  index1:number
  index2:number

  constructor(index1:number,index2:number) {
    this.index1=index1
    this.index2=index2
  }
}
