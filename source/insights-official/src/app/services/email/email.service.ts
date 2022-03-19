import { Injectable } from '@angular/core';
import { IEmailModel } from 'src/app/models/email-model';
import './../../../assets/email/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _host = 'smtp.office365.com';
  private _userName = 'Vendor@insight.com.qa';
  private _password = 'Insight@123';
  private _toUserName = 'sales@insight.com.qa';

  constructor() { }

  public send(obj: IEmailModel) {
    debugger;

    Email.send({
      Host: this._host,
      Username: this._userName,
      Password: this._password,
      To: this._toUserName,
      From: this._userName,
      Subject: `Contact: ${obj.name} <${obj.email}>`,
      Body: obj.message
    }).then(message => {
      console.log('Email sent to sales@insight.com.qa');
      alert(message);
    });

  }

}
