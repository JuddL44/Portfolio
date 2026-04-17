import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Judd Lasater');

  header: string = 'Judd Lasater';
  description: string = 'Full-Stack Developer | .NET · Angular · Azure';
  bgColor: string = `linear-gradient(90deg, hsla(0, 67%, 8%, 1) 0%, hsla(26, 92%, 10%, 1) 48%, hsla(323, 76%, 8%, 1) 100%)`;

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;
    if (progress < 0.33) {
      this.bgColor = 'rgb(15, 5, 8)';
    } else if (progress < 0.66) {
      this.bgColor = 'rgb(25, 10, 15)';
    } else {
      this.bgColor = 'rgb(20, 15, 5)';
    }
  }
}
