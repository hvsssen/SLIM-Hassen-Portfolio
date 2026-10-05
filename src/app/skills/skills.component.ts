import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  /** Core technologies are highlighted so the strongest signal reads first. */
  core?: boolean;
}

interface SkillGroup {
  id: number;
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillGroups: SkillGroup[] = [
    {
      id: 1,
      name: 'Software Engineering',
      skills: [
        { name: 'Python', core: true },
        { name: 'FastAPI', core: true },
        { name: 'REST APIs' },
        { name: 'Software Architecture' },
        { name: 'Clean Architecture / CQRS' },
        { name: 'SQLAlchemy' },
        { name: 'Java' }
      ]
    },
    {
      id: 2,
      name: 'AI & Machine Learning',
      skills: [
        { name: 'PyTorch', core: true },
        { name: 'TensorFlow / Keras' },
        { name: 'scikit-learn' },
        { name: 'XGBoost' },
        { name: 'Deep Learning' },
        { name: 'Computer Vision (YOLO)' },
        { name: 'NLP / LLM systems' },
        { name: 'LangChain / LangGraph' }
      ]
    },
    {
      id: 3,
      name: 'Data & Geospatial',
      skills: [
        { name: 'PostgreSQL', core: true },
        { name: 'PostGIS' },
        { name: 'GeoPandas' },
        { name: 'Pyogrio' },
        { name: 'Geospatial data processing' },
        { name: 'Apache Spark' },
        { name: 'Apache Kafka' }
      ]
    },
    {
      id: 4,
      name: 'Cloud & DevOps',
      skills: [
        { name: 'Docker', core: true },
        { name: 'Kubernetes' },
        { name: 'GitHub Actions' },
        { name: 'Azure' },
        { name: 'ArgoCD' },
        { name: 'Helm' },
        { name: 'CI/CD' }
      ]
    },
    {
      id: 5,
      name: 'Web',
      skills: [
        { name: 'React' },
        { name: 'Angular' },
        { name: 'Spring Boot' }
      ]
    }
  ];
}
