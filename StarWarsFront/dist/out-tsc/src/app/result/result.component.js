import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
let ResultComponent = class ResultComponent {
    // applyFilter(filterValue: string) {
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    // }
    constructor(resultService) {
        this.resultService = resultService;
        this.result = {};
        this.displayedColumns = ['Person', 'Planet', 'Specie'];
        this.dataSource = new MatTableDataSource();
        this.myControl = new FormControl();
        this.options = ['Human', 'Test', 'Teste 2'];
        this.formLabel = "Lista Personagens";
    }
    ListResults() {
        this.resultService.getResults().subscribe(data => this.dataSource = new MatTableDataSource(data), error => alert(error), () => console.log(this.results));
    }
    ngOnInit() {
        this.ListResults();
        this.dataSource.paginator = this.paginator;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    callSomeFunction(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: true })
], ResultComponent.prototype, "paginator", void 0);
ResultComponent = tslib_1.__decorate([
    Component({
        selector: 'app-result',
        templateUrl: './result.component.html',
        styleUrls: ['./result.component.css']
    })
], ResultComponent);
export { ResultComponent };
//# sourceMappingURL=result.component.js.map