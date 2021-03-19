export class DropdownItem {
  constructor(label, id) {
    this.label = label;
    this.id = id;
  }
}

export const SearchItems = [
  new DropdownItem('Realese date', 1),
  new DropdownItem('Rating', 2),
  new DropdownItem('Film Name', 3),]