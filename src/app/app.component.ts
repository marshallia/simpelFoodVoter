import { Component } from '@angular/core';

interface Message {
  id: number;
  createdAt: Date;
  titleMessage: string;
  vote: number;
  body: string;
  imageMessage: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'belajar-angular';
  message = 'Hello May';
  vote: number;
  titleMessage: string;
  image: string ;
  currentImage: string;
  imageMessage: string;
  messageList: Message[] = [];

  leftImage(i: number) {
    this.currentImage = this.imageMessage[i - 1];
  }

  rightImage(i: number) {
    this.currentImage = this.imageMessage[i + 1];
  }

  onRemove(id: number) {
    const index = this.messageList.findIndex(message => message.id === id);
    this.messageList.splice(index, 1);
  }

  onIncrease(id: number) {
    const index = this.messageList.findIndex(message => message.id === id);
    console.log(index);
    this.messageList[index].vote = this.messageList[index].vote + 1;
  }

  onDecrease(id: number) {
    const index = this.messageList.findIndex(message => message.id === id);
    console.log(index);
    this.messageList[index].vote = this.messageList[index].vote - 1;
  }

  showAlert(): void {
    console.log(this.imageMessage);
    this.messageList.push({
          id: this.messageList.length + 1,
          createdAt: new Date(),
          body: this.message,
          vote: 0,
          titleMessage: this.titleMessage,
          imageMessage: this.imageMessage.split(';')
        }
    );
  }

}
