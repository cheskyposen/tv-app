class Previousepisode {
  href: string;

  constructor(href?) {
    this.href = href;
  }
}

class Nextepisode {
  href: string;

  constructor(href?) {
    this.href = href;
  }
}

class Link {
  href: string;

  constructor(href?) {
    this.href = href;
  }
}

export class Links {
  self: Link;
  previousepisode: Previousepisode;
  nextepisode: Nextepisode;

  constructor(args?) {
    this.self = args.self;
    this.previousepisode = args.previousepisode;
    this.nextepisode = args.nextepisode;
  }
}
