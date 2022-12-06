import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Example implementation for state management using Angular services.
 *
 * - each state variable is represented internally as BehaviorSubject
 * - getters return the current value of the variable
 * - setters set the current value
 * - optional: provide getters that expose the internal (Behavior)Subject
 */
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _lastName = new BehaviorSubject('doe');
  private _age$ = new BehaviorSubject(-1);

  get age() {
    return this._age$.getValue();
  }

  get age$() {
    return this._age$;
  }

  set age(value: number) {
    this._age$.next(value);
  }

  get lastName() {
    return this._lastName.getValue();
  }

  get lastName$() {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName.next(value);
  }
}
