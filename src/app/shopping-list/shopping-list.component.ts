import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    {
      name: 'Apples',
      amount: 5
    },
    {
      name: 'Tomatoes',
      amount: 10
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
