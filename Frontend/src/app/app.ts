import { Component, signal, HostListener, OnInit, OnDestroy, inject } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Card } from '../models/card';
import { Link } from '../models/link';
import { Certificate } from '../models/certificate';
import { HttpHeaders } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
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

  bgColor: string = `linear-gradient(90deg, #071013 0%, #EB5160 48%, #B7999C 100%)`;
  bg1Opacity = 1;
  bg2Opacity = 0;
  bg3Opacity = 0;
  bg4Opacity = 0;

  // ─── Projects ────────────────────────────────────────────────────────

  private readonly baseProjects: Card[] = [];
  projects: Card[] = [
    {
      title: 'Chatroom',
      description:
        'A real-time chat application built with Angular, ASP.NET Core, and SignalR, following CQRS principles.',
      imgPath: 'images/chatroom.png',
      icons: [
        {
          title: 'Angular',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        },
        {
          title: 'ASP.NET Core',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
        },
        {
          title: 'SQL Server',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
        },
      ],
      links: [
        {
          title: 'View Code',
          iconPath: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/external-link.svg',
          url: 'https://github.com/JuddL44/Chatroom',
        },
      ],
    },
    {
      title: 'Judd Fashion',
      description:
        'A modern e-commerce platform built with Angular and ASP.NET Core, featuring user authentication, shopping cart functionality, and real-time inventory management.',
      imgPath: 'images/juddfashion.png',
      icons: [
        {
          title: 'Angular',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        },
        {
          title: 'ASP.NET Core',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
        },
        {
          title: 'SQL Server',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
        },
      ],
      links: [
        {
          title: 'View Code',
          iconPath: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/external-link.svg',
          url: 'https://github.com/JuddL44/JuddFashion',
        },
      ],
    },
    {
      title: "Cauldron's Rift",
      description:
        'A fast-paced 2d online platformer built with Unity and Mirror networking, focused on responsive movement and real-time multiplayer interaction. Published on Steam with integrated online features.',
      imgPath: 'images/cauldronsrift.png',
      icons: [
        {
          title: 'Unity',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
        },
        {
          title: 'C#',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        },
        {
          title: 'Mirror',
          iconPath: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/lan.svg',
        },
        {
          title: 'Steam',
          iconPath: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/steam.svg',
        },
      ],
      links: [
        {
          title: 'View Steam Page',
          iconPath: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/external-link.svg',
          url: 'https://store.steampowered.com/app/3093880/Cauldrons_Rift/',
        },
      ],
    },
    {
      title: 'Minecraft Realms Freelancer',
      description: "Develop custom minigames for Mojang Studio's live minecraft realms service.",
      imgPath: 'images/realms.png',
      icons: [
        {
          title: 'Mojang Studios',
          iconPath: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mojangstudios.svg',
        },
        {
          title: 'MCFunction',
          iconPath: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/braces.svg',
        },
        {
          title: 'Collaborative Projects',
          iconPath: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/user-circle.svg',
        },
      ],
      links: [
        {
          title: "Blog Post ('Guesshead')",
          iconPath: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/book.svg',
          url: 'https://web.archive.org/web/20200701171713/https://www.minecraft.net/en-us/article/new-java-realms--resorts--rematches--and-rumbling-raids',
        },
      ],
    },
    {
      title: 'JuddLasater.com',
      description:
        "You're looking at it. This portfolio was built with Angular to showcase my projects, skills, and development work.",
      imgPath: 'images/portfolio.png',
      icons: [
        {
          title: 'Angular',
          iconPath:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        },
        {
          title: 'GitHub Actions',
          iconPath: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubactions.svg',
        },
      ],
      links: [
        {
          title: 'View Code',
          iconPath: 'https://cdn.jsdelivr.net/npm/lucide-static/icons/external-link.svg',
          url: 'https://github.com/JuddL44/portfolio/',
        },
      ],
    },
  ];
  certs: Certificate[] = [
    {
      title: 'AZ-900',
      url: 'https://learn.microsoft.com/en-us/users/juddl-8545/credentials/6fcd4b45f0d3c692',
      imgPath: 'images/azure.png',
    },
    {
      title: 'Mastering TypeScript',
      url: 'https://www.udemy.com/certificate/UC-e762ff3f-b4ab-492c-9de7-2fc1d99248fc/',
      imgPath: 'images/azure.png',
    },
    {
      title: 'Complete C# Masterclass',
      url: 'https://www.udemy.com/certificate/UC-4c895c5f-58e3-4606-83a6-31ed1cafff37/',
      imgPath: 'images/azure.png',
    },
    {
      title: 'RESTful Web Api - The Complete Guide',
      url: 'https://www.udemy.com/certificate/UC-feccb168-53ef-41b2-bc7a-762e495b51c8/',
      imgPath: 'images/azure.png',
    },
  ];

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

  smoothStep(t: number, min: number, max: number) {
    const x = Math.min(Math.max((t - min) / (max - min), 0), 1);
    return x;
  }

  visitLink() {
    if (this.clickLink === 'invalid') return;
    window.open(this.clickLink, '_blank');
  }
}
