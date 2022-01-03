import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Samosa', 'Crispy Samosa', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg'),
    new Recipe('Piza', 'Chizy Piza', 'https://cdn0-production-images-kly.akamaized.net/jooXsWgkVQKDABxzFOvsuhTRfGg=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1713366/original/028979900_1505714993-083077500_1492411884-Pizza2.jpg'),
    new Recipe('Burrito', 'Veggie Burritos', 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Breakfast-Burrito-2-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
