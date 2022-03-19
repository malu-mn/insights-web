import { Component, OnInit } from '@angular/core';
import { IEmailModel } from './../../models/email-model';
import { EmailService } from './../../services/email/email.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private readonly _emailService: EmailService) { }

  ngOnInit(): void {
  }

  public sendEmail(obj: IEmailModel): void {
    this._emailService.send(obj)
  }

}
