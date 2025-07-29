import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

interface EpprLog {
  created_by: string;
  updated_by: string;
  created_datetime: string;
  updated_datetime: string;
  eppr_id: string;
  eppr_logs_detail: EpprLogDetail[];
}

interface EpprLogDetail {
  created_by: string;
  updated_by: string;
  created_datetime: string;
  updated_datetime: string;
  eppr_log_detail_id: string;
  eppr_log_id: string;
  request_type: string;
  request_json: string;
  response_json: string;
  status: string;
  eppr_log_entity_details: EpprLogEntityDetail[];
}

interface EpprLogEntityDetail {
  created_by: string;
  updated_by: string | null;
  created_datetime: string;
  updated_datetime: string | null;
  id: string;
  eppr_log_detail_id: string;
  entity_name: string;
  entity_payload: string;
  entity_response: string;
  status: string;
}

@Component({
  selector: 'app-eppr-logs',
  templateUrl: './eppr-logs.component.html',
  styleUrls: ['./eppr-logs.component.css']
})
export class EpprLogsComponent implements OnInit {
  epprLogs: EpprLog[] = [];
  treeData: TreeNode[] = [];
  cols: any[] = [];
  showJsonModal: boolean = false;
  selectedJson: string = '';

  constructor() { }

  ngOnInit(): void {
    this.initializeColumns();
    this.loadEpprLogsData();
  }

  initializeColumns(): void {
    this.cols = [
      { field: 'key', header: 'Key' },
      { field: 'value', header: 'Value' },
      { field: 'type', header: 'Type' },
      { field: 'status', header: 'Status' }
    ];
  }

  loadEpprLogsData(): void {
    // This method can be called with actual API response
    // For now, you can call setEpprLogsData() with your JSON response
    
    // Example usage:
    // this.setEpprLogsData(yourApiResponseData);
  }

  convertToTreeData(): void {
    this.treeData = this.epprLogs.map((epprLog, index) => {
      // Main EPPR Log level - show all keys except eppr_logs_detail
      const epprLogNode: TreeNode = {
        data: {
          key: `EPPR Log ${index + 1}`,
          value: epprLog.eppr_id,
          type: 'EPPR Log',
          status: ''
        },
        expanded: false,
        children: []
      };

      // Add EPPR Log properties as children (excluding eppr_logs_detail)
      const epprLogProperties = [
        { key: 'Created By', value: epprLog.created_by, type: 'Property' },
        { key: 'Updated By', value: epprLog.updated_by, type: 'Property' },
        { key: 'Created DateTime', value: epprLog.created_datetime, type: 'Property' },
        { key: 'Updated DateTime', value: epprLog.updated_datetime, type: 'Property' },
        { key: 'EPPR ID', value: epprLog.eppr_id, type: 'Property' }
      ];

      epprLogProperties.forEach(prop => {
        epprLogNode.children!.push({
          data: {
            key: prop.key,
            value: prop.value,
            type: prop.type,
            status: ''
          }
        });
      });

      // Add EPPR Log Details as expandable children
      if (epprLog.eppr_logs_detail && epprLog.eppr_logs_detail.length > 0) {
        epprLog.eppr_logs_detail.forEach((detail, detailIndex) => {
          const detailNode: TreeNode = {
            data: {
              key: `EPPR Log Detail ${detailIndex + 1}`,
              value: detail.eppr_log_detail_id,
              type: 'EPPR Log Detail',
              status: detail.status
            },
            expanded: false,
            children: []
          };

          // Add detail properties (excluding eppr_log_entity_details)
          const detailProperties = [
            { key: 'Created By', value: detail.created_by, type: 'Property' },
            { key: 'Updated By', value: detail.updated_by, type: 'Property' },
            { key: 'Created DateTime', value: detail.created_datetime, type: 'Property' },
            { key: 'Updated DateTime', value: detail.updated_datetime, type: 'Property' },
            { key: 'EPPR Log Detail ID', value: detail.eppr_log_detail_id, type: 'Property' },
            { key: 'EPPR Log ID', value: detail.eppr_log_id, type: 'Property' },
            { key: 'Request Type', value: detail.request_type, type: 'Property' },
            { key: 'Request JSON', value: this.formatJson(detail.request_json), type: 'JSON' },
            { key: 'Response JSON', value: this.formatJson(detail.response_json), type: 'JSON' },
            { key: 'Status', value: detail.status, type: 'Property' }
          ];

          detailProperties.forEach(prop => {
            detailNode.children!.push({
              data: {
                key: prop.key,
                value: prop.value,
                type: prop.type,
                status: ''
              }
            });
          });

          // Add entity details as expandable children
          if (detail.eppr_log_entity_details && detail.eppr_log_entity_details.length > 0) {
            detail.eppr_log_entity_details.forEach((entity, entityIndex) => {
              const entityNode: TreeNode = {
                data: {
                  key: `${entity.entity_name} Entity ${entityIndex + 1}`,
                  value: entity.id,
                  type: 'Entity Detail',
                  status: entity.status
                },
                expanded: false,
                children: []
              };

              // Add all entity properties
              const entityProperties = [
                { key: 'Created By', value: entity.created_by, type: 'Property' },
                { key: 'Updated By', value: entity.updated_by || 'N/A', type: 'Property' },
                { key: 'Created DateTime', value: entity.created_datetime, type: 'Property' },
                { key: 'Updated DateTime', value: entity.updated_datetime || 'N/A', type: 'Property' },
                { key: 'ID', value: entity.id, type: 'Property' },
                { key: 'EPPR Log Detail ID', value: entity.eppr_log_detail_id, type: 'Property' },
                { key: 'Entity Name', value: entity.entity_name, type: 'Property' },
                { key: 'Entity Payload', value: this.formatJson(entity.entity_payload), type: 'JSON' },
                { key: 'Entity Response', value: this.formatJson(entity.entity_response), type: 'JSON' },
                { key: 'Status', value: entity.status, type: 'Property' }
              ];

              entityProperties.forEach(prop => {
                entityNode.children!.push({
                  data: {
                    key: prop.key,
                    value: prop.value,
                    type: prop.type,
                    status: ''
                  }
                });
              });

              detailNode.children!.push(entityNode);
            });
          }

          epprLogNode.children!.push(detailNode);
        });
      }

      return epprLogNode;
    });
  }

  formatJson(jsonString: string): string {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      return jsonString;
    }
  }

  getStatusClass(status: string): string {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'created':
        return 'status-success';
      case 'failed':
      case 'fail':
        return 'status-error';
      case 'pending':
        return 'status-warning';
      default:
        return '';
    }
  }

  // Method to load data from API response
  setEpprLogsData(responseData: any): void {
    if (responseData && responseData.eppr_logs) {
      this.epprLogs = responseData.eppr_logs;
      this.convertToTreeData();
    }
  }

  // Template helper methods
  getColumnWidth(field: string): string {
    switch (field) {
      case 'key': return '35%';
      case 'value': return '40%';
      case 'type': return '15%';
      case 'status': return '10%';
      default: return 'auto';
    }
  }

  getRowTypeClass(type: string): string {
    switch (type) {
      case 'EPPR Log': return 'eppr-log-row';
      case 'EPPR Log Detail': return 'eppr-detail-row';
      case 'Entity Detail': return 'entity-detail-row';
      default: return 'property-row';
    }
  }

  getRowIcon(type: string): string {
    switch (type) {
      case 'EPPR Log': return 'pi pi-folder';
      case 'EPPR Log Detail': return 'pi pi-file-o';
      case 'Entity Detail': return 'pi pi-sitemap';
      case 'JSON': return 'pi pi-code';
      default: return 'pi pi-info-circle';
    }
  }

  getTypeBadgeClass(type: string): string {
    switch (type) {
      case 'EPPR Log': return 'type-eppr-log';
      case 'EPPR Log Detail': return 'type-detail';
      case 'Entity Detail': return 'type-entity';
      case 'JSON': return 'type-json';
      default: return 'type-property';
    }
  }

  getStatusIcon(status: string): string {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'created': return 'pi pi-check-circle';
      case 'failed':
      case 'fail': return 'pi pi-times-circle';
      case 'pending': return 'pi pi-clock';
      default: return 'pi pi-info-circle';
    }
  }

  formatValue(value: string): string {
    if (!value) return '';
    if (value.length > 100) {
      return value.substring(0, 100) + '...';
    }
    return value;
  }

  getJsonPreview(jsonString: string): string {
    if (!jsonString) return '';
    const preview = jsonString.substring(0, 80);
    return preview + (jsonString.length > 80 ? '...' : '');
  }

  showJsonDialog(jsonString: string): void {
    this.selectedJson = jsonString;
    this.showJsonModal = true;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // You can add a toast notification here if needed
      console.log('JSON copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  downloadJson(jsonString: string): void {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `eppr-log-${new Date().getTime()}.json`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}