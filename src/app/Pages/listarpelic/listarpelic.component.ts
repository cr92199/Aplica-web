import { Component , OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-listarpelic',
  templateUrl: './listarpelic.component.html',
  styleUrls: ['./listarpelic.component.scss']
})
export class ListarpelicComponent implements OnInit {

  lisM: any[] = [];
  page: number = 1;
  total_page: number;

  constructor(private servicMovie: MoviesService){}


  ngOnInit(): void {
    this.listmovies('en-US');
  }
  NextP(){
    if(this.page <= this.total_page ){
      this.page ++
    }
    console.log(this.page);
    this.listmovies('en-US');
  }

  aftP(){
    if(this.page > 1  ){
      this.page --
      this.listmovies('en-US');
    }else{
      return
    }
    //console.log(this.page);
  }

  listmovies(language: string , page:number = this.page): void {
    this.servicMovie.getMovie(language , page ).subscribe(data => {
    console.log(data);
    this.lisM = data.results;
    this. total_page = data.total_pages;
    console.log(this.total_page);
    console.log(this.lisM);
    })
  }

  

  
}
