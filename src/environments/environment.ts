// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // URL: 'http://localhost:8080',
  URL : 'http://ec2-63-32-57-65.eu-west-1.compute.amazonaws.com:8080',
  // APIURL : 'http://localhost:10000',
  APIURL : 'http://ec2-34-253-54-125.eu-west-1.compute.amazonaws.com/sarafuApi',
  BATCHURL : 'http://ec2-63-32-57-65.eu-west-1.compute.amazonaws.com:8008',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
