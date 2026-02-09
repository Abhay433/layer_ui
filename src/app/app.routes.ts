import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Import check karlein
import { MiningComponent } from './pages/industries/mining/mining.component';
import { DefenceComponent } from './pages/industries/defence/defence.component';
import { DisasterManagementComponent } from './pages/industries/disaster-management/disaster-management.component';
import { AgricultureComponent } from './pages/industries/agriculture/agriculture.component';
import { EnvironmentalSustainabilityComponent } from './pages/industries/environmental-sustainability/environmental-sustainability.component';
import { OilGasComponent } from './pages/industries/oil-gas/oil-gas.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HowweworkComponent } from './components/howwework/howwework.component';


export const routes: Routes = [
  // Jab URL khali ho, toh pura home page load hoga
  { path: '', component: HomeComponent }, 
  { path: 'about-us', component: AboutusComponent },
  {path: 'how-we-work',component:HowweworkComponent},
  
  // Naye pages ke paths
  { path: 'industries/mining', component: MiningComponent },
  { path: 'industries/defence', component: DefenceComponent },
  { path: 'industries/disaster-management', component: DisasterManagementComponent },
  { path: 'industries/agriculture', component: AgricultureComponent },
  { path: 'industries/environmental-sustainability', component: EnvironmentalSustainabilityComponent },
  { path: 'industries/oil-gas', component: OilGasComponent },
  
  // Agar koi galat URL dale toh home par redirect karein
  { path: '**', redirectTo: '' } 
];