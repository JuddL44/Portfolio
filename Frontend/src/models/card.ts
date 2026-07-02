import { Link } from './link';
import { Icon } from './icon';

export interface Card {
  title: string;
  description: string;
  imgPath: string;
  icons: Icon[];
  links: Link[];
}
