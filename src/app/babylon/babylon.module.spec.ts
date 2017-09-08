import {BabylonModule} from './babylon.module';

describe('BabylonModule', () => {
  let babylonModule: BabylonModule;

  beforeEach(() => {
    babylonModule = new BabylonModule();
  });

  it('should create an instance', () => {
    expect(babylonModule).toBeTruthy();
  });
});
