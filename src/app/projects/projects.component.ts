import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLinks: { label: string; url: string }[];
  category: 'AI/ML' | 'Full-Stack' | 'Big Data' | 'DevOps' | 'Data Science';
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  projects: Project[] = [
    {
      id: 10,
      title: 'Agentic AI + DevOps - Pipeline CI/CD Automation',
      description: 'Intelligent automated CI/CD pipeline using Azure DevOps and AI agents for continuous deployment of Python applications. Implements DevOps best practices with automated testing, static code analysis, Docker containerization, and multi-environment deployment. Infrastructure as Code configuration with YAML pipelines and artificial intelligence for workflow optimization.',
      technologies: ['Azure DevOps', 'Python', 'Docker', 'CI/CD', 'YAML', 'Infrastructure as Code', 'Automation', 'Agentic AI'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/az_devops_pipeline' }],
      category: 'AI/ML',
      featured: true
    },
    {
      id: 1,
      title: 'Lung Cancer Detection - Deep Learning',
      description: 'Automatic lung cancer detection system using transfer learning with VGG16. Implemented in Python with TensorFlow/Keras on medical CT-scan images. Achieves high accuracy in classifying malignant/benign pulmonary nodules.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'VGG16', 'Computer Vision', 'Deep Learning', 'Medical Imaging'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/cnn_vgg16_lung_cancer_detection' }],
      category: 'AI/ML',
      featured: true
    },
    {
      id: 2,
      title: 'Customer Churn Prediction - Machine Learning',
      description: 'Customer churn prediction system using Random Forest, XGBoost and Stochastic Gradient Boosting. Comparative analysis of ML algorithms with detailed performance metrics. Provides actionable insights for customer retention.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Random Forest', 'Pandas', 'Machine Learning', 'Data Science'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/ChurnDetection_RF_XGBoost_SG' }],
      category: 'AI/ML',
      featured: true
    },
    {
      id: 3,
      title: 'License Plate Recognition - YOLOv8',
      description: 'Automatic license plate detection and recognition system using YOLOv8. Complete pipeline with real-time detection on video streams, OCR character extraction, and post-processing. Application for security and smart parking management.',
      technologies: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Computer Vision', 'OCR', 'Deep Learning'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/licenseplateRecoyolov8' }],
      category: 'AI/ML',
      featured: true
    },
    {
      id: 4,
      title: 'Farm Management AI - Intelligent Full-Stack Platform',
      description: 'Intelligent farm management platform integrating AI for crop optimization and yield prediction. Spring Boot backend with integrated ML models and modern React interface with real-time visualizations and AI-based recommendations.',
      technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Machine Learning', 'REST API', 'PostgreSQL', 'AI Agriculture'],
      githubLinks: [
        { label: 'Spring Backend', url: 'https://github.com/hvsssen/FarmManagementBack_Spring' },
        { label: 'React AI Frontend', url: 'https://github.com/hvsssen/FarmManagementAI_FrontReact' }
      ],
      category: 'AI/ML',
      featured: true
    },
    {
      id: 5,
      title: 'Lambda Architecture - Big Data Complaints Analysis',
      description: 'Complete Lambda architecture implementation for real-time and batch customer complaints analysis. Combines Kafka, Spark, and Hadoop. Enables predictive trend analysis with parallel batch and streaming processing for real-time business insights.',
      technologies: ['Apache Kafka', 'Apache Spark', 'Hadoop', 'Java', 'Big Data', 'Lambda Architecture', 'Stream Processing'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/BigData-LambdaArchitecture-ComplaintsAnalysisSystem' }],
      category: 'Big Data',
      featured: false
    },
    {
      id: 6,
      title: 'Tunisia Geospatial Analysis - Data Science',
      description: 'In-depth analysis of Tunisia\'s road network and urban infrastructure using OpenStreetMap. Generates interactive visualizations, calculates connectivity metrics, and analyzes urban accessibility. Geospatial data science project with urban planning applications.',
      technologies: ['Python', 'OSMnx', 'NetworkX', 'GeoPandas', 'Jupyter', 'Data Visualization', 'GIS', 'OpenStreetMap'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/tunisia-geospatial-analysis' }],
      category: 'Data Science',
      featured: false
    },
    {
      id: 7,
      title: 'AutowAid - Automotive Assistance Platform',
      description: 'Complete full-stack platform for real-time automotive assistance. Java/Spring Boot backend, cross-platform Flutter mobile application, and web administration dashboard. Integrates geolocation, request management, and real-time notifications.',
      technologies: ['Java', 'Spring Boot', 'Flutter', 'Dart', 'HTML', 'JavaScript', 'REST API', 'Microservices', 'JWT', 'Geolocation'],
      githubLinks: [
        { label: 'Java Backend', url: 'https://github.com/hvsssen/PfaAuTowAidBackEnd' },
        { label: 'Flutter Mobile', url: 'https://github.com/hvsssen/PfaAutowAid' },
        { label: 'Admin Dashboard', url: 'https://github.com/hvsssen/AdminAuTowAidDashboard' }
      ],
      category: 'Full-Stack',
      featured: false
    },
    {
      id: 8,
      title: 'Kafka-Spark Pipeline - Real-Time Data Processing',
      description: 'Proof of concept demonstrating Kafka and Spark Streaming integration for real-time data processing. Microservices architecture for ingestion, processing and visualization of continuous streams. Interactive dashboard for streaming metrics visualization.',
      technologies: ['Apache Kafka', 'Apache Spark', 'Spark Streaming', 'HTML', 'JavaScript', 'Real-Time Processing', 'Event-Driven'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/kafka-spark-poc' }],
      category: 'Big Data',
      featured: false
    },
    {
      id: 9,
      title: 'University Courses Ontology - Semantic Web',
      description: 'Ontology system for semantic modeling of university courses, prerequisites and academic paths. Developed with RDFLib and SPARQL. Enables intelligent navigation, course recommendation, and automatic path validation. Application of semantic web and knowledge graphs.',
      technologies: ['Python', 'RDFLib', 'SPARQL', 'Semantic Web', 'Knowledge Graphs', 'Ontology Engineering'],
      githubLinks: [{ label: 'View Project', url: 'https://github.com/hvsssen/UNIVERSITY-COURSES-ONTOLOGY' }],
      category: 'Data Science',
      featured: false

    }
  ];

  ngOnInit(): void {
    this.initAnimations();
  }

  ngAfterViewInit(): void {
    // Animations disabled
  }

  // Create floating particles
  createParticles(): void {
    const section = document.querySelector('.projects-section');
    if (!section) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      section.appendChild(particle);
    }
  }

  // Mouse parallax effect
  initMouseEffects(): void {
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.project-card');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const angleX = (e.clientY - cardCenterY) / 25;
        const angleY = (cardCenterX - e.clientX) / 25;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });

      // Parallax background
      const section = document.querySelector('.projects-section') as HTMLElement;
      if (section) {
        section.style.backgroundPosition = `${mouseX * 50}px ${mouseY * 50}px`;
      }
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card: any) => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    });
  }

  // Scroll-triggered animations
  initScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));
  }

  initAnimations(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const video = document.getElementById("background-video") as HTMLVideoElement;
      if (video) {
        video.muted = true;
      }
    });
  }
}