import * as ko from 'knockout';
import * as dayjs from 'dayjs';

class ViewModel {
  private getYear(): string {
    return dayjs().format('YYYY');
  }
}

export function credits() {
  ko.components.register('ko-credits', {
    template: require('./credits.html'),
    viewModel: {
      createViewModel: () => new ViewModel()
    }
  });
}
