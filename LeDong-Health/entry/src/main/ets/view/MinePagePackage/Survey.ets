import web_webview from '@ohos.web.webview';

@Entry
@Component
struct Survey {
  webviewController: web_webview.WebviewController = new web_webview.WebviewController();

  aboutToAppear(){
    this.webviewController.loadUrl('https://www.wjx.cn/vm/rci65xr.aspx#')
  }
  build() {

    List(){
      ListItem(){
        Column() {

          Web({ src: 'https://www.wjx.cn/vm/rci65xr.aspx#', controller: this.webviewController})
        }
      }
      ListItem(){
        Row(){
          Web({ src: 'https://www.wjx.cn/vm/rci65xr.aspx#', controller: this.webviewController})
        }
        .width('90%')

      }
    }
    .height('200%')
  }

}