import { convertToParamMap, ParamMap, Params } from "@angular/router";
import { ReplaySubject } from "rxjs";

// a activatedroutestub to be able to be used in different test.

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */

export class ActivatedRouteStub {

    // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable

    private subject = new ReplaySubject<ParamMap>();

    constructor(intialParams: Params) {
        this.setParamMap(intialParams);
    }

    /** The mock paramMap observable */
    readonly paramMap = this.subject.asObservable();

    /** Set the paramMap observables's next value */
    setParamMap(params: Params) {
        this.subject.next(convertToParamMap(params));
    }
}