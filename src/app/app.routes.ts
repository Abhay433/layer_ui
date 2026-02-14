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


import { crop_health_monitoring as MiningUsecase1 } from './pages/industries/mining/crop_health_monitoring/crop_health_monitoring';
import { mineral_prospectivity_mapping as MiningUsecase2 } from './pages/industries/mining/mineral_prospectivity_mapping/mineral_prospectivity_mapping';
import { geological_mapping as MiningUsecase3 } from './pages/industries/mining/geological_mapping/geological_mapping';

import { real_time_multibeam as DefenceUsecase1 } from './pages/industries/defence/real_time_multibeam/real_time_multibeam';
import { satellite_change_detection as DefenceUsecase2 } from './pages/industries/defence/satellite_change_detection/satellite_change_detection';
import { path_optimisation as DefenceUsecase3 } from './pages/industries/defence/path_optimisation/path_optimisation';

import { glof as DisasterManagementUsecase1 } from './pages/industries/disaster-management/glof/glof';
import { flood_induntation as DisasterManagementUsecase2 } from './pages/industries/disaster-management/flood_induntation/flood_induntation';

import { forest_cover as AgricultureUsecase1 } from './pages/industries/agriculture/forest_cover/forest_cover';
import { soil_moisture as AgricultureUsecase2 } from './pages/industries/agriculture/soil_moisture/soil_moisture';
import { crop_health_monitoring as AgricultureUsecase3 } from './pages/industries/agriculture/crop_health_monitoring/crop_health_monitoring';



import { deforestation_mapping as SustainabilityUsecase1 } from './pages/industries/environmental-sustainability/deforestation_mapping/deforestation_mapping';
import { fire_risk_and_post_fire as SustainabilityUsecase2 } from './pages/industries/environmental-sustainability/fire_risk_and_post_fire/fire_risk_and_post_fire';
import { water_reservior as SustainabilityUsecase3 } from './pages/industries/environmental-sustainability/water_reservior/water_reservior';
import { urban_heat_monitoring as SustainabilityUsecase4 } from './pages/industries/environmental-sustainability/urban_heat_monitoring/urban_heat_monitoring';


import { seismic_feature_extraction as OilGasUsecase1 } from './pages/industries/oil-gas/seismic_feature_extraction/seismic_feature_extraction';
import { seismic_data_analysis as OilGasUsecase2 } from './pages/industries/oil-gas/seismic_data_analysis/seismic_data_analysis';
import { wellbore as OilGasUsecase3 } from './pages/industries/oil-gas/wellbore/wellbore';
import { landscape_evoultion_modelling as OilGasUsecase4 } from './pages/industries/oil-gas/landscape_evoultion_modelling/landscape_evoultion_modelling';


export const routes: Routes = [

  { path: 'industries', component: IndustriesComponent },

  // Jab URL khali ho, toh pura home page load hoga
  { path: '', component: HomeComponent }, 
  { path: 'about-us', component: AboutusComponent },
  {path: 'how-we-work',component:HowweworkComponent},
  
  // Naye pages ke paths
  { path: 'industries/mining', component: MiningComponent },
  
  { path: 'industries/mining/crop_health_monitoring', component: MiningUsecase1 },  
  { path: 'industries/mining/mineral_prospectivity_mapping', component: MiningUsecase2 },
  { path: 'industries/mining/geological_mapping', component: MiningUsecase3 },



  { path: 'industries/defence', component: DefenceComponent },

  { path: 'industries/defence/real_time_multibeam', component: DefenceUsecase1 },
  { path: 'industries/defence/satellite_change_detection', component: DefenceUsecase2 },
  { path: 'industries/defence/path_optimisation', component: DefenceUsecase3 },



  { path: 'industries/disaster-management', component: DisasterManagementComponent },

  { path: 'industries/disaster-management/glof', component: DisasterManagementUsecase1 },
  { path: 'industries/disaster-management/flood_induntation', component: DisasterManagementUsecase2 },


  { path: 'industries/agriculture', component: AgricultureComponent },

  { path: 'industries/agriculture/forest_cover', component: AgricultureUsecase1 },
  { path: 'industries/agriculture/soil_moisture', component: AgricultureUsecase2 },
  { path: 'industries/agriculture/crop_health_monitoring', component: AgricultureUsecase3 },
  


  { path: 'industries/environmental-sustainability', component: EnvironmentalSustainabilityComponent },

  { path: 'industries/environmental-sustainability/deforestation_mapping', component: SustainabilityUsecase1 },
  { path: 'industries/environmental-sustainability/fire_risk_and_post_fire', component: SustainabilityUsecase2 },
  { path: 'industries/environmental-sustainability/water_reservior', component: SustainabilityUsecase3 },
  { path: 'industries/environmental-sustainability/urban_heat_monitoring', component: SustainabilityUsecase4 },

  { path: 'industries/oil-gas', component: OilGasComponent },

  { path: 'industries/oil-gas/seismic_feature_extraction', component: OilGasUsecase1 },
  { path: 'industries/oil-gas/seismic_data_analysis', component: OilGasUsecase2 },
  { path: 'industries/oil-gas/wellbore', component: OilGasUsecase3 },
  { path: 'industries/oil-gas/landscape_evoultion_modelling', component: OilGasUsecase4 },

  
  // Agar koi galat URL dale toh home par redirect karein
  { path: '**', redirectTo: '' } 
];