import { signal } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { catchError, finalize, Observable, of, Subscription } from "rxjs";

export class DynamicDataSource<T> extends MatTableDataSource<T> {

    protected readonly loading = signal(false);

    private collection$: Subscription;
  
    constructor(collection: Observable<T[]>) {
      super();
      this.loading.update(() => true);
      this.collection$ = collection.pipe(
        catchError(() => {
            this.data = new Array<T>();
            return of(new Array<T>());
        }),
        finalize(() => this.loading.update(() => false))
      ).subscribe({
        next: (response) => {
          this.data = response;
        }
      });
    }
  
    override disconnect() {
      this.collection$.unsubscribe();
      this.loading.update(() => false);
      super.disconnect();
    } 
}