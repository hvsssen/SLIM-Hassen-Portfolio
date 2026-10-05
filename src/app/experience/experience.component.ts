import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Highlight {
  value: string;
  label: string;
}

interface Experience {
  id: number;
  role: string;
  organization: string;
  organizationUrl?: string;
  context: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  highlights?: Highlight[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      id: 1,
      role: 'Software Engineering / R&D Intern',
      organization: 'IMT Atlantique, Lab-STICC (UMR CNRS 6285)',
      organizationUrl: 'https://labsticc.fr/',
      context: 'Final engineering internship (PFE), in collaboration with SHOM',
      period: '2026',
      location: 'Brest, France',
      summary:
        'deSEAsion is a geospatial decision-support platform. Its backend had grown hard to maintain and could not ingest large datasets fast enough, so my mission was to redesign it around a clearer architecture and make large-scale ingestion viable.',
      bullets: [
        'Redesigned the backend architecture around Clean Architecture and a CQRS-inspired separation between commands, queries and handlers.',
        'Built authentication, authorization and geospatial API capabilities on FastAPI, PostgreSQL/PostGIS and OpenFGA, covering access and refresh tokens, user creation and fine-grained access control.',
        'Implemented WFS 2.0 interoperability services: GetCapabilities, DescribeFeatureType and GetFeature.',
        'Optimized the large-scale ingestion pipeline (PostgreSQL COPY, vectorized geometry encoding, Pyogrio-based reading, better database and job resource management), cutting processing time for ~500k polygons from 625 s to 70 s.'
      ],
      technologies: [
        'Python', 'FastAPI', 'Clean Architecture', 'CQRS', 'SQLAlchemy', 'PostgreSQL / PostGIS',
        'asyncpg', 'Pyogrio', 'OpenFGA', 'WFS 2.0', 'Docker'
      ],
      highlights: [
        { value: '625 s → 70 s', label: 'ingestion time, ~500k polygons' },
        { value: '~8.9×', label: 'faster ingestion' }
      ]
    },
    {
      id: 2,
      role: 'AI and DevOps Intern',
      organization: 'Insomea Cloud Solutions',
      context: 'Summer engineering internship',
      period: 'Jun 2025 - Aug 2025',
      location: 'Tunisia',
      summary:
        'Cloud deployments relied on repeated manual steps in the CI/CD pipeline. I built an AI agent that drives those deployments so the pipeline needs far less human intervention.',
      bullets: [
        'Developed an AI agent (LangChain, Google Gemini LLM, MCP server) that automates cloud deployments through the CI/CD pipeline.',
        'Containerized the agent with Docker and orchestrated it on Kubernetes (Azure AKS).',
        'Reduced human interventions in the deployment workflow by about 40%.'
      ],
      technologies: ['Python', 'LangChain', 'Google Gemini', 'MCP', 'Docker', 'Kubernetes (AKS)', 'Azure', 'CI/CD'],
      highlights: [
        { value: '~40%', label: 'fewer manual interventions' }
      ]
    }
  ];
}
