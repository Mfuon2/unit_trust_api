import { Injectable } from '@nestjs/common';

@Injectable()
export class TrustService {
  getHello(): string {
    return 'Hello World!';
  }
}
