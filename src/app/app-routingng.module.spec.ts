import { AppRoutingngModule } from './app-routingng.module';

describe('AppRoutingngModule', () => {
  let appRoutingngModule: AppRoutingngModule;

  beforeEach(() => {
    appRoutingngModule = new AppRoutingngModule();
  });

  it('should create an instance', () => {
    expect(appRoutingngModule).toBeTruthy();
  });
});
