export interface PageComponent {
  mainHeaderLine1: string;
  mainHeaderLine2: string;
  mainHeaderLine3: string;
  subHeaderLine1: string;
  subHeaderLine2: string;
  subHeaderLine3: string;
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

export interface Detail {
  description: string;
}

export interface Service {
  id: string;
  cardTitle: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  details: Detail[];
}

export interface Pages {
  home: Section;
  services: Service[];
}
