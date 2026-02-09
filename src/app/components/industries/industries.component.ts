import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent {
  // Array format mein data rakhne se code manage karna aasaan hota hai
  industries = [
    { 
      name: 'Mining', 
      route: '/industries/mining', 
      description: 'Advanced spatial analytics for resource exploration and site management.' 
    },
    { 
      name: 'Defence', 
      route: '/industries/defence', 
      description: 'Mission-critical intelligence and strategic terrain analysis.' 
    },
    { 
      name: 'Disaster Management', 
      route: '/industries/disaster-management', 
      description: 'Real-time monitoring and rapid response spatial pipelines.' 
    },
    { 
      name: 'Agriculture', 
      route: '/industries/agriculture', 
      description: 'Precision farming and crop health monitoring via satellite data.' 
    },
    { 
      name: 'Environmental & Sustainability', 
      route: '/industries/environmental-sustainability', 
      description: 'Tracking ecosystem changes and carbon footprint analytics.' 
    },
    { 
      name: 'Oil & Gas', 
      route: '/industries/oil-gas', 
      description: 'Optimizing asset management and pipeline infrastructure safety.' 
    }
  ];
}