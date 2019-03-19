class Previousepisode {
  href: string;
}

class Nextepisode {
  href: string;
}

class Link {
  href: string;
}

export class Links {
  self: Link;
  previousepisode: Previousepisode;
  nextepisode: Nextepisode;
}
