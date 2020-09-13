import { Routes } from '@angular/router';
import { BigDataComponent } from './big-data/big-data.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { ProfileComponent } from './profile/profile.component';
import { QualityComponent } from './quality/quality.component';
import { ReportComponent } from './report/report.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'big-data',
                component: BigDataComponent
            },
            {
                path: 'catalog',
                component: CatalogComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'faq',
                component: FaqComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'master-data',
                component: MasterDataComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'quality',
                component: QualityComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
        ]
    }
]