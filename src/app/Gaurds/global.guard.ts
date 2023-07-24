import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GaurdService } from '../Service/gaurd.service';

export const globalGuard: CanActivateFn = (route, state) => {
  const authService: GaurdService=inject(GaurdService)
  const router:Router=inject(Router)

  var isValid = authService.getToken()
  if(isValid)
   return true

   router.navigateByUrl('/')
  return false;
};
    