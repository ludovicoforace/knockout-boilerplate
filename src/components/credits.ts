import * as ko from 'knockout';
import * as moment from 'moment';

class Model {
  getYear(): string {
    return moment().format('YYYY');
  }
}

export function credits() {
  ko.components.register('ko-credits', {
    template: require('./credits.html'),
    viewModel: {
      createViewModel: () => new Model()
    }
  });
}
