import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrudService } from '../../services/crud/crud.service';
@Component({
  selector: 'app-people-one',
  templateUrl: './people-one.component.html',
  styles: [
  ]
})
export class PeopleOneComponent implements OnInit {


    public people: any;
  private peopleId: string;


  constructor(
    private CrudService: CrudService,
    private ActivatedRoute: ActivatedRoute
  ) { }

  private getPeopleContent = (id: String) => {
      this.CrudService.readOnePeople('person', id)
      .then( apiResponse => this.people = apiResponse)
      .catch( apiResponse => console.error (apiResponse))
    }

    ngOnInit() {
      this.peopleId = this.ActivatedRoute.snapshot.params['id'];
      this.getPeopleContent(this.peopleId);
    }


}
