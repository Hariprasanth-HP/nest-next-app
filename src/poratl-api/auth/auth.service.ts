import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { handle } from './authService/handler/list';
@Injectable()
export class AuthService {
  public async getAll() {
    const qry = [
      {
        color: 'purple',
        capacity: 7,
      },
      {
        color: 'green',
        capacity: 8,
      },
      {
        color: 'yellow',
        capacity: 9,
      },
    ];
    const data = qry.map((dat) => {
      return {
        id: randomUUID(),
        color: dat.color,
        capacity: dat.capacity,
      };
    });
    return data;
  }
}
