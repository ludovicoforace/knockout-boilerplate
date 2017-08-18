import * as ko from 'knockout';

class Model {
  item: any;
  filter: any;
  match: any;
  activeItem = ko.observableArray(['Aardvark']);
  newItem = ko.observable('');

  constructor(params) {
    this.item = params.item;
    this.filter = params.filter;
    this.match = params.match;
  }

  addItem(): void {
    if (this.newItem() !== '') {
      this.filter('');
      this.item.unshift(`${this.newItem().charAt(0).toUpperCase()}${this.newItem().slice(1)}`);
      this.newItem('');
    }
  }
  removeItem(): void {
    this.filter('');
    this.activeItem([]);
    this.item.removeAll(this.activeItem());
  }
}

export function itemList() {
  ko.components.register('ko-item-list', {
    template: require('./itemList.html'),
    viewModel: {
      createViewModel: (params, componentInfo) => new Model(params)
    }
  });
}
