export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
  }
  
  export const projects: Project[] = [
    {
      title: 'YouTube Analytics Web App',
      description:
        'Play Framework app using Java Streams, Akka, and WebSockets for real-time channel analysis. Achieved 100 % test coverage with Mockito + JaCoCo.',
      tech: ['Java', 'Play', 'Akka', 'WebSockets', 'Mockito'],
      link: 'https://github.com/sankardurai17/tubelytics-app-fall2024',
      image: '/assets/ytlytics.png',
    },
    {
      title: 'Inventory-Based System for Super Market Management',
      description:
        'Developed a standalone Java application to handle stock purchase, inventory tracking, customer history, and billing workflows. Designed database schemas, implemented full-stack functionality with JavaFX for UI and MySQL for persistence.',
      tech: ['Java', 'Java Swing', 'JavaFX', 'MySQL', 'JDBC', 'JUnit'],
      link: '',
      image: '/assets/inventory.png'
    },
    {
      title: 'Fashion Product Classification',
      description:
        'CNN classifier built with PyTorch (VGG16, ResNet18, MobileNetV2) and trained on Kaggle datasets using Google Colab GPUs.',
      tech: ['Python', 'PyTorch', 'CNN', 'Google Colab', 'Kaggle'],
      link: 'https://github.com/sankardurai17/COMP6721-GroupJ-Classification_of_fashion_dataset_using_CNN',
      image: '/assets/cnn.png',
    },
    {
      title: 'Distributed Task Management System',
      description:
        'Django-based micro-service system with PostgreSQL backend and secure REST APIs. Deployed on AWS and load-tested with Postman.',
      tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'AWS'],
      link: 'https://github.com/sankardurai17/distributed-task-manager',
      image: '/assets/i.png',
    },
    {
      title: 'An IoT-Based System for Monitoring Environment',
      description:
        'Developed an Arduino-powered system to track environmental factors like temperature, humidity, light, and gas levels. Sensor data was visualized on an LCD and logged to ThingSpeak for cloud-based monitoring. Triggered alerts via buzzer when air quality dropped below safe thresholds.',
      tech: ['C++', 'Arduino IDE', 'DHT11', 'MQ-135', 'ThingSpeak', 'WIFI Module'],
      link: '',
      image: '/assets/IOT.png'
    },
    {
      title: 'Locality Spotter – Android Application',
      description:
        'Built a location-based Android app that dynamically categorized and displayed nearby places like ATMs, schools, and malls using Google Maps and Places APIs. Enabled real-time navigation across selected localities with a configurable radius.',
      tech: ['Java', 'XML', 'Firebase','Google Maps API', 'Android studio'],
      link: '',
      image: '/assets/locality.png' 
    },



  ];
  