import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  /** Omitted when the repository has no issue date for that credential. */
  date?: string;
  url: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  certifications: Certification[] = [
    {
      id: 1,
      name: 'Building RAG Agents with LLMs',
      issuer: 'NVIDIA',
      date: 'Dec 2025',
      url: 'https://learn.nvidia.com/certificates?id=n5LcJSYjSDWhacA2IBlcwg'
    },
    {
      id: 2,
      name: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      date: 'Dec 2025',
      url: 'https://learn.nvidia.com/certificates?id=-Nx_DfFLS1uNMDbAv04mPg'
    },
    {
      id: 3,
      name: 'Building Transformer-Based Natural Language Processing Applications',
      issuer: 'NVIDIA',
      date: 'Dec 2025',
      url: 'https://learn.nvidia.com/certificates?id=ZCZ6YTDSR6apPInR8XbuPg'
    },
    {
      id: 4,
      name: 'Introduction to Transformer-Based Natural Language Processing',
      issuer: 'NVIDIA',
      date: 'Dec 2025',
      url: 'https://learn.nvidia.com/certificates?id=QLY5gJKuTjKcoBV7Y9P-9g'
    },
    {
      id: 5,
      name: 'Building RAG Apps Using MongoDB',
      issuer: 'MongoDB',
      date: 'Dec 2025',
      url: 'https://www.credly.com/badges/c2bfbd98-3de8-4ca2-bb28-7a9288431b46/linked_in_profile'
    },
    {
      id: 6,
      name: 'CCNA: Introduction to Networks',
      issuer: 'Cisco',
      url: 'https://www.credly.com/badges/41595ebc-5c8d-4e07-8ffe-b8c5c4379e00/linked_in?t=squyq5'
    },
    {
      id: 7,
      name: 'Git & GitHub',
      issuer: '365 Data Science',
      url: 'https://learn.365datascience.com/certificates/CC-2199F467D2/'
    },
    {
      id: 8,
      name: 'DevOps Basics',
      issuer: 'Microsoft',
      url: 'https://learn.microsoft.com/fr-fr/users/hassenslim-9939/achievements/yq3bz4pr?ref=https%3A%2F%2Fwww.linkedin.com%2F'
    }
  ];
}
