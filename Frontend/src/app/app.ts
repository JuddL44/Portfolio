import { Component, signal, HostListener, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Card } from './models/card';
import { Link } from './models/link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  // ─── Branding ────────────────────────────────────────────────────────

  protected readonly title = signal('Judd Lasater');
  header: string = 'Judd Lasater';
  description: string = 'Full-Stack Developer | .NET · Angular · Azure';

  // ─── Background ──────────────────────────────────────────────────────

  bgColor: string = `linear-gradient(90deg, hsla(0, 67%, 8%, 1) 0%, hsla(26, 92%, 10%, 1) 48%, hsla(323, 76%, 8%, 1) 100%)`;
  bg1Opacity = 1;
  bg2Opacity = 0;
  bg3Opacity = 0;
  bg4Opacity = 0;

  // ─── Focused Card ────────────────────────────────────────────────────

  focusedCardTitle: string = '';
  focusedCardDescription: string = '';
  focusedCardTimestamp: string = '';
  focusedCardLinks: Link[] = [];
  isCardFocused = false;

  // ─── Projects ────────────────────────────────────────────────────────

  private readonly baseProjects: Card[] = [
    {
      title: 'Judd Fashion',
      description: 'Full-stack ecommerce platform with JWT auth and real-time cart management',
      dated: new Date('2026-04-10'),
      links: [
        {
          title: 'Deployed Front End',
          url: 'https://purple-rock-0b231a60f.1.azurestaticapps.net/',
        },
        {
          title: 'Deployed API (Takes time to boot up)',
          url: 'https://juddfashion-api-bghydwbue2hff8b9.centralus-01.azurewebsites.net/',
        },
      ],
    },
    {
      title: "Cauldron's Rift",
      description: 'Designed, developed, and deployed a steam game from concept to production',
      dated: new Date('2024-04-25'),
      links: [
        {
          title: 'Steam Page',
          url: 'https://store.steampowered.com/app/3093880/Cauldrons_Rift/',
        },
        {
          title: 'Demo Trailer',
          url: 'https://www.youtube.com/watch?v=Zk-Stk0703c',
        },
      ],
    },
    {
      title: 'Realm Mapmaker',
      description:
        'One of the creators chosen by Mojang to design, develop, and publish custom maps featured on Minecraft Realms (Java Edition)',
      dated: new Date('2020-01-13'),
      links: [
        {
          title: 'First Mojang Blog Post',
          url: 'https://tinyurl.com/y7cnf4pk',
        },
        {
          title: 'Youtuber Playing My Map',
          url: 'https://youtu.be/V-CBgxvG86I',
        },
        {
          title: '11,000,000 Subscriber Youtuber Playing My Map',
          url: 'https://youtu.be/7m8J0iC8Vvg',
        },
        {
          title: 'Java Creator Wiki',
          url: 'https://minecraft.wiki/w/Java_Realms_Content_Creator_Program',
        },
      ],
    },
    {
      title: 'Portfolio Site',
      description: "You're looking at it, this portfolio was built from scratch using Angular.",
      dated: new Date('2026-04-17'),
      links: [],
    },
  ];

  projects: Card[] = [];

  // ─── Lifecycle ───────────────────────────────────────────────────────

  private resizeHandler = () => this.fillMarquee();

  ngOnInit(): void {
    this.fillMarquee();
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
  }

  // ─── Marquee ─────────────────────────────────────────────────────────

  private fillMarquee(): void {
    const cardWidth = 350 + 32;
    const maxWidth = Math.max(window.innerWidth, screen.width) * 3;
    const copies = Math.max(2, Math.ceil(maxWidth / (this.baseProjects.length * cardWidth)));

    this.projects = Array(copies).fill(this.baseProjects).flat();
  }

  // ─── Project Focus ───────────────────────────────────────────────────

  focusProject(card: Card) {
    if (card.title === this.focusedCardTitle) {
      this.isCardFocused = false;
      this.focusedCardTitle = 'empty';
    } else {
      this.focusedCardTitle = card.title;
      this.focusedCardDescription = card.description;
      this.focusedCardTimestamp = this.timeSince(card.dated);
      this.focusedCardLinks = card.links;
      this.isCardFocused = true;
    }
  }

  // ─── Scroll Handler ──────────────────────────────────────────────────

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    this.bg1Opacity = 0;
    this.bg2Opacity = 0;
    this.bg3Opacity = 0;
    this.bg4Opacity = 0;

    if (progress < 0.25) {
      this.bg1Opacity = 1;
      this.bg2Opacity = this.smoothStep(progress, 0.15, 0.25);
    } else if (progress < 0.5) {
      this.bg2Opacity = 1;
      this.bg3Opacity = this.smoothStep(progress, 0.4, 0.5);
    } else if (progress < 0.85) {
      this.bg3Opacity = 1;
      this.bg4Opacity = this.smoothStep(progress, 0.65, 0.75);
    } else {
      this.bg4Opacity = 1;
    }
  }

  // ─── Utilities ───────────────────────────────────────────────────────

  smoothStep(t: number, min: number, max: number) {
    const x = Math.min(Math.max((t - min) / (max - min), 0), 1);
    return x;
  }

  timeSince(date: Date): string {
    const now = new Date();

    let years = now.getFullYear() - date.getFullYear();
    let months = now.getMonth() - date.getMonth();
    let days = now.getDate() - date.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const parts: string[] = [];

    if (years > 0) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
    if (years === 0 && months === 0) {
      parts.push(`${days} day${days !== 1 ? 's' : ''}`);
    }

    return parts.join(' ');
  }
}
