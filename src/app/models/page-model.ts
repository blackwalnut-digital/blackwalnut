export interface PageComponent {
  mainHeaderLine1: string;
  h2Line1: string;
  h2Line2: string;
}

export interface ServiceCard {
  title: string;
  body: string;
}

export interface Mission {
  title: string;
  description: string;
}

export interface Step {
  image: string;
  stepClassName: string;
  value: string;
}

export interface Process {
  header: string;
  steps: Step[];
}

export interface ContentComponents {
  serviceCards: ServiceCard[];
  visibilityBlockHeader: string;
  mission: Mission;
  process: Process;
}

export interface Section {
  header: PageComponent;
  content: ContentComponents;
}

export interface Pages {
  home: Section;
}
