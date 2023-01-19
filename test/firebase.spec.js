import { signInWithPopup } from 'firebase/auth';
import { collection, doc } from 'firebase/firestore';
import {
  deletePost, getTasks, saveTask, signIn,
} from '../src/firebase.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
// testear que al llamar la funcion signIn , la funcion signIn poppup realmente se llame.
// ideas : .toHaveBeenCalled() mocks ya creado promise resolve.

describe('signIn Test', () => {
  it('debería llamar la función signInWithPopup', () => {
    signIn();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('getTasks Test', () => {
  it('debería llamar la función collection', () => {
    getTasks();
    expect(collection).toHaveBeenCalled();
  });
});

describe('saveTask Test', () => {
  it('debería llamar la función collection', () => {
    saveTask();
    expect(collection).toHaveBeenCalled();
  });
});

describe('deletePost Test', () => {
  it('debería llamar la función doc', () => {
    deletePost();
    expect(doc).toHaveBeenCalled();
  });
});
