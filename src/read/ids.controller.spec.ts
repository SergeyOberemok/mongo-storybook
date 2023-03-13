import { Test, TestingModule } from '@nestjs/testing';
import { IdsController } from './ids.controller';

describe('IdsController', () => {
  let controller: IdsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdsController],
    }).compile();

    controller = module.get<IdsController>(IdsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
