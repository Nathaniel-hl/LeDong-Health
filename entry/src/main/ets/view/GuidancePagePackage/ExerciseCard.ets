@Preview
@Component
export default struct ExerciseCard{
  private exercises:exercise[]=[
    new exercise('行走',$r('app.media.walkPic')),
    new exercise('跑步',$r("app.media.exercise_run_pic")),
    new exercise('游泳',$r('app.media.swimPic')),
    new exercise('骑行',$r('app.media.bicyclePic')),
    new exercise('舞蹈',$r('app.media.dancePic')),
    new exercise('瑜伽',$r('app.media.exercise_yoga_pic')),
    new exercise('冥想',$r('app.media.exercise_meditation_pic')),
    new exercise('举重',$r("app.media.exercise_weightlifting_pic"))
  ]
  index:number = 2;

  @State backgroundPic:Resource=$r('app.media.card_false')

  @State textColor:Color=Color.Black

  @State isChoice:Boolean = false

  build(){
    Column(){
      Blank()
      //运动图片
      Image(this.exercises[this.index].image)
        .padding({top:30})
        .autoResize(true)
        .size({height:'65%'})
        .padding({left:10,right:10})
        .interpolation(ImageInterpolation.Medium)
        .objectFit(ImageFit.Fill)


      //描述
      Row(){
        Text(this.exercises[this.index].name)
          .fontSize(23)
          .padding({left:10})
          .fontColor(this.textColor)
        Blank()
      }.width('100%')
      .padding({bottom:10})

    }.width('150')
    .height('150')
    .backgroundImage(this.backgroundPic)
    .backgroundImageSize({height:'130%',width:'130%'})
    .backgroundImagePosition({x:-50,y:-40})
    .borderRadius(30)
    .onClick(()=>{
      if(this.textColor==Color.Black){
        this.textColor=Color.White
        this.backgroundPic=$r('app.media.card_true')
        this.isChoice=true
      }else{
        this.isChoice=false
        this.backgroundPic=$r('app.media.card_false')
        this.textColor=Color.Black
      }

    })

  }
}
class exercise{
  name:string
  image:Resource

  constructor(name:string,image:Resource) {
    this.name=name
    this.image=image
  }
}