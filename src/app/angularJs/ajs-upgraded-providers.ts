import { DataService } from "./angularJs.service";

export function DataServiceFactory(i: any) {
  return i.get('data');
}

export const DataServiceProvider = {
  provide: DataService,
  useFactory: DataServiceFactory,
  deps: ['$injector']
};