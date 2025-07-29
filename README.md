# EPPR Logs Hierarchical Display Component

This Angular component displays EPPR (Electronic Performance and Planning Report) logs in a hierarchical tree structure using PrimeNG TreeTable.

## Features

- **3-Level Hierarchy Display:**
  - Level 1: EPPR Log (shows all keys except `eppr_logs_detail`)
  - Level 2: EPPR Log Details (shows all keys except `eppr_log_entity_details`)
  - Level 3: Entity Details (shows all keys)

- **Interactive Features:**
  - Expandable/collapsible tree nodes
  - JSON data viewer with copy and download functionality
  - Status badges with color coding
  - Type badges for different data types
  - Responsive design

## Prerequisites

- Angular (tested with Angular 16+)
- PrimeNG 16.0.0
- PrimeIcons

## Installation

1. Install PrimeNG and PrimeIcons if not already installed:

```bash
npm install primeng@16.0.0 primeicons
```

2. Add PrimeNG CSS to your `angular.json` or `styles.css`:

```css
@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";
@import "primeicons/primeicons.css";
```

## Usage

### Basic Usage

1. Import the module in your app module:

```typescript
import { EpprLogsModule } from './path/to/eppr-logs.module';

@NgModule({
  imports: [
    // other imports
    EpprLogsModule
  ],
  // ...
})
export class AppModule { }
```

2. Use the component in your template:

```html
<app-eppr-logs #epprLogsComponent></app-eppr-logs>
```

3. Load data programmatically:

```typescript
import { ViewChild } from '@angular/core';
import { EpprLogsComponent } from './path/to/eppr-logs.component';

export class MyComponent {
  @ViewChild('epprLogsComponent') epprLogsComponent!: EpprLogsComponent;
  
  loadData() {
    const responseData = {
      "status": "Ok",
      "message": "Successfully built EPPR log response",
      "eppr_logs": [
        // your EPPR logs data here
      ]
    };
    
    this.epprLogsComponent.setEpprLogsData(responseData);
  }
}
```

### Data Structure

The component expects data in the following format:

```typescript
interface ApiResponse {
  status: string;
  message: string;
  eppr_logs: EpprLog[];
}

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
```

## Component Methods

### setEpprLogsData(responseData: any)
Sets the EPPR logs data and converts it to tree structure.

```typescript
this.epprLogsComponent.setEpprLogsData(yourApiResponse);
```

### showJsonDialog(jsonString: string)
Opens a dialog to view JSON data with formatting.

### copyToClipboard(text: string)
Copies JSON content to clipboard.

### downloadJson(jsonString: string)
Downloads JSON content as a file.

## Styling

The component comes with pre-built styles that include:
- Hierarchical indentation
- Color-coded status badges
- Type-specific badges
- Responsive design
- Custom scrollbars

### Status Colors
- **Success/Created**: Green
- **Failed/Error**: Red
- **Pending/Warning**: Yellow

### Type Colors
- **EPPR Log**: Blue
- **EPPR Log Detail**: Purple
- **Entity Detail**: Green
- **JSON**: Orange
- **Property**: Gray

## Customization

You can customize the appearance by overriding the CSS classes:

```css
/* Custom status colors */
.status-success {
  background: your-success-color;
  color: your-text-color;
}

/* Custom type colors */
.type-eppr-log {
  background: your-primary-color;
  color: your-text-color;
}
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Not supported (due to PrimeNG requirements)

## Example

See `usage-example.component.ts` for a complete working example with sample data.

## Troubleshooting

1. **TreeTable not displaying**: Ensure PrimeNG CSS is properly imported
2. **Data not loading**: Check that data structure matches the expected format
3. **Styling issues**: Verify that PrimeIcons CSS is loaded

## Dependencies

- `@angular/core`: ^16.0.0
- `@angular/common`: ^16.0.0
- `primeng`: ^16.0.0
- `primeicons`: Latest version

## License

MIT License