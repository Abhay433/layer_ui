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
import { IndustriesComponent } from './components/industries/industries.component';


import { Usecase1Component as MiningUsecase1 } from './pages/industries/mining/usecase1/usecase1.component';
import { Usecase2Component as MiningUsecase2 } from './pages/industries/mining/usecase2/usecase2.component';
import { Usecase3Component as MiningUsecase3 } from './pages/industries/mining/usecase3/usecase3.component';

import { Usecase1Component as DefenceUsecase1 } from './pages/industries/defence/usecase1/usecase1.component';
import { Usecase2Component as DefenceUsecase2 } from './pages/industries/defence/usecase2/usecase2.component';
import { Usecase3Component as DefenceUsecase3 } from './pages/industries/defence/usecase3/usecase3.component';

import { Usecase1Component as DisasterManagementUsecase1 } from './pages/industries/disaster-management/usecase1/usecase1.component';
import { Usecase2Component as DisasterManagementUsecase2 } from './pages/industries/disaster-management/usecase2/usecase2.component';

import { Usecase1Component as AgricultureUsecase1 } from './pages/industries/agriculture/usecase1/usecase1.component';
import { Usecase2Component as AgricultureUsecase2 } from './pages/industries/agriculture/usecase2/usecase2.component';
import { Usecase3Component as AgricultureUsecase3 } from './pages/industries/agriculture/usecase3/usecase3.component';



import { Usecase1Component as SustainabilityUsecase1 } from './pages/industries/environmental-sustainability/usecase1/usecase1.component';
import { Usecase2Component as SustainabilityUsecase2 } from './pages/industries/environmental-sustainability/usecase2/usecase2.component';
import { Usecase3Component as SustainabilityUsecase3 } from './pages/industries/environmental-sustainability/usecase3/usecase3.component';
import { Usecase4Component as SustainabilityUsecase4 } from './pages/industries/environmental-sustainability/usecase4/usecase4.component';


import { Usecase1Component as OilGasUsecase1 } from './pages/industries/oil-gas/usecase1/usecase1.component';
import { Usecase2Component as OilGasUsecase2 } from './pages/industries/oil-gas/usecase2/usecase2.component';
import { Usecase3Component as OilGasUsecase3 } from './pages/industries/oil-gas/usecase3/usecase3.component';
import { Usecase4Component as OilGasUsecase4 } from './pages/industries/oil-gas/usecase4/usecase4.component';


export const routes: Routes = [

  { path: 'industries', component: IndustriesComponent },

  // Jab URL khali ho, toh pura home page load hoga
  { path: '', component: HomeComponent }, 
  { path: 'about-us', component: AboutusComponent },
  {path: 'how-we-work',component:HowweworkComponent},
  
  // Naye pages ke paths
  { path: 'industries/mining', component: MiningComponent },
  
  { path: 'industries/mining/usecase1', component: MiningUsecase1 },  
  { path: 'industries/mining/usecase2', component: MiningUsecase2 },
  { path: 'industries/mining/usecase3', component: MiningUsecase3 },



  { path: 'industries/defence', component: DefenceComponent },

  { path: 'industries/defence/usecase1', component: DefenceUsecase1 },
  { path: 'industries/defence/usecase2', component: DefenceUsecase2 },
  { path: 'industries/defence/usecase3', component: DefenceUsecase3 },



  { path: 'industries/disaster-management', component: DisasterManagementComponent },

  { path: 'industries/disaster-management/usecase1', component: DisasterManagementUsecase1 },
  { path: 'industries/disaster-management/usecase2', component: DisasterManagementUsecase2 },


  { path: 'industries/agriculture', component: AgricultureComponent },

  { path: 'industries/agriculture/usecase1', component: AgricultureUsecase1 },
  { path: 'industries/agriculture/usecase2', component: AgricultureUsecase2 },
  { path: 'industries/agriculture/usecase3', component: AgricultureUsecase3 },
  


  { path: 'industries/environmental-sustainability', component: EnvironmentalSustainabilityComponent },

  { path: 'industries/environmental-sustainability/usecase1', component: SustainabilityUsecase1 },
  { path: 'industries/environmental-sustainability/usecase2', component: SustainabilityUsecase2 },
  { path: 'industries/environmental-sustainability/usecase3', component: SustainabilityUsecase3 },
  { path: 'industries/environmental-sustainability/usecase4', component: SustainabilityUsecase4 },

  { path: 'industries/oil-gas', component: OilGasComponent },

  { path: 'industries/oil-gas/usecase1', component: OilGasUsecase1 },
  { path: 'industries/oil-gas/usecase2', component: OilGasUsecase2 },
  { path: 'industries/oil-gas/usecase3', component: OilGasUsecase3 },
  { path: 'industries/oil-gas/usecase4', component: OilGasUsecase4 },

  
  // Agar koi galat URL dale toh home par redirect karein
  { path: '**', redirectTo: '' } 
];