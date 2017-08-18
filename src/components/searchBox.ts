import * as ko from 'knockout';

class Model {
  item: any;
  filter: any;
  match: any;

  constructor(params) {
    this.item = params.item;
    this.filter = params.filter;
    this.match = params.match;
  }

  searchCriteria() {
    const search = this.filter().toLowerCase();
    this.match(ko.utils.arrayFilter(this.item(), (x: any) => x.toLowerCase().indexOf(search) >= 0));
    return this.match;
  }
}

export function searchBox() {
  ko.components.register('ko-search-box', {
    template: require('./searchBox.html'),
    viewModel: {
      createViewModel: (params, componentInfo) => new Model(params)
    }
  });
}
