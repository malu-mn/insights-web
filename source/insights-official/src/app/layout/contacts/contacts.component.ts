import { Component, OnInit } from '@angular/core';
import { IEmailModel, EmailStatus } from './../../models/email-model';
import { EmailService } from './../../services/email/email.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private _emailStatus: EmailStatus = EmailStatus.NotStarted;

  public get emailStatus(): string {
    return EmailStatus[this._emailStatus];
  }

  constructor(private readonly _emailService: EmailService) { }

  ngOnInit(): void {
  }

  public sendEmail(obj: IEmailModel): void {
    this._emailStatus = EmailStatus.InProgress;
    this._emailService.send(obj, this.updateEmailStatus, this);
  }

  private updateEmailStatus(message: string, thisComponent: ContactsComponent): void {
    if (message === 'OK') {
      thisComponent._emailStatus = EmailStatus.CompletedSuccessfully;
    } else {
      thisComponent._emailStatus = EmailStatus.Failed;
      console.log(message);
    }
  }
}
