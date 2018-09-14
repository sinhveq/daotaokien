import { Component, OnInit } from '@angular/core';
import { GiaovienService } from '../../service/giaovien.service';
import { Giaovien } from '../../model/giaovien';
@Component({
  selector: 'app-giaovien',
  templateUrl: './giaovien.component.html',
  styleUrls: ['./giaovien.component.css']
})
export class GiaovienComponent implements OnInit {

  giaoviens : Giaovien[];
  editGV : Giaovien = { name: '', address: ''};
  constructor( private gvService: GiaovienService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.gvService.getDataGV().subscribe( data => {this.giaoviens = data;});
  }
}
