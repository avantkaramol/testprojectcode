import { TestBed, async, inject  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	 providers: [AuthGuardService],
      imports: [RouterTestingModule]

  }));

   it('checks if a user is valid',

    // inject your guard service AND Router
    async(inject([AuthGuardService, Router], (auth, router) => {

      // add a spy
      spyOn(router, 'navigate');

      expect(auth.canActivate()).toBeFalsy();
      expect(router.navigate).toHaveBeenCalled();
    })
  ));

  
});
