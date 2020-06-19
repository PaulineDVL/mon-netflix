/* IMPORTS */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
import { ObservablesService } from '../../services/observable/observable.service';



/* DEFINITION & EXPORT */
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

    // PROPERTIES



    // DEPENDENCIES INJECTION
    constructor(
        private Router: Router,
        private CrudService: CrudService,
        private ObservablesService: ObservablesService
    ) {

    }


    // METHODS


    // LIFECYCLE HOOKS
    ngOnInit() {
        // get all sources on page load
    }

}
