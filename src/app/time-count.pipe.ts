import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any) {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const seconds = Math.abs((value - todayWithNoTime) / 1000);

    const interval = Math.abs(Math.round(seconds / 31536000));

    if (interval >= 1) {
      return interval + ' years';
    }
    interval = Math.abs(Math.round(seconds / 2592000));
    if (interval >= 1) {
      return interval + ' months';
    }
    interval = Math.abs(Math.round(seconds / 86400));
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.abs(Math.round(seconds / 3600));
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.abs(Math.round(seconds / 60));
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }