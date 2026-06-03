import { Component, signal, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Card } from './models/card';
import { Link } from './models/link';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  // ─── Personal ────────────────────────────────────────────────────────

  protected readonly title = signal('Judd Lasater');
  header: string = 'Judd Lasater';
  description: string = 'Full-Stack Developer | .NET · Angular · Azure';
  contact: string = 'Contact Me';
  email: string = 'JuddLasater.dev@gmail.com';
  phone: string = '(+1) 806-777-5004';
  linkedIn: string = 'https://www.linkedin.com/in/judd-lasater-54a29a38a/';
  github: string = 'https://github.com/JuddL44/';

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
  focusedCardImg: string = '';
  focusedCardLinks: Link[] = [];
  isProjectCardFocused = false;
  isCertCardFocused = false;

  // ─── Projects ────────────────────────────────────────────────────────

  private readonly baseProjects: Card[] = [
    {
      title: 'Judd Fashion',
      description: 'Full-stack ecommerce platform with JWT auth and real-time cart management',
      dated: new Date('2026-04-10'),
      imgPath: 'images/project_jf.png',
      links: [
        {
          title: 'Deployed Front End',
          url: 'https://purple-rock-0b231a60f.1.azurestaticapps.net/',
          iconPath: 'splash/jf_fe.png',
        },
        {
          title: 'Deployed API (Takes time to boot up)',
          url: 'https://juddfashion-api-bghydwbue2hff8b9.centralus-01.azurewebsites.net/',
          iconPath: 'splash/jf_api.png',
        },
      ],
    },
    {
      title: "Cauldron's Rift",
      description: 'Designed, developed, and deployed a steam game from concept to production',
      dated: new Date('2024-04-25'),
      imgPath: 'images/project_cauldron.png',
      links: [
        {
          title: 'Steam Page',
          url: 'https://store.steampowered.com/app/3093880/Cauldrons_Rift/',
          iconPath: 'splash/cr_steam.png',
        },
        {
          title: 'Demo Trailer',
          url: 'https://www.youtube.com/watch?v=Zk-Stk0703c',
          iconPath: 'splash/cr_demo.png',
        },
      ],
    },
    {
      title: 'Chatroom',
      description:
        'A real-time chat application built with Angular, ASP.NET Core, and SignalR, following CQRS principles.',
      dated: new Date('2026-06-03'),
      imgPath: 'images/project_chatroom.png',
      links: [
        {
          title: 'GitHub Repo',
          url: 'https://github.com/JuddL44/Chatroom',
          iconPath: 'splash/cr_ln.png',
        },
      ],
    },
    {
      title: 'Realm Mapmaker',
      description:
        'One of the creators chosen by Mojang to design, develop, and publish custom maps featured on Minecraft Realms (Java Edition)',
      dated: new Date('2020-01-13'),
      imgPath: 'images/project_realms.png',
      links: [
        {
          title: 'First Mojang Blog Post',
          url: 'https://tinyurl.com/y7cnf4pk',
          iconPath: 'splash/rm_bp.png',
        },
        {
          title: 'Youtuber Playing My Map',
          url: 'https://youtu.be/V-CBgxvG86I',
          iconPath: 'splash/rm_yt.png',
        },
        {
          title: '11,000,000 Subscriber Youtuber Playing My Map',
          url: 'https://youtu.be/7m8J0iC8Vvg',
          iconPath: 'splash/rm_cs.png',
        },
        {
          title: 'Java Creator Wiki',
          url: 'https://minecraft.wiki/w/Java_Realms_Content_Creator_Program',
          iconPath: 'splash/rm_wi.png',
        },
      ],
    },
    {
      title: 'Portfolio Site',
      description: "You're looking at it, this portfolio was built from scratch using Angular.",
      dated: new Date('2026-04-17'),
      imgPath: 'images/project_portfolio.png',
      links: [
        {
          title: 'Deployed Domain',
          url: 'https://JuddLasater.com',
          iconPath: 'splash/port_img.png',
        },
      ],
    },
  ];

  private readonly baseCertificates: Card[] = [
    {
      title: 'AZ-900',
      description: 'Full-stack ecommerce platform with JWT auth and real-time cart management',
      dated: new Date('2025-09-16'),
      imgPath: 'images/project_azure.png',
      links: [
        {
          title: 'ID: 6FCD4B45F0D3C692',
          url: 'https://learn.microsoft.com/api/credentials/share/en-us/JUDDL-8545/6FCD4B45F0D3C692?sharingId=72B5AD70CDCBE5B2',
          iconPath: 'splash/cert_backsplash.png',
        },
      ],
    },
    {
      title: 'Mastering TypeScript',
      description: 'Full-stack ecommerce platform with JWT auth and real-time cart management',
      dated: new Date('2026-04-03'),
      imgPath: 'images/project_ts.png',
      links: [
        {
          title: 'ID: UC-e762ff3f-b4ab-492c-9de7-2fc1d99248fc',
          url: 'https://www.udemy.com/certificate/UC-e762ff3f-b4ab-492c-9de7-2fc1d99248fc/',
          iconPath: 'splash/cert_backsplash.png',
        },
      ],
    },
    {
      title: 'RESTful Web Api',
      description: 'Full-stack ecommerce platform with JWT auth and real-time cart management',
      dated: new Date('2025-09-04'),
      imgPath: 'images/project_api.png',
      links: [
        {
          title: 'ID: UC-feccb168-53ef-41b2-bc7a-762e495b51c8',
          url: 'https://www.udemy.com/certificate/UC-feccb168-53ef-41b2-bc7a-762e495b51c8/',
          iconPath: 'splash/cert_backsplash.png',
        },
      ],
    },
    {
      title: 'Complete C# Masterclass',
      description: 'Full-stack ecommerce platform with JWT auth and real-time cart management',
      dated: new Date('2025-08-22'),
      imgPath: 'images/project_csharp.png',
      links: [
        {
          title: 'ID: UC-4c895c5f-58e3-4606-83a6-31ed1cafff37',
          url: 'https://www.udemy.com/certificate/UC-4c895c5f-58e3-4606-83a6-31ed1cafff37/',
          iconPath: 'splash/cert_backsplash.png',
        },
      ],
    },
  ];

  projects: Card[] = [];
  certs: Card[] = [];

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
    const projectCopies = Math.max(2, Math.ceil(maxWidth / (this.baseProjects.length * cardWidth)));
    const certCopies = Math.max(2, Math.ceil(maxWidth / (this.baseProjects.length * cardWidth)));
    this.projects = Array(projectCopies).fill(this.baseProjects).flat();
    this.certs = Array(certCopies).fill(this.baseCertificates).flat();
  }

  // ─── Focus ────────────────────────────────────────────────────────────

  focusProject(card: Card) {
    this.isProjectCardFocused = false;
    this.isCertCardFocused = false;
    if (card.title === this.focusedCardTitle) {
      this.focusedCardTitle = 'empty';
    } else {
      this.focusedCardTitle = card.title;
      this.focusedCardDescription = card.description;
      this.focusedCardTimestamp = this.timeSince(card.dated);
      this.focusedCardLinks = card.links;
      this.focusedCardImg = card.imgPath;
      this.isProjectCardFocused = true;
    }
  }

  focusCert(card: Card) {
    this.isCertCardFocused = false;
    this.isProjectCardFocused = false;
    if (card.title === this.focusedCardTitle) {
      this.focusedCardTitle = 'empty';
    } else {
      this.focusedCardTitle = card.title;
      this.focusedCardDescription = card.description;
      this.focusedCardTimestamp = this.timeSince(card.dated);
      this.focusedCardLinks = card.links;
      this.focusedCardImg = card.imgPath;
      this.isCertCardFocused = true;
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

  private typeJobId = 0;
  clickableContact = false;
  clickLink = 'invalid';

  async smoothType(text: string, interval: number, clickable: boolean) {
    const jobId = ++this.typeJobId;
    this.contact = '';
    this.clickableContact = clickable;
    if (this.clickableContact) {
      this.clickLink = text;
    } else {
      this.clickLink = 'invalid';
    }
    for (const l of text) {
      if (jobId !== this.typeJobId) return;
      this.contact += l;
      await this.sleep(interval);
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  visitLink() {
    if (this.clickLink === 'invalid') return;
    window.open(this.clickLink, '_blank');
  }

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
