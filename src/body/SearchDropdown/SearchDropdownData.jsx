export class DropdownItem {
  constructor(label, id) {
    this.label = label;
    this.id = id;
  }
}

export const SearchItems = [
  new DropdownItem('Realese date', 'releaseDate'),
  new DropdownItem('Film Name', 'name'),]