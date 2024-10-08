import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../ngrx/counter.actions';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent implements OnChanges, OnDestroy, OnInit {
  companyName1 = 'Neosoft';
  companyName2 = 'Webwerks';
  companyName = this.companyName2;

  baseLocation = 'Parel';
  initalStatus = false;
  inputType = 'password';

  companyNames = ['Dadar', 'Parel', 'Rabale', 'Pune', 'Noida'];

  joiningDates = [
    new Date('July 5, 2018'),
    new Date('July 4, 2018'),
    new Date('July 6, 2019'),
  ];

  currencyCode = 'INR';
  currencyCodes = [
    {
      country: 'India',
      code: 'IND',
    },
    {
      country: 'America',
      code: 'USD',
    },
    {
      country: 'Europe',
      code: 'EUR',
    },
    {
      country: 'Japan',
      code: 'JPY',
    },
  ];

  static companyDirector = 'Mr. John';
  className = LearningComponent;

  slogan = '';

  styleObject = {
    backgroundColor: 'blue',
    textDecoration: 'none',
  };

  salaries = [5555.566, 32323.43546, 343434.555];

  offices = [
    {
      location: 'Dadar, Mumbai',
      address:
        'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028',
    },
    {
      location: 'Parel, Mumbai',
      address:
        'Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013',
    },
    {
      location: 'Rabale, Mumbai',
      address:
        'Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701',
    },
    {
      location: 'Dadar, Mumbai',
      address:
        'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028',
    },
    {
      location: 'Pune',
      address:
        'IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057',
    },
    {
      location: 'Noida',
      address:
        'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301',
    },
  ];

  counter3 = 0;
  counter3$: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    setInterval(() => {
      this.companyName = this.companyName1; // company
      this.companyName1 = this.companyName2;
      this.companyName2 = this.companyName; // we are changing model
    }, 3000);

    this.counter3$ = this.store.select('counter');

    console.log(this.joiningDates);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  incrementByAmount() {
    this.store.dispatch(incrementByAmount(4));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Lifecycle gets called whenever the input changes');
  }

  ngOnDestroy(): void {
    console.log('in ngOnDestroy of learning. this is last lifecycle method');
    console.log('release the resources b4 component gets destroyed...');
  }
  ngOnInit(): void {
    console.log('in ngOnInit of learning. this is first lifecycle method');
  }

  bindingImage = {
    url: 'https://www.tutorialsstar.com/wp-content/uploads/2021/05/1-Copy-768x406.png',
    height: 200,
    width: 200,
    name: 'Data binding',
  };
  display() {
    if (this.initalStatus) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  setCode(node: any) {
    console.log(node.value);
  }
}
