import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { GeneralInputsAccessor } from 'src/app/shared/classes/GeneralInputsAccessor';

@Component({
  selector: 'app-multiselect-with-chips',
  standalone: true,
  templateUrl: './multiselect-with-chips.component.html',
  styleUrls: ['./multiselect-with-chips.component.scss'],
  imports: [CommonModule, MatSelectModule, MatChipsModule, ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiselectWithChipsComponent),
      multi: true,
    },
  ],
})
export class MultiselectWithChipsComponent extends GeneralInputsAccessor {

  @Input() chipsList!: string[];

  @Input() isSubmitted = false;
  @Input() errors!: ValidationErrors | null;
  @Input() placeholder!: string;

  onItemRemoved(item: string) {
    const items = this.input as string[];
    const mappedItems = this.removeFirst(items, item);

    this.value = [...mappedItems];

    // this.registerOnChange((el: any) => {
    //   console.log(el);
    // })
    // this.toppingsControl.setValue(toppings as any);
  }

  private removeFirst<T>(array: T[], toRemove: T): Array<any> {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }


}
