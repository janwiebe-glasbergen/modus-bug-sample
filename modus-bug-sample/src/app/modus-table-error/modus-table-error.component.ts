import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-modus-table-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modus-table-error.component.html',
  styleUrl: './modus-table-error.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModusTableErrorComponent {
  public showSecondTable: boolean = false;;
  public data = [{name: 'test', age: 20}, {name: 'test2', age: 30}];
  public columns = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'age',
      header: 'Age',
    }
  ];


  public show(){
    this.showSecondTable = true;
  }

  public selectionChange($event: any){
    console.log($event);
  }
}
