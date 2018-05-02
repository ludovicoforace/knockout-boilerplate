import * as ko from 'knockout';

class ViewModel {
  private item: any;
  private filter: any;
  private match: any;
  private activeItem = ko.observableArray(['Aardvark']);
  private newItem = ko.observable('');

  constructor(params) {
    this.item = params.item;
    this.filter = params.filter;
    this.match = params.match;
  }

  private addItem(): void {
    if (this.newItem() !== '') {
      this.filter('');
      this.item.unshift(`${this.newItem().charAt(0).toUpperCase()}${this.newItem().slice(1)}`);
      this.newItem('');
    }
  }
  private removeItem(): void {
    this.filter('');
    this.item.removeAll(this.activeItem());
    this.activeItem([]);
  }
}

export function itemList() {
  ko.components.register('ko-item-list', {
    template: require('./itemList.html'),
    viewModel: {
      createViewModel: (params, componentInfo) => new ViewModel(params)
    }
  });
}
