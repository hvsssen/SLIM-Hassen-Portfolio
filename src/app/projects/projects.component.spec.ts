import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show every project by default', () => {
    expect(component.activeCategory).toBeNull();
    expect(component.visibleProjects.length).toBe(component.projects.length);
  });

  it('should offer one filter per category plus "All"', () => {
    const categories = new Set(component.projects.map(p => p.category));
    expect(component.filters.length).toBe(categories.size + 1);
    expect(component.filters[0].label).toBe('All');
    expect(component.filters[0].count).toBe(component.projects.length);
  });

  it('should keep only the selected category, and restore on "All"', () => {
    component.selectCategory('Big Data');
    fixture.detectChanges();
    expect(component.visibleProjects.length).toBeGreaterThan(0);
    expect(component.visibleProjects.every(p => p.category === 'Big Data')).toBeTrue();
    expect(fixture.nativeElement.querySelectorAll('.project-card').length)
      .toBe(component.visibleProjects.length);

    component.selectCategory(null);
    expect(component.visibleProjects.length).toBe(component.projects.length);
  });

  it('should map a category to its badge class', () => {
    expect(component.badgeClass('AI/ML')).toBe('badge-ai-ml');
    expect(component.badgeClass('Data Science')).toBe('badge-data-science');
  });
});
