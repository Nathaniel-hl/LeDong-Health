import searchHeader from 'ets/view/HomePagePackage/searchHeader'
import bottomChooser from '../../bottomChooser'
//import ExerciseCard from '../GuidancePagePackage/exerciseCard'
import ExerciseDataCard from './ExerciseDataCard'
import exerciseRecommendCard from './exerciseRecommendCard'

@Entry
@Component
struct ExercisePage2 {
  @State message: string = 'Hello World'

  //提示消息(默认为第一个)
  remindMessages:string[]=['运动前热身非常重要！',
    '运动后拉伸非常重要!',
    '运动时小心周围的人，防止撞伤！'
  ]
  @State remindMessage:string = this.remindMessages[0]
  @State messageNum:number = this.remindMessage.length
  @State messageIndex: number = 0

  //运动选择数组与运动选择(默认为第一个)
  exerciseChoices:string[]=['步行','跑步','舞蹈','游泳','骑行']
  @State curExerciseChoice:string = this.exerciseChoices[0]


  build() {
    Column() {
      //首页，搜索栏
      Row({ space: 20 }) {
        Text('运动')
          .fontSize(40)
          .padding({ left: 10 })
          .opacity(0.9)
        searchHeader()
      }
      .height('10%')
      .alignItems(VerticalAlign.Bottom)

      //运动选择按钮
      List({space:20}){
        ForEach(this.exerciseChoices,(exerciseChoice:string)=>{
          ListItem(){
            Button(exerciseChoice)
              .size({width:80})
              .fontColor(Color.Black)
              .fontSize(20)
              .opacity(0.7)
              .fontWeight(600)
              .backgroundColor(this.curExerciseChoice==exerciseChoice?$r('app.color.themes_color'):Color.White)
              .onClick(()=>{
                this.curExerciseChoice=exerciseChoice
              })
          }
        })
      }.height('5%')
      .width('90%')
      .listDirection(Axis.Horizontal)

      //运动数据卡片
      ExerciseDataCard({name:this.curExerciseChoice,num:23})
        .padding({top:10})

      Blank()

      //消息提示
      Row(){
        Image('/view/ExercisePagePackage/trumpetPic.png')
          .objectFit(ImageFit.Fill)
          .height('60%')
          .interpolation(ImageInterpolation.Medium)

        Text(this.remindMessage).fontSize(20)
          .padding({left:10})
          .opacity(0.9)
          .onClick(()=>{
            this.messageIndex=this.messageIndex%this.messageNum
            this.remindMessage=this.remindMessages[this.messageIndex]
            this.messageIndex++
          })

      }
      .width('90%')
      .height('5%')
      .borderRadius(20)
      .backgroundColor(Color.White)

      //打卡计划推荐+每日打卡领金币
      Row(){
        Text('打卡计划推荐   ')
          .fontSize(25)
          .padding({left:'5%'})

        Text('每日打卡领金币')
          .fontSize(20)
          .opacity(0.6)
      }
      .height('5%')
      .width('100%')
      .alignItems(VerticalAlign.Bottom)

      //健康数据图片
      List({space: 10}){
        ListItem(){
          exerciseRecommendCard({index:0})
        }.padding({left:10})
        ListItem(){
          exerciseRecommendCard({index:1})
        }
        ListItem(){
          exerciseRecommendCard({index:2})
        }
      }.width('100%')
      .listDirection(Axis.Horizontal)
      .height('20%')

      //底部页面跳转
      bottomChooser({isExercisePage:true})

    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_color'))
  }
}