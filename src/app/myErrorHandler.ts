import { ErrorHandler } from '@angular/core';

export default class myErrorHandler implements ErrorHandler {
   
      
   handleError(error) {
     console.log(error);
   }
}  