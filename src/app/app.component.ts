import { Component } from '@angular/core';
import { BackgroundFxComponent } from './components/shared/background-fx/background-fx.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { ProcessComponent } from './components/process/process.component';
import { AiCloudComponent } from './components/ai-cloud/ai-cloud.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BackgroundFxComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ArchitectureComponent,
    ExpertiseComponent,
    ProcessComponent,
    AiCloudComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
