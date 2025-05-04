import { Component, computed, effect, linkedSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  counter: WritableSignal<number> = signal(0); // or counter = signal(0)

  constructor() {
    // this.counter.set(5)
    effect(() => console.info('New Value of counter is : ' + this.counter()));
  }

  any() {
    this.counter.update((val) => val + 1);
  }

  reset() {
    this.counter.set(0);
  }

  //2

  quantitySignal: WritableSignal<number> = signal(1)
  price = 10

  //computed signal
  // total = computed(() => {
  //   return this.quantitySignal() * this.price
  // })

  //linked signal
  // total = linkedSignal(() => {
  //   return this.quantitySignal() * this.price
  // })
  total = linkedSignal({
    source: this.quantitySignal,
    computation: ()=>this.quantitySignal() * this.price 
  })

  calculate() {
    this.quantitySignal.set(2)
  }
}
