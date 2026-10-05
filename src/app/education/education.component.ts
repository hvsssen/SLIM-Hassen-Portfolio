import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Degree {
  id: number;
  period: string;
  degree: string;
  school: string;
  schoolUrl: string;
  location: string;
  status?: string;
  description: string;
  /** CSS class that sets the timeline marker colour. */
  accentClass: string;
}

interface EarlierStudy {
  id: number;
  period: string;
  label: string;
  school: string;
  schoolUrl: string;
  note?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  degrees: Degree[] = [
    {
      id: 1,
      period: '2026 - 2027',
      degree: 'Master 2 Ingénierie de la Santé, parcours MITI',
      school: 'Université Grenoble Alpes',
      schoolUrl: 'https://www.univ-grenoble-alpes.fr/',
      location: 'Grenoble, France',
      status: 'In progress',
      description:
        'Multidisciplinary programme (MITI: Models, Innovation, Technologies and Imaging) at the intersection of modelling, computing, data and AI, and their applications in healthcare.',
      accentClass: 'accent-current'
    },
    {
      id: 2,
      period: '2023 - 2026',
      degree: 'Engineering Degree in Computer Science / Software Engineering',
      school: "École Nationale d'Ingénieurs de Tunis (ENIT)",
      schoolUrl: 'http://www.enit.rnu.tn/',
      location: 'Tunis, Tunisia',
      status: 'Graduated',
      description:
        'Engineering curriculum in software engineering: software architecture, distributed and data-intensive systems, machine learning and cloud engineering. Degree completed and validated in September 2026.',
      accentClass: 'accent-done'
    }
  ];

  earlierStudies: EarlierStudy[] = [
    {
      id: 1,
      period: '2022 - 2023',
      label: 'Second year of preparatory classes',
      school: 'IPEIEM, Monastir',
      schoolUrl: 'http://www.ipeiem.rnu.tn/',
      note: 'Ranked 378 in the national entrance exam for engineering schools.'
    },
    {
      id: 2,
      period: '2021 - 2022',
      label: 'First year of preparatory classes (Mathematics & Physics)',
      school: 'IPEIN, Nabeul',
      schoolUrl: 'https://ipein.rnu.tn/'
    },
    {
      id: 3,
      period: '2020 - 2021',
      label: 'Baccalaureate in Mathematics',
      school: 'Lycée 2 Mars 1934, Ksar Hellal',
      schoolUrl: 'https://www.facebook.com/lycee2mars1934ksarhellal/'
    }
  ];
}
