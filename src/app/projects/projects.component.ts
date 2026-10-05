import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectCategory = 'AI/ML' | 'Full-Stack' | 'Big Data' | 'DevOps' | 'Data Science';

interface Filter {
  label: string;
  /** null means "no filter": show everything. */
  category: ProjectCategory | null;
  count: number;
}

interface Project {
  id: number;
  title: string;
  /** Problem -> approach -> result. Technologies live in their own list. */
  description: string;
  result?: string;
  technologies: string[];
  githubLinks: { label: string; url: string }[];
  category: ProjectCategory;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      id: 1,
      title: 'Lung Cancer Detection with Deep Learning',
      description:
        'Reading lung histopathology slides is slow and requires an expert. I trained a classifier to separate cancerous from healthy tissue using transfer learning on VGG16, with preprocessing and augmentation on the LC25000 dataset.',
      result: '98% test accuracy on the LC25000 dataset.',
      technologies: ['Python', 'TensorFlow / Keras', 'VGG16', 'Transfer Learning', 'Medical Imaging'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/cnn_vgg16_lung_cancer_detection' }],
      category: 'AI/ML',
      featured: true
    },
    {
      id: 2,
      title: 'Agentic AI for CI/CD Pipeline Automation',
      description:
        'Deploying a Python application through Azure DevOps involved repeated manual steps. I built a pipeline driven by AI agents that handles testing, static analysis, containerization and multi-environment deployment, with the infrastructure described as code in YAML.',
      technologies: ['Azure DevOps', 'Python', 'Docker', 'Agentic AI', 'Infrastructure as Code', 'CI/CD'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/az_devops_pipeline' }],
      category: 'DevOps',
      featured: true
    },
    {
      id: 3,
      title: 'Tunisia Geospatial Network Analysis',
      description:
        'Urban accessibility in Tunisia is hard to reason about without measurements. I built road networks from OpenStreetMap data, computed connectivity metrics on the resulting graphs, and produced interactive maps of the results.',
      technologies: ['Python', 'OSMnx', 'NetworkX', 'GeoPandas', 'Jupyter'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/tunisia-geospatial-analysis' }],
      category: 'Data Science',
      featured: true
    },
    {
      id: 4,
      title: 'Farm Management AI Platform',
      description:
        'Farms detect problems in crops and livestock late, when they are already costly. I built a full-stack platform where two YOLOv8 models flag anomalies from field images and surface them in a management dashboard.',
      result: 'Average detection accuracy of 92% across both models.',
      technologies: ['Java', 'Spring Boot', 'React', 'YOLOv8', 'MongoDB', 'REST API'],
      githubLinks: [
        { label: 'Spring Backend', url: 'https://github.com/hvsssen/FarmManagementBack_Spring' },
        { label: 'React Frontend', url: 'https://github.com/hvsssen/FarmManagementAI_FrontReact' }
      ],
      category: 'Full-Stack',
      featured: true
    },
    {
      id: 5,
      title: 'License Plate Recognition with YOLOv8',
      description:
        'Reading plates from a live video stream needs detection and text extraction to work together. I built an end-to-end pipeline: YOLOv8 locates the plate, OCR extracts the characters, and post-processing cleans up the result frame by frame.',
      technologies: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'OCR'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/licenseplateRecoyolov8' }],
      category: 'AI/ML',
      featured: false
    },
    {
      id: 6,
      title: 'Customer Churn Prediction',
      description:
        'Retention teams need to know which customers are about to leave. I compared Random Forest, XGBoost and gradient boosting ensembles on customer data, tuning each one and comparing them on the metrics that matter for retention.',
      result: '87% precision and 85% recall on the test set.',
      technologies: ['Python', 'scikit-learn', 'XGBoost', 'Random Forest', 'Pandas'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/ChurnDetection_RF_XGBoost_SG' }],
      category: 'AI/ML',
      featured: false
    },
    {
      id: 7,
      title: 'Lambda Architecture for Complaints Analysis',
      description:
        'Customer complaints need both historical depth and an immediate view. I implemented a Lambda architecture where Kafka feeds a streaming layer for live signals while Spark and Hadoop recompute the batch layer over the full history.',
      technologies: ['Apache Kafka', 'Apache Spark', 'Hadoop', 'Java', 'Stream Processing'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/BigData-LambdaArchitecture-ComplaintsAnalysisSystem' }],
      category: 'Big Data',
      featured: false
    },
    {
      id: 8,
      title: 'Kafka + Spark Streaming Pipeline',
      description:
        'A proof of concept for continuous data processing: services publish events to Kafka, Spark Streaming consumes and aggregates them, and a dashboard renders the streaming metrics as they arrive.',
      technologies: ['Apache Kafka', 'Spark Streaming', 'JavaScript', 'Event-Driven Architecture'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/kafka-spark-poc' }],
      category: 'Big Data',
      featured: false
    },
    {
      id: 9,
      title: 'AutowAid Roadside Assistance Platform',
      description:
        'Drivers who break down need help from whoever is nearby, fast. I built a platform where a Flutter app geolocates the driver, a Spring Boot backend matches and tracks requests, and an admin dashboard supervises them in real time.',
      technologies: ['Java', 'Spring Boot', 'Flutter', 'REST API', 'JWT', 'Geolocation'],
      githubLinks: [
        { label: 'Java Backend', url: 'https://github.com/hvsssen/PfaAuTowAidBackEnd' },
        { label: 'Flutter Mobile', url: 'https://github.com/hvsssen/PfaAutowAid' },
        { label: 'Admin Dashboard', url: 'https://github.com/hvsssen/AdminAuTowAidDashboard' }
      ],
      category: 'Full-Stack',
      featured: false
    },
    {
      id: 10,
      title: 'University Courses Ontology',
      description:
        'Course prerequisites and academic paths are rules, not rows in a table. I modelled them as an ontology with RDFLib, then used SPARQL queries to navigate the graph, recommend courses and validate a student path automatically.',
      technologies: ['Python', 'RDFLib', 'SPARQL', 'Knowledge Graphs', 'Semantic Web'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/UNIVERSITY-COURSES-ONTOLOGY' }],
      category: 'Data Science',
      featured: false
    }
  ];

  filters: Filter[] = this.buildFilters();
  activeCategory: ProjectCategory | null = null;
  visibleProjects: Project[] = this.projects;

  /** One filter per category actually present, in the order the projects appear. */
  private buildFilters(): Filter[] {
    const counts = new Map<ProjectCategory, number>();
    for (const project of this.projects) {
      counts.set(project.category, (counts.get(project.category) ?? 0) + 1);
    }
    return [
      { label: 'All', category: null, count: this.projects.length },
      ...[...counts].map(([category, count]) => ({ label: category, category, count }))
    ];
  }

  selectCategory(category: ProjectCategory | null): void {
    this.activeCategory = category;
    this.visibleProjects = category === null
      ? this.projects
      : this.projects.filter(project => project.category === category);
  }

  /** Maps a category to its badge class, e.g. 'AI/ML' -> 'badge-ai-ml'. */
  badgeClass(category: string): string {
    return 'badge-' + category.toLowerCase().replace(/[\/\s]+/g, '-');
  }
}
