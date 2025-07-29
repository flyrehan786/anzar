import { Component, ViewChild, OnInit } from '@angular/core';
import { EpprLogsComponent } from './eppr-logs.component';

@Component({
  selector: 'app-usage-example',
  template: `
    <div class="usage-example-container">
      <h1>EPPR Logs Example</h1>
      
      <div class="actions">
        <button 
          pButton 
          type="button" 
          label="Load Sample Data" 
          icon="pi pi-upload"
          class="p-button-primary"
          (click)="loadSampleData()">
        </button>
        
        <button 
          pButton 
          type="button" 
          label="Clear Data" 
          icon="pi pi-trash"
          class="p-button-secondary"
          (click)="clearData()">
        </button>
      </div>
      
      <app-eppr-logs #epprLogsComponent></app-eppr-logs>
    </div>
  `,
  styles: [`
    .usage-example-container {
      padding: 1rem;
    }
    
    .actions {
      margin-bottom: 1rem;
      display: flex;
      gap: 1rem;
    }
    
    h1 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
  `]
})
export class UsageExampleComponent implements OnInit {
  @ViewChild('epprLogsComponent') epprLogsComponent!: EpprLogsComponent;

  ngOnInit(): void {
    // Automatically load sample data on component initialization
    setTimeout(() => {
      this.loadSampleData();
    }, 100);
  }

  loadSampleData(): void {
    const sampleData = {
      "status": "Ok",
      "message": "Successfully built EPPR log response",
      "eppr_logs": [
        {
          "created_by": "umair.haider",
          "updated_by": "umair.haider",
          "created_datetime": "2025-07-24",
          "updated_datetime": "2025-07-24",
          "eppr_id": "4227b898-3d80-49a6-8955-acc2eebeff39",
          "eppr_logs_detail": [
            {
              "created_by": "umair.haider",
              "updated_by": "umair.haider",
              "created_datetime": "2025-07-24",
              "updated_datetime": "2025-07-24",
              "eppr_log_detail_id": "0b5b1e45-d7fd-472e-a756-a342e12240de",
              "eppr_log_id": "4227b898-3d80-49a6-8955-acc2eebeff39",
              "request_type": "create",
              "request_json": "{\"eppr_id\":null,\"request_type\":\"create\",\"company\":{\"customer_name\":\"ZEPPR_COMPANY\",\"customer_division\":\"Test Data\",\"customer_representative\":\"Test Data\",\"customer_group\":\"Test Data\",\"customer_address\":\"Test Data\",\"customer_telephone\":\"999999999999\",\"is_readonly\":\"N\",\"error_model\":3,\"error_surface\":0,\"scan_method\":0,\"warning_method\":0,\"use_casing\":0,\"error_output_level\":2.0,\"survey_calc\":0,\"vs_origin\":0,\"error_level\":2.0,\"remarks\":\"Test Remarks Data\",\"notify_minimum_separation\":0.5,\"notify_cone\":0.5,\"notify_projection_length\":0.5,\"notify_offset_scope\":1,\"is_update\":false}}",
              "response_json": "{\"status\":\"Ok\",\"message\":\"Creation request completed successfully.\",\"error_messages\":{},\"eppr_id\":\"4227b898-3d80-49a6-8955-acc2eebeff39\"}",
              "status": "Completed",
              "eppr_log_entity_details": [
                {
                  "created_by": "umair.haider",
                  "updated_by": null,
                  "created_datetime": "2025-07-24",
                  "updated_datetime": null,
                  "id": "de4975c1-ab98-42e1-a7f1-142cdbdee6ea",
                  "eppr_log_detail_id": "0b5b1e45-d7fd-472e-a756-a342e12240de",
                  "entity_name": "Project",
                  "entity_payload": "{\"policy_id\":\"JCeOdYdaKf\",\"project_name\":\"EPPR_PROJECT\",\"system_datum_desc\":\"Mean Sea Level\",\"system_datum_offset\":0.0,\"system_datum_offset_dsdsunit\":\"ft\",\"vertical_coord_origin\":0.0,\"geo_system_id\":\"US-SPC83                        \",\"geo_datum_id\":\"NAD83\",\"geo_zone_id\":\"AK83-8\",\"use_variable_convergence\":0,\"local_coord_origin\":1.0,\"use_local_scale_factor\":0,\"tight_group_id\":\"T0001\",\"description\":\"Updated Project Discription\"}",
                  "entity_response": "{\"value\":{\"project\":{\"insert\":\"Succeed\",\"edit\":null,\"details\":{\"project_id\":\"3GAZ3UUfhK\",\"project_name\":null}}}}",
                  "status": "created"
                },
                {
                  "created_by": "umair.haider",
                  "updated_by": null,
                  "created_datetime": "2025-07-24",
                  "updated_datetime": null,
                  "id": "bac42164-40ff-41d7-a83f-36f31e353b3b",
                  "eppr_log_detail_id": "0b5b1e45-d7fd-472e-a756-a342e12240de",
                  "entity_name": "Site",
                  "entity_payload": "{\"name\":\"EP_SITE1\",\"xy_unit\":\"feet\",\"x_coordinate\":\"10\",\"y_coordinate\":\"10\",\"crs\":\"US State Plane 1983_NAD 1983 (GRS80)_Alaska Zone 8\",\"project_id\":\"3GAZ3UUfhK\"}",
                  "entity_response": "{\"value\":{\"site\":{\"insert\":\"Succeed\",\"edit\":null,\"details\":{\"site_id\":\"GE2Dy6eocm\"}}},\"Succeed\":{\"site_name\":\"EP_SITE1\",\"site_id\":\"GE2Dy6eocm\"}}",
                  "status": "created"
                },
                {
                  "created_by": "umair.haider",
                  "updated_by": null,
                  "created_datetime": "2025-07-24",
                  "updated_datetime": null,
                  "id": "86bdbd2d-2c51-46ef-b021-2daf6a2dc2be",
                  "eppr_log_detail_id": "0b5b1e45-d7fd-472e-a756-a342e12240de",
                  "entity_name": "Well",
                  "entity_payload": "{\"name\":\"Well#1\",\"site_id\":\"GE2Dy6eocm\",\"xy_unit\":\"feet\",\"crs\":\"US State Plane 1983_NAD 1983 (GRS80)_Alaska Zone 8\",\"air_gap_unit\":\"ft\",\"ground_elevation_unit\":\"ft\",\"ground_elevation\":\"10\",\"x_coordinate\":\"10\",\"y_coordinate\":\"10\",\"api_number\":\"1.0\",\"air_gap\":\"10\",\"uwi\":\"uwi\",\"on_off_shore\":\"on\",\"is_subsea\":false}",
                  "entity_response": "{\"value\":{\"well\":{\"insert\":\"Succeed\",\"edit\":null,\"details\":{\"well_id\":\"yidTnedLCk\",\"x_coordinate\":null,\"y_coordinate\":null}},\"datum\":{\"insert\":\"Succeed\",\"edit\":null,\"details\":{\"datum_id\":\"S1wy1\"},\"info\":null}}}",
                  "status": "created"
                },
                {
                  "created_by": "umair.haider",
                  "updated_by": null,
                  "created_datetime": "2025-07-24",
                  "updated_datetime": null,
                  "id": "cae40da5-089f-454b-a409-7557dbcb43ac",
                  "eppr_log_detail_id": "0b5b1e45-d7fd-472e-a756-a342e12240de",
                  "entity_name": "Wellbore",
                  "entity_payload": "{\"name\":\"Wellbore#2\",\"project_id\":\"3GAZ3UUfhK\",\"well_id\":\"yidTnedLCk\",\"parent_wellbore_id\":\"uH7UbVMyFg\",\"api_number\":\"1.2\",\"uwi\":\"w-uwi\"}",
                  "entity_response": "{\"value\":{\"wellbore\":{\"insert\":\"Succeed\",\"edit\":null,\"details\":{\"wellbore_id\":\"aamRJb8Dpt\"}},\"targets\":null}}",
                  "status": "created"
                },
                {
                  "created_by": "umair.haider",
                  "updated_by": null,
                  "created_datetime": "2025-07-24",
                  "updated_datetime": null,
                  "id": "a531bbb5-d1f5-442e-b7df-85aa98fdb5d9",
                  "eppr_log_detail_id": "0b5b1e45-d7fd-472e-a756-a342e12240de",
                  "entity_name": "Company",
                  "entity_payload": "{\"policy_id\":\"JCeOdYdaKf\",\"customer_name\":\"ZEPPR_COMPANY\",\"customer_division\":\"Test Data\",\"customer_representative\":\"Test Data\",\"customer_group\":\"Test Data\",\"customer_address\":\"Test Data\",\"customer_telephone\":\"999999999999\",\"is_readonly\":\"N\",\"error_model\":3,\"error_surface\":0,\"scan_method\":0,\"warning_method\":0,\"use_casing\":0,\"error_output_level\":2.0,\"survey_calc\":0,\"vs_origin\":0,\"error_level\":2.0,\"remarks\":\"Test Remarks Data\",\"notify_minimum_separation\":0.5,\"notify_cone\":0.5,\"notify_projection_length\":0.5,\"notify_offset_scope\":1,\"create_user_id\":\"umair.haider\",\"create_app_id\":\"DWP\",\"update_user_id\":\"umair.haider\",\"update_app_id\":\"DWP\",\"is_update\":false}",
                  "entity_response": "{\"status\":\"created\",\"message\":\"Company created successfully\",\"companyId\":\"JCeOdYdaKf\"}",
                  "status": "created"
                }
              ]
            }
          ]
        }
      ]
    };

    // Set the data in the EPPR logs component
    this.epprLogsComponent.setEpprLogsData(sampleData);
  }

  clearData(): void {
    this.epprLogsComponent.setEpprLogsData({ eppr_logs: [] });
  }
}