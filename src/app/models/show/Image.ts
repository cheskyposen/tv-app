export class Image {
  medium: string;
  original: string;

  constructor(args?) {
    if (!args.medium) {
      this.medium = 'https://via.placeholder.com/180x252';
    } else {
      this.medium = args.medium;
    }
    this.original = args.original;
  }
}
