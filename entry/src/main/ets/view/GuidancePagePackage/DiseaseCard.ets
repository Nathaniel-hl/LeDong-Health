@Preview
@Component
export default struct DiseaseCard{
  private diseases:disease[]=[
    new disease("过往病史",$r('app.media.pastMedicalHistoryPic')),
    new disease("抑郁",$r('app.media.depressedPic')),
    new disease("肥胖",$r('app.media.obesityPic')),
    new disease("糖尿病",$r('app.media.hyperglycemiaPic')),
    new disease("偏头痛",$r("app.media.disease_headache_pic")),
    new disease("心脏病",$r('app.media.heartDiseasePic')),
    new disease("骨质疏松",$r('app.media.disease_bone_pic')),
    new disease("消化不良",$r("app.media.disease_indigestion_pic"))
  ]
  index:number = 2;

  @State backgroundPic:Resource=$r('app.media.card_false')

  @State textColor:Color=Color.Black

  @State isChoice:Boolean = false

  build(){
    Column(){
      Blank()
      Image(this.diseases[this.index].image)
        .padding({top:30})
        .autoResize(true)
        .size({height:'65%'})
        .padding({left:10,right:10})
        .objectFit(ImageFit.Fill)


      Row(){
        Text(this.diseases[this.index].name)
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
class disease{
  name:string
  image:Resource

  constructor(name:string,image:Resource) {
    this.name=name
    this.image=image
  }
}