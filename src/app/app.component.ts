import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    // 各フォームコンポーネントをセットするためのFormGroup
    myForm: FormGroup;
    // 初期化時にFormGroupをインスタンス化
    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({});
    }
    // 子コンポーネントから受け取ったフォームを親のFormGroupに追加
    formInitialized(name: string, form: AbstractControl) {
        this.myForm.setControl(name, form);
    }
    showValue() {
        // 値はthis.formGroup.get('key').valueで取得することができる。
        console.log(`ユーザーID ... ${this.myForm.get('userId').value}`);
        console.log(`ユーザーネーム ... ${this.myForm.get('userName').value}`);
        console.log(`パスワード ... ${this.myForm.get('password').value}`);
    }
}
