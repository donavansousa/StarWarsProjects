import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
let ResultService = class ResultService {
    constructor(http) {
        this.http = http;
    }
    getResults() {
        return this.http.get("http://localhost:58287/api/starwars").map(data => data.json());
    }
};
ResultService = tslib_1.__decorate([
    Injectable()
], ResultService);
export { ResultService };
//# sourceMappingURL=result.service.js.map