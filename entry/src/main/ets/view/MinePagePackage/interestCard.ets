@Preview
@Component
export default struct interestCard{
  index:number = 0
  name:string = '跑步'
  colors:string[]=['#FFAA02','#FD600E',
    '#00968A','#A79884',
    '#FD4D12','#FFAA02']
  build(){
    Row(){
      Text(this.name)
        .fontSize(20)
        .fontColor(Color.White)
    }
    .backgroundColor(this.colors[this.index])
    .size({width:80,height:30})
    .justifyContent(FlexAlign.Center)
    .padding({left:10,right:10})
    .borderRadius(20)
  }
}