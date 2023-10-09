import { appDataSource } from './data-source';
import { Person } from '../Model/Person';

export const userRepo = appDataSource.getRepository(Person);